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
    styles.className = "test-styles";

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

  describe("Exercise 3 - Select Nested Elements", () => {
    const todoListHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="./solution.css" />
        <title>Workellence</title>
      </head>
      <body>
        <main>
          <section>
            <h1>How to become a front end web developer</h1>
            <div>
              <ul id="todo-list">
                <li>
                  Learn HTML:
                  <ul>
                    <li>Learn tags</li>
                    <li>
                      Learn HTML structure:
                      <ul>
                        <li class="test-1">Learn HTML parsing</li>
                        <li class="test-1">Learn accessability</li>
                      </ul>
                    </li>
                    <li>Learn attributes</li>
                    <li>Learn SEO</li>
                  </ul>
                </li>
                <li>
                  Learn CSS:
                  <ul>
                    <li>Learn selectors</li>
                    <li id="test-2">Learn specificity</li>
                    <li>Learn pseudo classes</li>
                    <li>Learn BEM convention</li>
                  </ul>
                </li>
                <li>
                  Learn Javascript:
                  <ul>
                    <li>
                      Basics:
                      <ul>
                        <li>Learn primitive and referential types</li>
                        <li id="test-3">Learn operators</li>
                        <li>Learn if statements</li>
                        <li>Learn for loops</li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Fundamentals:
                      <ul>
                        <li>Learn object processing</li>
                        <li>Learn array processing</li>
                        <li>Learn string processing</li>
                        <li id="test-4">Learn regex</li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Advance:
                      <ul>
                        <li class="test-5">Learn HTTP</li>
                        <li class="test-5">Learn Modules and Module Bundlers</li>
                        <li class="test-5">Learn Compilers/Interpretators/Transpilers</li>
                        <li class="test-5">Learn DOM</li>
                        <li class="test-5">Learn Testing</li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Proficient:
                      <ul>
                        <li class="test-6">Learn React</li>
                        <li class="test-6">Learn Virtual DOM</li>
                        <li class="test-6">Learn React Hooks</li>
                        <li class="test-6">Learn Redux</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </body>
    </html>`;

    beforeEach(() => {
      document.documentElement.innerHTML = todoListHTML;

      const head = document.querySelector("head");
      const styles = document.createElement("style");
      styles.className = "test-styles";

      styles.innerHTML = cssFileToString;

      head.appendChild(styles);
    });

    afterAll(() => {
      document.documentElement.innerHTML = fileToString;

      const head = document.querySelector("head");
      const styles = document.createElement("style");
      styles.className = "test-styles";

      styles.innerHTML = cssFileToString;

      head.appendChild(styles);
    });

    it(`Should have "Learn HTML structure" list items red`, () => {
      const listItems = document.querySelectorAll(".test-1");

      const listItemsColors = Array.from(listItems).map((listItem) => {
        const listItemStyles = getComputedStyle(listItem);

        const { color } = listItemStyles;

        return color;
      });

      const isEveryListItemRed = listItemsColors.every(
        (color) => color === "red"
      );

      expect(isEveryListItemRed).toBeTruthy();
    });

    it(`Should have "Learn specificity"`, () => {
      const listItem = document.querySelector("#test-2");

      const listItemStyles = getComputedStyle(listItem);
      const { color } = listItemStyles;

      expect(color).toBe("yellow");
    });

    it(`Should have "Learn operators"`, () => {
      const listItem = document.querySelector("#test-3");

      const listItemStyles = getComputedStyle(listItem);
      const { color } = listItemStyles;

      expect(color).toBe("blue");
    });

    it(`Should have "Learn regex bullet"`, () => {
      const listItem = document.querySelector("#test-4");

      const listItemStyles = getComputedStyle(listItem);
      const { color } = listItemStyles;

      expect(color).toBe("green");
    });

    it(`Should have "Advance" list items violet`, () => {
      const listItems = document.querySelectorAll(".test-5");

      const listItemsColors = Array.from(listItems).map((listItem) => {
        const listItemStyles = getComputedStyle(listItem);

        const { color } = listItemStyles;

        return color;
      });

      const isEveryListItemRed = listItemsColors.every(
        (color) => color === "violet"
      );

      expect(isEveryListItemRed).toBeTruthy();
    });

    it(`Should have "Proficiency" list items violet`, () => {
      const listItems = document.querySelectorAll(".test-6");

      const listItemsColors = Array.from(listItems).map((listItem) => {
        const listItemStyles = getComputedStyle(listItem);

        const { color } = listItemStyles;

        return color;
      });

      const isEveryListItemRed = listItemsColors.every(
        (color) => color === "cyan"
      );

      expect(isEveryListItemRed).toBeTruthy();
    });
  });

  describe("Exercise 4 - Use Of BEM", () => {
    const bemStyles = `
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: solid 1px #c5c5c5;
      background-color: white;
    }
    
    .footer__copyright {
      margin-left: 24px;
      font-weight: 600;
      font-size: 14px;
    }
    
    .footer__social-media {
      display: flex;
      flex-direction: row;
      gap: 32px;
      margin-right: 24px;
    }
    
    .social-media__social-item--platform {
      color: #777789;
    }
    `;

    beforeEach(() => {
      const head = document.querySelector("head");
      const testStyles = document.querySelector(".test-styles");
      const bemStylesElement = document.createElement("style");
      head.removeChild(testStyles);
      bemStylesElement.className = "bem-styles";
      bemStylesElement.innerHTML = bemStyles;

      head.appendChild(bemStylesElement);
    });

    describe("footer", () => {
      let footerStyles = null;

      beforeEach(() => {
        const footer = document.querySelector("footer");
        footerStyles = getComputedStyle(footer);
      });

      it("Should have position equals fixed", () => {
        const { position } = footerStyles;

        expect(position).toEqual("fixed");
      });

      it("Should be with bottom equals 0", () => {
        const { bottom } = footerStyles;

        expect(bottom).toEqual("0px");
      });

      it("Should have width equals 100%", () => {
        const { width } = footerStyles;

        expect(width).toEqual("100%");
      });

      it("Should have height equals 50px", () => {
        const { height } = footerStyles;

        expect(height).toEqual("50px");
      });

      it("Should have display equals flex", () => {
        const { display } = footerStyles;

        expect(display).toEqual("flex");
      });

      it("Should have justify content equals space between", () => {
        const { justifyContent } = footerStyles;

        expect(justifyContent).toEqual("space-between");
      });

      it("Should have align items equals flex", () => {
        const { alignItems } = footerStyles;

        expect(alignItems).toEqual("center");
      });

      it("Should have border top equals 1px solid #c5c5c5", () => {
        const { borderTop } = footerStyles;

        expect(borderTop).toEqual("1px solid #c5c5c5");
      });

      it("Should have background color equals white", () => {
        const { backgroundColor } = footerStyles;

        expect(backgroundColor).toEqual("white");
      });
    });

    describe("copyright", () => {
      let copyrightStyles = null;
      beforeEach(() => {
        const copyright = document.querySelector(".footer__copyright");
        copyrightStyles = getComputedStyle(copyright);
      });
      it("Should have margin left equals 24px", () => {
        const { marginLeft } = copyrightStyles;
        expect(marginLeft).toEqual("24px");
      });
      it("Should have font weight equals 600", () => {
        const { fontWeight } = copyrightStyles;
        expect(Number(fontWeight)).toEqual(600);
      });
      it("Should have font size equals 14px", () => {
        const { fontSize } = copyrightStyles;
        expect(fontSize).toEqual("14px");
      });
    });
    describe("social-media ", () => {
      let socialMediaStyles = null;
      beforeEach(() => {
        const socialMedia = document.querySelector(".footer__social-media");
        socialMediaStyles = getComputedStyle(socialMedia);
      });
      it("Should have display equals flex", () => {
        const { display } = socialMediaStyles;
        expect(display).toEqual("flex");
      });
      it("Should have flex direction equals row", () => {
        const { flexDirection } = socialMediaStyles;
        expect(flexDirection).toEqual("row");
      });
      it("Should have gap equals 32px", () => {
        const { gap } = socialMediaStyles;
        expect(gap).toEqual("32px");
      });
      it("Should have margin right equals 24px", () => {
        const { marginRight } = socialMediaStyles;
        expect(marginRight).toEqual("24px");
      });
    });
    describe("platform", () => {
      let platformStyles = null;
      beforeEach(() => {
        const platform = document.querySelector(
          ".social-media__social-item--platform"
        );
        platformStyles = getComputedStyle(platform);
      });
      it("Should have color equals rgb(119, 119, 137)", () => {
        const { color } = platformStyles;
        expect(color).toEqual("rgb(119, 119, 137)");
      });
    });
  });
});
