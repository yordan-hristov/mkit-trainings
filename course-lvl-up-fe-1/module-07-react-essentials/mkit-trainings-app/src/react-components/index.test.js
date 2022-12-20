import {
  fireEvent,
  render,
  screen,
  within,
  configure,
} from "@testing-library/react";
import { Search, Menu, AddTwo, UserCard } from "./solution";

configure({ testIdAttribute: "id" });

describe("Exercise #1 - Click on Menu Item", () => {
  describe("Menu", () => {
    const testInput = ["Home", "Test", "John", "Harry"];

    it("Should be defined", () => {
      expect(Menu).toBeDefined();
    });

    afterAll(() => {
      window.alert.mockClear();
    });

    test.each(testInput)("Should display menuItems as list items", (item) => {
      render(<Menu menuItems={testInput} />);

      const list = screen.getByRole("list");
      const { getByText } = within(list);
      const menuItem = getByText(item);

      expect(menuItem).toBeDefined();
    });

    test.each(testInput)("Should alert with correct menu item", (item) => {
      render(<Menu menuItems={testInput} />);
      window.alert = jest.fn();
      const alertSpy = jest.spyOn(window, "alert");

      const list = screen.getByRole("list");
      const { getByText } = within(list);
      const menuItem = getByText(item);

      fireEvent.click(menuItem, { target: { id: item, value: item } });

      expect(alertSpy).toHaveBeenCalledWith(item);
    });
  });
});

describe("Exercise 2 - Search in TODO List", () => {
  describe("Search", () => {
    const testInput = ["Hello", "Test"];
    it("Should be defined", () => {
      expect(Search).toBeDefined();
    });

    it("Should accept todoList as props", () => {
      render(<Search todoList={testInput} />);

      const list = screen.getByRole("list");
      const { getAllByRole } = within(list);
      const items = getAllByRole("listitem");

      expect(items.length).toBe(2);
    });

    it("Should have an input", () => {
      render(<Search todoList={testInput} />);

      const input = screen.getAllByPlaceholderText("Search...");

      expect(input).toBeDefined();
    });

    it("Should have input of type text", () => {
      render(<Search todoList={testInput} />);

      const input = screen.getByRole("textbox");
      const { type } = input;

      expect(type).toBe("text");
    });

    it("Should have text that displays value of the input", () => {
      const paraText = "You are searching for";

      render(<Search todoList={testInput} />);

      const input = screen.getByRole("textbox");
      const paragraph = screen.getByText(paraText);
      fireEvent.change(input, { target: { value: "test-value" } });

      expect(paragraph).toHaveTextContent("You are searching for test-value");

      fireEvent.change(input, { target: { value: "test-value-2" } });

      expect(paragraph).toHaveTextContent("You are searching for test-value-2");
    });

    it("Should filter todo list if search match", () => {
      const filterValueHello = "Hello";
      render(<Search todoList={testInput} />);

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: filterValueHello } });
      const list = screen.getByRole("list");
      const { getAllByRole } = within(list);
      const items = getAllByRole("listitem");
      const { length: itemsLength } = items;

      const isListItemsWithHelloValue = items.every(
        (i) => i.textContent === filterValueHello
      );

      expect(itemsLength).toBe(1);
      expect(isListItemsWithHelloValue).toBeTruthy();
    });

    it("Should not change todo list if search value does not match", () => {
      render(<Search todoList={testInput} />);

      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "test-value" } });
      const list = screen.getByRole("list");
      const { getAllByRole } = within(list);
      const items = getAllByRole("listitem");
      const { length: itemsLength } = items;

      expect(itemsLength).toBe(2);
    });
  });
});

describe("Exercise 3 - Add 2 Numbers", () => {
  describe("AddTwo", () => {
    it("Should be defined", () => {
      expect(AddTwo).toBeDefined();
    });

    it("Should have 2 inputs", () => {
      render(<AddTwo />);

      const inputs = screen.getAllByRole("spinbutton");
      const { length } = inputs;

      expect(length).toBe(2);
    });

    it("Should have inputs of type number", () => {
      render(<AddTwo />);

      const inputs = screen.getAllByRole("spinbutton");
      const areOfTypeNumber = inputs.every((i) => i.type === "number");

      expect(areOfTypeNumber).toBeTruthy();
    });

    describe("button", () => {
      const inputs = [
        [1, 2],
        [2, 4],
        [5, 4],
        [4, 9],
        [0, 0],
        [1, 5],
        [20, 34],
        [45, 67],
      ];

      it("Should be defined", () => {
        render(<AddTwo />);

        const button = screen.getByRole("button");
        const { textContent: buttonText } = button;

        expect(button).toBeDefined();
        expect(buttonText).toBe("Calc");
      });

      test.each(inputs)("Should add 2 numbers", (a, b) => {
        render(<AddTwo />);
        const [inputOne, inputTwo] = screen.getAllByRole("spinbutton");
        const button = screen.getByRole("button");

        fireEvent.change(inputOne, { target: { value: a } });
        fireEvent.change(inputTwo, { target: { value: b } });
        fireEvent.click(button);
        const { textContent } = screen.getByText(/sum/i);

        expect(textContent).toBe(`Sum: ${a + b}`);
      });
    });

    describe("render", () => {
      const input = [
        [1, 2, 2],
        [3, 2, 2],
        [3, 2, 2],
        [1, 2, 2],
      ];

      it("Should be defined", () => {
        render(<AddTwo />);

        const renderParagraph = screen.getByText(/render/i);
        expect(renderParagraph).toBeDefined();
      });

      test.each(input)(
        "Should not render if sum does not change",
        (a, b, renderedCount) => {
          render(<AddTwo />);

          const [inputOne, inputTwo] = screen.getAllByRole("spinbutton");
          const button = screen.getByRole("button");

          fireEvent.change(inputOne, { target: { value: a } });
          fireEvent.change(inputTwo, { target: { value: b } });
          fireEvent.click(button);
          fireEvent.click(button);
          fireEvent.click(button);
          fireEvent.click(button);
          fireEvent.click(button);
          fireEvent.click(button);
          const { textContent } = screen.getByText(/rendered/i);

          expect(textContent).toBe(`Rendered: ${renderedCount}`);
        }
      );
    });
  });
});

describe("Exercise 4 - User Card", () => {
  describe("UserCard", () => {
    it("Should be defined", () => {
      expect(UserCard).toBeDefined();
    });

    it('Should have a paragraph with text content "John"', () => {
      render(<UserCard />);

      const name = screen.getByTestId("name");

      expect(name).toBeDefined();
    });

    it("Should have 2 inputs of type text", () => {
      render(<UserCard />);

      const inputs = screen.getAllByRole("textbox");

      const isInputsText = inputs.every((i) => i.type === "text");

      expect(inputs.length).toBe(2);
      expect(isInputsText).toBeTruthy();
    });

    it('Should have a paragraph with id "age"', () => {
      render(<UserCard />);

      const ageParagraph = screen.getByTestId("userAge");

      expect(ageParagraph).toBeDefined();
    });

    it('Should have a paragraph with id "description"', () => {
      render(<UserCard />);

      const descriptionParagraph = screen.getByTestId("userDescription");

      expect(descriptionParagraph).toBeDefined();
    });

    describe("inputs", () => {
      it("Should change userAge text content", () => {
        render(<UserCard />);

        const input = screen.getByTestId("age");
        fireEvent.change(input, { target: { value: "4" } });
        const { textContent } = screen.getByTestId("userAge");

        expect(textContent).toBe("Age: 4");
      });

      it("Should change userDescription text content", () => {
        render(<UserCard />);

        const input = screen.getByTestId("description");
        fireEvent.change(input, { target: { value: "Test" } });
        const { textContent } = screen.getByTestId("userDescription");

        expect(textContent).toBe("Description: Test");
      });
    });

    describe("Age", () => {
      it("Should not rerender if Description is changing", () => {
        render(<UserCard />);

        const { textContent: textCountBeforeChanging } =
          screen.getByTestId("ageRenderCount");

        const descriptionInput = screen.getByTestId("description");

        fireEvent.change(descriptionInput, { target: { value: "test1" } });
        fireEvent.change(descriptionInput, { target: { value: "test2" } });
        fireEvent.change(descriptionInput, { target: { value: "test3" } });
        fireEvent.change(descriptionInput, { target: { value: "test4" } });

        const { textContent: textCountAfterChanging } =
          screen.getByTestId("ageRenderCount");

        expect(textCountAfterChanging).toEqual(textCountBeforeChanging);
      });
    });

    describe("Description", () => {
      it("Should not rerender if Age is changing", () => {
        render(<UserCard />);

        const { textContent: textCountBeforeChanging } = screen.getByTestId(
          "descriptionRenderCount"
        );

        const ageInput = screen.getByTestId("age");

        fireEvent.change(ageInput, { target: { value: "test1" } });
        fireEvent.change(ageInput, { target: { value: "test2" } });
        fireEvent.change(ageInput, { target: { value: "test3" } });
        fireEvent.change(ageInput, { target: { value: "test4" } });

        const { textContent: textCountAfterChanging } = screen.getByTestId(
          "descriptionRenderCount"
        );

        expect(textCountAfterChanging).toEqual(textCountBeforeChanging);
      });
    });
  });
});
