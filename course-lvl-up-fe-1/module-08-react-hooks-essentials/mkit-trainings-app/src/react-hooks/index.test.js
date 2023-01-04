import { createRoot } from "react-dom/client";
import { act } from "react-test-renderer";
import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import {
  useMousePosition,
  useDebounce,
  useLocalStorage,
  useStatus,
  useApi,
} from "./solution";

describe("Exercise 1 - Mouse Position", () => {
  describe("useMousePosition()", () => {
    let container = null;
    let root = null;

    const testInput = [
      { clientX: 50, clientY: 100 },
      { clientX: 30, clientY: 14 },
      { clientX: 20, clientY: 0 },
      { clientX: 0, clientY: 0 },
      { clientX: 100, clientY: 100 },
    ];

    beforeEach(() => {
      // set up a DOM element as a render target
      container = document.createElement("div");
      document.body.appendChild(container);
      root = createRoot(container);
    });

    afterEach(() => {
      // cleanup on exiting
      act(() => {
        root.unmount(container);
        container.remove();
        container = null;
      });
    });

    it("Should be defined", () => {
      expect(useMousePosition).toBeDefined();
    });

    it("Should return object", () => {
      const { result } = renderHook(() => useMousePosition());

      const returnedValue = result.current;

      expect(returnedValue).toBeInstanceOf(Object);
    });

    test.each(["x", "y"])("Should return Object with property %s", (prop) => {
      const { result } = renderHook(() => useMousePosition());

      const returnedValue = result.current;

      expect(returnedValue).toHaveProperty(prop);
    });

    test.each(testInput)(
      "Should return $clientX and $clientY on mouse event with clientX: $clientX and clientY: $clientY",
      ({ clientX, clientY }) => {
        const { result } = renderHook(() => useMousePosition());

        fireEvent.mouseMove(container, { clientX, clientY });

        const { x, y } = result.current;

        expect(x).toBe(clientX);
        expect(y).toBe(clientY);
      }
    );

    it("Should return correct clientX and clientY on rerender", () => {
      const { result } = renderHook(() => useMousePosition());

      fireEvent.mouseMove(container, { clientX: 100, clientY: 100 });

      expect(result.current.x).toBe(100);
      expect(result.current.y).toBe(100);

      fireEvent.mouseMove(container, { clientX: 80, clientY: 30 });

      expect(result.current.x).toBe(80);
      expect(result.current.y).toBe(30);
    });
  });
});

describe("Exercise 1 - useDebounce", () => {
  describe("useDebounce()", () => {
    // const testInput = [10, 42, 100, 32, 56, 78, 98, 11190, 48];
    const testInput = [
      {
        value: 10,
        delay: 1500,
      },
      {
        value: 42,
        delay: 2000,
      },
      {
        value: 100,
        delay: 2500,
      },
      {
        value: 32,
        delay: 3000,
      },
      {
        value: 56,
        delay: 3500,
      },
      {
        value: 78,
        delay: 4000,
      },
      {
        value: 98,
        delay: 4500,
      },
      {
        value: 11190,
        delay: 5000,
      },
      {
        value: 48,
        delay: 5500,
      },
    ];

    beforeAll(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it("Should be defined", () => {
      expect(useDebounce).toBeDefined();
    });

    test.each(testInput)(
      "Should value be undefined before delay has expired",
      ({ value }) => {
        const { result } = renderHook(() => useDebounce(value));

        const { current: debouncedValue } = result;

        expect(debouncedValue).toBeUndefined();
      }
    );

    test.each(testInput)(
      "Should value be $value on delay has expired",
      ({ value, delay }) => {
        const { result } = renderHook(() => useDebounce(value));

        act(() => {
          jest.advanceTimersByTime(delay);
        });

        const { current: debouncedValue } = result;

        expect(debouncedValue).toBe(value);
      }
    );
  });
});

describe("Exercise 3 - useLocalStorage", () => {
  describe("useLocalStorage()", () => {
    const setItemTestInput = [
      {
        key: "name",
        value: "John",
        changedValue: "Peter",
      },
      {
        key: "surname",
        value: "Doe",
        changedValue: "Parker",
      },
      {
        key: "age",
        value: 18,
        changedValue: "16",
      },
      {
        key: "hungry",
        value: true,
        changedValue: false,
      },
      {
        key: "driving",
        value: false,
        changedValue: true,
      },
    ];

    beforeEach(() => {
      Object.defineProperty(window, "localStorage", {
        value: {
          getItem: jest.fn(() => null),
          setItem: jest.fn(() => null),
          removeItem: jest.fn(() => null),
        },
        writable: true,
      });
    });

    it("Should be defined", () => {
      expect(useLocalStorage).toBeDefined();
    });

    describe("initial setValue", () => {
      it("Should be called", () => {
        const setItemSpy = jest.spyOn(window.localStorage, "setItem");
        renderHook(() => useLocalStorage("name", "John"));

        expect(setItemSpy).toHaveBeenCalledTimes(1);
      });

      test.each(setItemTestInput)(
        'Should set $key: "$value" in local storage',
        ({ key, value }) => {
          const setItemSpy = jest.spyOn(window.localStorage, "setItem");
          renderHook(() => useLocalStorage(key, value));

          expect(setItemSpy).toHaveBeenCalledWith(key, JSON.stringify(value));
        }
      );
    });

    describe("setValue", () => {
      it("Should be called twice", () => {
        const setItemSpy = jest.spyOn(window.localStorage, "setItem");
        const { result } = renderHook(() => useLocalStorage("name", "John"));
        const setItem = result.current[1];

        act(() => {
          setItem("Peter");
        });

        expect(setItemSpy).toHaveBeenCalledTimes(2);
      });

      test.each(setItemTestInput)(
        "Should change $key from $value to $changedValue",
        ({ key, value, changedValue }) => {
          const setItemSpy = jest.spyOn(window.localStorage, "setItem");
          const { result } = renderHook(() => useLocalStorage(key, value));
          const setItem = result.current[1];

          act(() => {
            setItem(changedValue);
          });

          expect(setItemSpy).toHaveBeenNthCalledWith(
            2,
            key,
            JSON.stringify(changedValue)
          );
        }
      );
    });

    describe("removeValue", () => {
      it("Should be called", () => {
        const removeItemSpy = jest.spyOn(window.localStorage, "removeItem");
        const { result } = renderHook(() => useLocalStorage("name", "John"));
        const removeValue = result.current[2];

        act(() => {
          removeValue("name");
        });

        expect(removeItemSpy).toHaveBeenCalledTimes(1);
      });

      test.each(setItemTestInput)(
        "Should remove $key from localStorage",
        ({ key, value }) => {
          const removeValueSpy = jest.spyOn(window.localStorage, "removeItem");
          const { result } = renderHook(() => useLocalStorage(key, value));
          const removeValue = result.current[2];

          act(() => {
            removeValue(key);
          });

          expect(removeValueSpy).toHaveBeenCalledWith(key);
        }
      );
    });
  });
});

describe("Exercise 4 - Online Status", () => {
  describe("useStatus()", () => {
    let onLineSpy = null;

    beforeAll(() => {
      onLineSpy = jest.spyOn(window.navigator, "onLine", "get");
    });

    it("Should be defined", () => {
      expect(useStatus).toBeDefined();
    });

    it("Should return a boolean", () => {
      onLineSpy.mockReturnValue(true);

      const { result } = renderHook(() => useStatus());

      expect(typeof result.current).toBe("boolean");
    });

    it("Should return true on online", async () => {
      onLineSpy.mockReturnValue(true);

      const { result } = renderHook(() => useStatus());

      expect(result.current).toBe(true);
    });

    it("Should return false on offline", () => {
      const { result } = renderHook(() => useStatus());

      act(() => {
        const goOffline = new window.Event("offline");

        onLineSpy.mockReturnValue(false);

        window.dispatchEvent(goOffline);
      });

      expect(result.current).toBe(false);
    });
  });
});

describe("Exercise 5 - useApi", () => {
  describe("useApi()", () => {
    let fetchSpy = null;
    const url = "http://www.example.com";
    const expectedErrorResponse = { message: "Not Found!", statusCode: 404 };
    const expectedDataResponse = { name: "John", age: 32 };

    beforeEach(() => {
      jest.useFakeTimers();

      window.fetch = jest.fn(
        () => new Promise((resolve) => setTimeout(resolve, 100))
      );

      fetchSpy = jest.spyOn(window, "fetch");
      fetchSpy.mockRejectedValue(expectedErrorResponse);
      fetchSpy.mockResolvedValue(expectedDataResponse);
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    afterAll(() => {
      window.fetch.mockClear();
    });

    it("Should be defined", () => {
      expect(useApi).toBeDefined();
    });

    it("Should call fetch", async () => {
      const { waitForNextUpdate } = renderHook(() => useApi(url));

      await waitForNextUpdate();

      expect(fetchSpy).toHaveBeenCalledTimes(1);

      expect(fetchSpy).toBeCalledWith(url);
    });

    describe("data", () => {
      it("Should return data on fulfilled", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useApi(url));

        await waitForNextUpdate();

        const { data, error, loading } = result.current;

        expect(data).toBeInstanceOf(Object);

        expect(data).toEqual(expectedDataResponse);
        expect(error).toBeNull();

        expect(loading).toBe(false);
      });
    });

    describe("error", () => {
      it("Should return error on rejected", async () => {
        window.fetch.mockClear();
        window.fetch = jest.fn(() => Promise.reject(expectedErrorResponse));

        const { result, waitForNextUpdate } = renderHook(() => useApi(url));

        await waitForNextUpdate();

        const { data, error, loading } = result.current;

        expect(error).toBeInstanceOf(Object);
        expect(error).toEqual(expectedErrorResponse);

        expect(data).toBeNull();

        expect(loading).toBe(false);
      });
    });

    describe("loading", () => {
      it("Should change loading state depending on promise state", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useApi(url));

        expect(result.current.loading).toBe(true);

        await waitForNextUpdate();

        expect(result.current.loading).toBe(false);
      });
    });

    describe("refetch", () => {
      it("Should call fetch on refetch", async () => {
        const { result, waitForNextUpdate } = renderHook(() => useApi(url));

        await waitForNextUpdate();

        const { refetch } = result.current;

        await act(async () => {
          await refetch();
        });

        expect(fetchSpy).toHaveBeenCalledTimes(2);
        expect(fetchSpy).toBeCalledWith(url);
      });

      it("Should change state if response is different", async () => {
        const expectedDataAfterRefetch = { name: "Peter", age: 23 };
        const expectedErrorAfterResponse = {
          message: "Not Found!",
          statusCode: 404,
        };

        const { result, waitForNextUpdate } = renderHook(() => useApi(url));

        expect(result.current.loading).toBe(true);

        await waitForNextUpdate();

        const {
          refetch,
          data: dataBeforeRefetch,
          error: errorBeforeRefetch,
          loading: loadingBeforeRefetch,
        } = result.current;

        expect(loadingBeforeRefetch).toBe(false);
        expect(dataBeforeRefetch).toEqual(expectedDataResponse);
        expect(errorBeforeRefetch).toBeNull();

        fetchSpy.mockRejectedValue(expectedErrorAfterResponse);
        fetchSpy.mockResolvedValue(expectedDataAfterRefetch);

        await act(async () => {
          await refetch();
        });

        const {
          data: dataAfterRefetch,
          error: errorAfterRefetch,
          loading: loadingAfterRefetch,
        } = result.current;

        expect(loadingAfterRefetch).toBe(false);
        expect(dataAfterRefetch).toEqual(expectedDataAfterRefetch);
        expect(dataAfterRefetch).not.toEqual(expectedDataResponse);
        expect(errorAfterRefetch).toBeNull();
      });
    });
  });
});
