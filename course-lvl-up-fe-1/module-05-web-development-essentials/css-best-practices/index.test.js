/**
 * @jest-environment jsdom
 */
const path = require("path");
const { readFileSync } = require("fs");

const fileToString = readFileSync(path.join(__dirname, "index.html"), "utf-8");
const cssFileToString = readFileSync(
  path.join(__dirname, "solution.css"),
  "utf-8"
);

describe("Module - Css Best Practices", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = fileToString;

    const head = document.querySelector("head");
    const styles = document.createElement("style");

    styles.innerHTML = cssFileToString;

    head.appendChild(styles);
  });

  describe("Exercise 1 - Style Navbar", () => {
    describe("font-family", () => {
      it("Should have font family", () => {
        const everything = document.querySelector("*");

        const styles = getComputedStyle(everything);

        expect(styles.fontFamily).toBe("Arial, Helvetica, sans-serif");
      });
    });

    describe("navbar", () => {
      let navbar = null;
      let styles = null;

      beforeEach(() => {
        navbar = document.querySelector(".navbar");
        styles = getComputedStyle(navbar);
      });

      it("Should be defined", () => {
        expect(navbar).toBeDefined();
      });

      it("Should be with correct background", () => {
        const { backgroundColor } = styles;

        expect(backgroundColor).toBe("rgb(245, 245, 245)");
      });

      it("Should be fixed", () => {
        const { position } = styles;

        expect(position).toBe("fixed");
      });

      it("Should have width 100%", () => {
        const { width } = styles;

        expect(width).toBe("100%");
      });

      it("Should have padding 20px", () => {
        const { paddingTop, paddingBottom } = styles;

        expect(paddingTop).toBe("20px");
        expect(paddingBottom).toBe("20px");
      });

      it("Should have border only on the bottom", () => {
        const { borderTop, borderLeft, borderRight, borderBottom } = styles;

        expect(borderTop).toBe("");
        expect(borderLeft).toBe("");
        expect(borderRight).toBe("");
        expect(borderBottom).not.toBe("");
      });

      it("Should be solid", () => {
        const { borderBottomStyle } = styles;

        expect(borderBottomStyle).toBe("solid");
      });

      it("Should have width 1px", () => {
        const { borderBottomWidth } = styles;

        expect(borderBottomWidth).toBe("1px");
      });

      it("Should be with space between", () => {
        const { display, flexDirection, justifyContent } = styles;

        expect(display).toBe("flex");
        expect(flexDirection).toBe("row");
        expect(justifyContent).toBe("space-between");
      });

      it("Should push content 24px horizontally", () => {
        const navLinks = document.querySelector(".nav-links");
        const header = document.querySelector(".header");

        const { alignItems, alignContent } = styles;
        const navLinksStyles = getComputedStyle(navLinks);
        const headerStyles = getComputedStyle(header);
        const isCentered =
          alignItems === "center" ||
          alignContent === "center" ||
          navLinksStyles.marginTop === "auto" ||
          navLinksStyles.marginBottom === "auto" ||
          headerStyles.marginTop === "auto" ||
          headerStyles.marginBottom === "auto";

        expect(navLinksStyles.marginLeft).toBe("24px");
        expect(headerStyles.marginLeft).toBe("24px");

        expect(navLinksStyles.marginRight).toBe("24px");
        expect(headerStyles.marginRight).toBe("24px");

        expect(isCentered).toBeTruthy();
      });
    });

    describe("nav-links", () => {
      it("Should be defined", () => {
        const links = document.querySelectorAll(".link");

        const { length } = links;

        expect(links).toBeDefined();
        expect(length).toEqual(4);
      });

      it("Should display list items inline", () => {
        const navbar = document.querySelector(".navbar");
        const styles = getComputedStyle(navbar);

        const { display, flexDirection } = styles;

        expect(display).toBe("flex");
        expect(flexDirection).toBe("row");
      });

      it("Should have space between list items equals 32px", () => {
        const navLinks = document.querySelector(".nav-links");
        const listItems = document.querySelectorAll(".link");
        const navLinksStyles = getComputedStyle(navLinks);

        const listItemsStyles = Array.from(listItems).map((li) => {
          const listItemStyles = getComputedStyle(li);

          return listItemStyles.marginLeft;
        });
        const isAllListItemsHasMarginRight = listItemsStyles.every(
          (marginLeft) => marginLeft === "32px"
        );

        const { gap } = navLinksStyles;
        const isCorrectSpacing = gap === "32px" || isAllListItemsHasMarginRight;

        expect(isCorrectSpacing).toBeTruthy();
      });

      it("Should have no bullet markers", () => {
        const navLinks = document.querySelector(".nav-links");
        const navLinksStyles = getComputedStyle(navLinks);

        const { listStyleType } = navLinksStyles;

        expect(listStyleType).toBe("none");
      });

      it("Should have list items with correct font size of 18px", () => {
        const anchors = document.querySelectorAll(".link a");

        const anchorFontSizes = Array.from(anchors).map((a) => {
          const anchorStyles = getComputedStyle(a);

          return anchorStyles.fontSize;
        });
        const isAllAnchorsCorrectPixels = anchorFontSizes.every(
          (fs) => fs === "18px"
        );

        expect(isAllAnchorsCorrectPixels).toBeTruthy();
      });
    });

    describe("header", () => {
      let header = null;

      beforeAll(() => {
        header = document.querySelector(".header");
      });

      it("Should be defined", () => {
        expect(header).toBeDefined();
      });

      it("Should contain a child h1", () => {
        const { children } = header;

        const childrenCount = children.length;
        const [child] = children;
        const { className, tagName } = child;

        expect(childrenCount).toEqual(1);
        expect(className).toEqual("title");
        expect(tagName).toEqual("H1");
      });

      it("Should be with fontSize of 32px", () => {
        const title = document.querySelector(".title");

        const titleStyles = getComputedStyle(title);
        const { fontSize } = titleStyles;

        expect(fontSize).toBe("32px");
      });
    });
  });

  describe("Exercise 2 - Specificity", () => {
    describe("hero", () => {
      it("Should have background of #A7C3CF", () => {
        const hero = document.querySelector(".hero");

        const heroStyle = getComputedStyle(hero);
        const { backgroundColor } = heroStyle;

        expect(backgroundColor).toBe("rgb(167, 195, 207)");
      });
    });

    describe("title", () => {
      it("Should have font size of 32px", () => {
        const title = document.querySelector(".hero-title");

        const titleStyles = getComputedStyle(title);
        const { fontSize } = titleStyles;

        expect(fontSize).toBe("32px");
      });
    });

    describe("button", () => {
      let button = null;
      let buttonStyles = null;

      beforeEach(() => {
        button = document.querySelector(".hero-button");
        buttonStyles = getComputedStyle(button);
      });

      it("Should have width of 100px", () => {
        const { width } = buttonStyles;

        expect(width).toBe("100px");
      });

      it("Should have background color of #253F6E", () => {
        const { backgroundColor } = buttonStyles;

        expect(backgroundColor).toBe("rgb(37, 63, 110)");
      });

      it("Should have color of white", () => {
        const { color } = buttonStyles;

        expect(color).toBe("white");
      });

      it("Should have border radius of 12px", () => {
        const { borderRadius } = buttonStyles;

        expect(borderRadius).toBe("12px");
      });
    });
  });
});
