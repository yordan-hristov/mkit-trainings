import { useState, useEffect } from "react";

/**
 * Exercise #1 - Mouse Position
 *
 * @returns {Object} position
 * @property {number} position.x
 * @property {number} position.y
 */
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function updateMousePosition(event) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return position;
}

/**
 * Exercise #2 - useDebounce
 *
 * @param {number | string} value
 * @param {number} delay
 * @returns {number}
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(undefined);

  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );

  return debouncedValue;
}

/**
 * Exercise #3 - useLocalStorage
 *
 * @param {string} key
 * @param {string} value
 * @returns {Array}
 */
export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (value === null) {
      localStorage.removeItem(key);
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  const removeValue = () => setValue(null);

  return [value, setValue, removeValue];
};

/**
 * Exercise #4 - Online Status
 *
 * @returns {boolean}
 */
export function useStatus() {
  const [status, setStatus] = useState(window.navigator.onLine);

  const goOnline = () => setStatus(true);

  const goOffline = () => setStatus(false);

  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return status;
}

/**
 *
 * @param {string} url
 * @returns {{ data: Object; loading: boolean; error: Object; refetch: () => Promise<void> }}
 */
export function useApi(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const refetch = async () => {
    setLoading(true);

    try {
      const apiResponse = await fetch(url);
      setData(apiResponse);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    refetch();
  }, []);

  return { data, error, loading, refetch };
}
