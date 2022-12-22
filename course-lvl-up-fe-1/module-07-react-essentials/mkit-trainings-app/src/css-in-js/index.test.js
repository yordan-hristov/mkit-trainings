import { fireEvent, render, screen, configure } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import {
  Toggle,
  ColorfulWord,
  StyledComponent,
  StyledChildren,
  Box,
} from "./index";

configure({ testIdAttribute: "id", computedStyleSupportsPseudoElements: true });

describe("Exercise 1 - Toggle Button", () => {
  describe("Toggle", () => {
    it("Should be defined", () => {
      expect(Toggle).toBeDefined();
    });

    it("Should have color of blue", () => {
      render(<Toggle isOn={true} />);

      const toggleButton = screen.getByRole("button");

      expect(toggleButton).toHaveStyleRule("color", "blue");
    });

    const input = [
      { isOn: true, expected: ["color", "blue"], description: "color of blue" },
      { isOn: false, expected: ["color", "red"], description: "color of red" },
    ];

    test.each(input)(
      "Should have $description when isOn is $isOn",
      ({ isOn, expected }) => {
        render(<Toggle isOn={isOn} />);

        const toggleButton = screen.getByRole("button");

        expect(toggleButton).toHaveStyleRule(...expected);
      }
    );

    it("Should have 100% width", () => {
      render(<Toggle isOn={true} />);

      const toggleButton = screen.getByRole("button");

      expect(toggleButton).toHaveStyleRule("width", "100%");
    });

    it("Should change width to 50% on button click", () => {
      render(<Toggle isOn={true} />);

      const toggleButton = screen.getByRole("button");

      fireEvent.click(toggleButton);

      expect(toggleButton).toHaveStyleRule("width", "50%");
    });

    it("Should have 100% width when Toggle is clicked 6 times", () => {
      render(<Toggle isOn={true} />);

      const toggleButton = screen.getByRole("button");

      Array.from({ length: 6 }).forEach(() => {
        fireEvent.click(toggleButton);
      });

      expect(toggleButton).toHaveStyleRule("width", "100%");
    });
  });
});

describe("Exercise 2 - Colorful Word", () => {
  describe("ColorfulWord", () => {
    const colorScheme = ["blue", "red", "green", "yellow", "cyan", "violet"];

    const testWords = ["Test", "Action", "Peter", "Harry"];

    it("Should be defined", () => {
      expect(ColorfulWord).toBeDefined();
    });

    it("Should return spans", () => {
      const word = "action";
      render(<ColorfulWord word={word} />);

      const spans = screen.getAllByText(/[A-Za-z]/i);

      expect(spans.length).toBe(6);
    });

    describe.each(testWords)("%s", (word) => {
      const wordArray = word.split("");
      const charConfiguration = wordArray.map((char, index) => ({
        char,
        index,
        color: colorScheme[index],
      }));

      test.each(charConfiguration)(
        "Should match $char with a span",
        ({ char, index }) => {
          render(<ColorfulWord word={word} />);

          const span = screen.getByTestId(`${char} - ${index}`);

          expect(span).toBeDefined();
          expect(span.textContent).toBe(char);
        }
      );

      test.each(charConfiguration)(
        "Should have $char in color of $color",
        ({ char, color, index }) => {
          render(<ColorfulWord word={word} />);

          const span = screen.getByTestId(`${char} - ${index}`);

          expect(span).toHaveStyleRule("color", color);
        }
      );
    });
  });
});

describe("Exercise 3 - Fully Controlled Styled Component", () => {
  describe("StyledComponent", () => {
    it("Should be defined", () => {
      expect(StyledComponent).toBeDefined();
    });
  });

  const cssObjects = [
    { color: "red", "font-size": "18px" },
    { "background-color": "yellow", "font-size": "32px" },
    { width: "2px", height: "100vh" },
    { position: "absolute", top: "0px", bottom: "4px" },
  ];

  describe.each(cssObjects)("Should span be styled with %o", (cssObject) => {
    const styles = Object.entries(cssObject).map(([key, value]) => ({
      cssProp: key,
      cssValue: value,
    }));

    test.each(styles)(
      "Should have $cssProp with value of $cssValue",
      ({ cssProp, cssValue }) => {
        render(<StyledComponent styles={cssObject} />);

        const span = screen.getByText("Styled Span");

        expect(span).toHaveStyleRule(cssProp, cssValue);
      }
    );
  });
});

describe("Exercise 4 - Styled Children", () => {
  describe("StyledChildren", () => {
    it("Should be defined", () => {
      expect(StyledChildren).toBeDefined();
    });

    it("Should accept children as props", () => {
      render(
        <StyledChildren>
          <span>Hello World!</span>
        </StyledChildren>
      );

      const children = screen.getByText("Hello World!");

      expect(children).toBeDefined();
      expect(children.textContent).toBe("Hello World!");
    });

    const styles = [
      {
        cssProp: "color",
        cssValue: "red",
      },
      {
        cssProp: "font-size",
        cssValue: "18px",
      },
      {
        cssProp: "font-weight",
        cssValue: "bold",
      },
      {
        cssProp: "text-decoration",
        cssValue: "underline",
      },
      {
        cssProp: "background-color",
        cssValue: "yellow",
      },
      {
        cssProp: "border",
        cssValue: "1px solid black",
      },
      {
        cssProp: "border-width",
        cssValue: "1px",
      },
      {
        cssProp: "border-style",
        cssValue: "solid",
      },
      {
        cssProp: "border-color",
        cssValue: "black",
      },
    ];

    test.each(styles)(
      "Should have children with $cssProp $cssValue",
      ({ cssProp, cssValue }) => {
        render(
          <StyledChildren>
            <span>Hello World!</span>
          </StyledChildren>
        );

        const span = screen.getByText("Hello World!");

        expect(span).toHaveStyle(`${cssProp}: ${cssValue};`);
      }
    );
  });
});

describe("Exercise 5 - Responsive Box", () => {
  describe("Box", () => {
    it("Should be defined", () => {
      expect(Box).toBeDefined();
    });

    const optionsMobile = { deviceWidth: 390, deviceHeight: 844 };

    const optionsTable = { deviceWidth: 768, deviceHeight: 1024 };

    const optionsDesktop = { deviceWidth: 1280, deviceHeight: 800 };

    const testData = [
      {
        height: "500px",
        width: "300px",
        mediaQueries: optionsMobile,
        description: "in device dimensions 390x844",
      },
      {
        height: "800px",
        width: "500px",
        mediaQueries: optionsTable,
        description: "in device dimensions 768x1024",
      },
      {
        height: "300px",
        width: "800px",
        mediaQueries: optionsDesktop,
        description: "in device dimensions 1280x800",
      },
    ];

    it("Should have background color of red", () => {
      render(<Box />);

      const box = screen.getByTestId("styled-component");

      expect(box).toHaveStyleRule("background-color", "red");
    });

    it("Should have border with correct styles", () => {
      render(<Box />);

      const box = screen.getByTestId("styled-component");

      expect(box).toHaveStyleRule("border", "1px solid black");
      expect(box).toHaveStyle("border-width: 1px;");
      expect(box).toHaveStyle("border-style: solid;");
      expect(box).toHaveStyle("border-color: black;");
    });

    test.each(testData)(
      "Should have $width $description",
      ({ width, mediaQueries: { deviceWidth, deviceHeight } }) => {
        render(<Box />);

        const box = screen.getByTestId("styled-component");

        expect(box).toHaveStyleRule("width", width, {
          media: `only screen and (device-width: ${deviceWidth}px) and (device-height: ${deviceHeight}px)`,
        });
      }
    );

    test.each(testData)(
      "Should have $height $description",
      ({ height, mediaQueries: { deviceWidth, deviceHeight } }) => {
        render(<Box />);

        const box = screen.getByTestId("styled-component");

        expect(box).toHaveStyleRule("height", height, {
          media: `only screen and (device-width: ${deviceWidth}px) and (device-height: ${deviceHeight}px)`,
        });
      }
    );
  });
});
