const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");

const setup = () => (document.documentElement.innerHTML = content);

describe("Exercise 1 - Document Structure", () => {
  setup();

  describe("document", () => {
    it("Should start with doctype html", () => {
      const doctype = content.split("\n").filter(Boolean)[0];

      expect(doctype).toBe("<!DOCTYPE html>");
    });

    describe("head", () => {
      const head = document.head;

      it("Should exist", () => {
        expect(head).toBeTruthy();
      });

      it("Should not be empty", () => {
        const headContent = head.innerHTML;

        expect(headContent).toBeTruthy();
      });

      it("Should have correct title", () => {
        const title = head.querySelector("title").textContent;

        expect(title).toBe("HTML Best Practices");
      });
    });

    describe("body", () => {
      const body = document.body;

      it("Should exist", () => {
        expect(body).toBeTruthy();
      });

      it("Should be after head", () => {
        const previousElement = document.body.previousElementSibling?.tagName;

        expect(previousElement).toBe("HEAD");
      });

      it("Should not be empty", () => {
        const bodyContent = body.innerHTML;

        expect(bodyContent).toBeTruthy();
      });

      describe("header", () => {
        const header = document.querySelector("header");

        it("Should exist", () => {
          expect(header).toBeTruthy();
        });

        it("Should be child of body", () => {
          const parent = header.parentElement;

          expect(parent).toBe(body);
        });

        it("Should be first a child of body", () => {
          const previousSibling = header.previousElementSibling;

          expect(previousSibling).toBeFalsy();
        });

        it("Should not be empty", () => {
          const headerContent = header.innerHTML;

          expect(headerContent).toBeTruthy();
        });

        describe("nav", () => {
          const nav = document.querySelector("nav");

          it("Should exist", () => {
            expect(nav).toBeTruthy();
          });

          it("Should be a child of header", () => {
            const parent = nav.parentElement;

            expect(parent).toBe(header);
          });

          it("Should be the first child of header", () => {
            const previousSibling = nav.previousElementSibling;

            expect(previousSibling).toBeFalsy();
          });

          it("Should not be empty", () => {
            const navContent = nav.innerHTML;

            expect(navContent).toBeTruthy();
          });

          it("Should have two child links with correct text content", () => {
            const children = nav.children;
            const homeLink = [...children].find(
              (c) => c.textContent === "Home"
            );
            const aboutLink = [...children].find(
              (c) => c.textContent === "About"
            );

            expect(children.length).toBe(2);
            expect(homeLink).toBeTruthy();
            expect(aboutLink).toBeTruthy();
          });
        });
      });

      describe("main", () => {
        it("Should exist", () => {
          const main = document.querySelector("main");

          expect(main).toBeTruthy();
        });

        it("Should be a child of body", () => {
          const main = document.querySelector("main");
          const parent = main.parentElement;
          const body = document.body;

          expect(parent).toBe(body);
        });

        it("Should be after header", () => {
          const main = document.querySelector("main");
          const previousSibling = main.previousElementSibling;
          const header = document.querySelector("header");

          expect(previousSibling).toBe(header);
        });

        it("Should not be empty", () => {
          const mainContent = document.querySelector("main").textContent;

          expect(mainContent).toBeTruthy();
        });

        it("Should have an h1 child with correct text content", () => {
          const main = document.querySelector("main");
          const h1 = main.querySelector("h1");

          expect(h1).toBeTruthy();
          expect(h1.textContent).toBe("HTML Best Practices");
        });
      });

      describe("footer", () => {
        const footer = document.querySelector("footer");

        it("Should exist", () => {
          expect(footer).toBeTruthy();
        });

        it("Should be a child of body", () => {
          const parent = footer.parentElement;

          expect(parent).toBe(body);
        });

        it("Should be after main", () => {
          const previousSibling =
            document.querySelector("footer").previousElementSibling;
          const main = document.querySelector("main");

          expect(previousSibling).toBe(main);
        });

        it("Should not be empty", () => {
          const footerContent = footer.innerHTML;

          expect(footerContent).toBeTruthy();
        });

        it("Should have p with correct text content", () => {
          const p = footer.querySelector("p");

          expect(p).toBeTruthy();
          expect(p.textContent).toBe("Author: John Doe");
        });

        it("Should have link with correct text content and href", () => {
          const a = footer.querySelector("a");

          expect(a).toBeTruthy();
          expect(a.textContent).toBe("Contact");
          expect(a.href).toBe("mailto:john.doe@email.com");
        });
      });
    });
  });
});

describe("Exercise 2 - SEO Meta Tags", () => {
  setup();

  describe("charset", () => {
    const tag = document.head.querySelector("meta[charset]");

    it("Should exist", () => {
      expect(tag).toBeTruthy();
    });

    it("Should have correct content", () => {
      const attributeValue = tag.getAttribute("charset");

      expect(attributeValue).toBe("UTF-8");
    });
  });

  describe("description", () => {
    const tag = document.head.querySelector('meta[name="description"]');

    it("Should exist", () => {
      expect(tag).toBeTruthy();
    });

    it("Should have correct content", () => {
      const attributeValue = tag.getAttribute("content");

      expect(attributeValue).toBe("Html best practices exercises");
    });
  });

  describe("keywords", () => {
    const tag = document.head.querySelector('meta[name="keywords"]');

    it("Should exist", () => {
      expect(tag).toBeTruthy();
    });

    it("Should have correct content", () => {
      const attributeValue = tag.getAttribute("content");

      expect(attributeValue).toBe("html, javascript, training");
    });
  });

  describe("author", () => {
    const tag = document.head.querySelector('meta[name="author"]');

    it("Should exist", () => {
      expect(tag).toBeTruthy();
    });

    it("Should have correct content", () => {
      const attributeValue = tag.getAttribute("content");

      expect(attributeValue).toBe("John Doe");
    });
  });

  describe("viewport", () => {
    const tag = document.head.querySelector('meta[name="viewport"]');

    it("Should exist", () => {
      expect(tag).toBeTruthy();
    });

    it("Should have correct content", () => {
      const attributeValue = tag.getAttribute("content");

      expect(attributeValue).toBe("width=device-width, initial-scale=1.0");
    });
  });

  describe("robots", () => {
    const tag = document.head.querySelector('meta[name="robots"]');

    it("Should exist", () => {
      expect(tag).toBeTruthy();
    });

    it("Should have correct content", () => {
      const attributeValue = tag.getAttribute("content");

      expect(attributeValue).toBe("noindex,nofollow");
    });
  });
});

describe("Exercise 3 - Stylesheet And Script Loading", () => {
  setup();

  describe("stylesheet", () => {
    const tag = document.querySelector('link[rel="stylesheet"');

    it("Should exist", () => {
      expect(tag).toBeTruthy();
    });

    it("Should have a correct href", () => {
      const attributeValue = tag.getAttribute("href");

      expect(attributeValue).toBe("_resources/styles.css");
    });
  });

  describe("script for module01", () => {
    const tag = document.querySelector('script[src="_resources/module01.js"]');

    it("Should exist", () => {
      expect(tag).toBeTruthy();
    });

    it("Should have correct attributes", () => {
      const asyncValue = tag.getAttribute("async");
      const deferValue = tag.getAttribute("defer");

      expect(asyncValue).not.toBe();
      expect(deferValue).toBe(null);
    });
  });

  describe("script for module02", () => {
    const tag = document.querySelector('script[src="_resources/module02.js"]');

    it("Should exist", () => {
      expect(tag).toBeTruthy();
    });

    it("Should have correct attributes", () => {
      const asyncValue = tag.getAttribute("async");
      const deferValue = tag.getAttribute("defer");

      expect(asyncValue).toBe(null);
      expect(deferValue).toBe(null);
    });
  });

  describe("script for module03", () => {
    const tag = document.querySelector('script[src="_resources/module03.js"]');

    it("Should exist", () => {
      expect(tag).toBeTruthy();
    });

    it("Should have correct attributes", () => {
      const asyncValue = tag.getAttribute("async");
      const deferValue = tag.getAttribute("defer");

      expect(asyncValue).toBe(null);
      expect(deferValue).not.toBe(null);
    });
  });
});

describe("Exercise 4 - Forms", () => {
  describe("form", () => {
    const form = document.querySelector("form");
    const allLabels = [...(form?.querySelectorAll("label") || [])];
    const allInputs = [...(form?.querySelectorAll("input") || [])];
    const allTextarea = [...(form?.querySelectorAll("textarea") || [])];

    it("Should exist", () => {
      expect(form).toBeTruthy();
    });

    it("Should be child of main", () => {
      const parent = form.parentElement;
      const main = document.querySelector("main");

      expect(parent).toBe(main);
    });

    it("Should have 9 inputs total", () => {
      const inputsLength = allInputs.length;

      expect(inputsLength).toBe(9);
    });

    it("Should have 9 labels total", () => {
      const labelsLength = allLabels.length;

      expect(labelsLength).toBe(9);
    });

    it("Should have 1 textarea total", () => {
      const textareaLength = allTextarea.length;

      expect(textareaLength).toBe(1);
    });

    describe("email", () => {
      const label = allLabels[0];
      const input = allInputs[0];

      it("Should have all necessary attributes for accessibility", () => {
        const forAttribute = label.getAttribute("for");
        const idAttribute = input.getAttribute("id");
        const nameAttribute = input.getAttribute("name");

        expect(forAttribute).toBeTruthy();
        expect(idAttribute).toBeTruthy();
        expect(nameAttribute).toBeTruthy();
        expect(forAttribute).toBe(idAttribute);
      });

      it("Should have a correct validation", () => {
        const typeAttribute = input.getAttribute("type");
        const requiredAttribute = input.getAttribute("required");

        expect(typeAttribute).toBe("email");
        expect(requiredAttribute).not.toBe(null);
      });
    });

    describe("name", () => {
      const label = allLabels[1];
      const input = allInputs[1];

      it("Should have all necessary attributes for accessibility", () => {
        const forAttribute = label.getAttribute("for");
        const idAttribute = input.getAttribute("id");
        const nameAttribute = input.getAttribute("name");

        expect(forAttribute).toBeTruthy();
        expect(idAttribute).toBeTruthy();
        expect(nameAttribute).toBeTruthy();
        expect(forAttribute).toBe(idAttribute);
      });

      it("Should have a correct validation", () => {
        const typeAttribute = input.getAttribute("type");
        const minlengthAttribute = input.getAttribute("minlength");
        const maxlengthAttribute = input.getAttribute("maxlength");
        const requiredAttribute = input.getAttribute("required");

        expect(typeAttribute).toBe("text");
        expect(minlengthAttribute).toBe("3");
        expect(maxlengthAttribute).toBe("20");
        expect(requiredAttribute).not.toBe(null);
      });
    });

    describe("position", () => {
      const label = allLabels[2];
      const input = allInputs[2];

      it("Should have all necessary attributes for accessibility", () => {
        const forAttribute = label.getAttribute("for");
        const idAttribute = input.getAttribute("id");
        const nameAttribute = input.getAttribute("name");

        expect(forAttribute).toBeTruthy();
        expect(idAttribute).toBeTruthy();
        expect(nameAttribute).toBeTruthy();
        expect(forAttribute).toBe(idAttribute);
      });

      it("Should have a correct validation", () => {
        const typeAttribute = input.getAttribute("type");
        const valueAttribute = input.getAttribute("value");
        const readonlyAttribute = input.getAttribute("readonly");

        expect(typeAttribute).toBe("text");
        expect(valueAttribute).toBe("Student");
        expect(readonlyAttribute).not.toBe(null);
      });
    });

    describe("password", () => {
      const label = allLabels[3];
      const input = allInputs[3];

      it("Should have all necessary attributes for accessibility", () => {
        const forAttribute = label.getAttribute("for");
        const idAttribute = input.getAttribute("id");
        const nameAttribute = input.getAttribute("name");

        expect(forAttribute).toBeTruthy();
        expect(idAttribute).toBeTruthy();
        expect(nameAttribute).toBeTruthy();
        expect(forAttribute).toBe(idAttribute);
      });

      it("Should have a correct validation", () => {
        const typeAttribute = input.getAttribute("type");
        const minlengthAttribute = input.getAttribute("minlength");
        const maxlengthAttribute = input.getAttribute("maxlength");
        const requiredAttribute = input.getAttribute("required");

        expect(typeAttribute).toBe("password");
        expect(minlengthAttribute).toBe("8");
        expect(maxlengthAttribute).toBe("20");
        expect(requiredAttribute).not.toBe(null);
      });
    });

    describe("age", () => {
      const label = allLabels[4];
      const input = allInputs[4];

      it("Should have all necessary attributes for accessibility", () => {
        const forAttribute = label.getAttribute("for");
        const idAttribute = input.getAttribute("id");
        const nameAttribute = input.getAttribute("name");

        expect(forAttribute).toBeTruthy();
        expect(idAttribute).toBeTruthy();
        expect(nameAttribute).toBeTruthy();
        expect(forAttribute).toBe(idAttribute);
      });

      it("Should have a correct validation", () => {
        const typeAttribute = input.getAttribute("type");
        const minAttribute = input.getAttribute("min");
        const requiredAttribute = input.getAttribute("required");

        expect(typeAttribute).toBe("number");
        expect(minAttribute).toBe("0");
        expect(requiredAttribute).not.toBe(null);
      });
    });

    describe("description", () => {
      const label = allLabels[5];
      const textarea = allTextarea[0];

      it("Should have all necessary attributes for accessibility", () => {
        const forAttribute = label.getAttribute("for");
        const idAttribute = textarea.getAttribute("id");
        const nameAttribute = textarea.getAttribute("name");

        expect(forAttribute).toBeTruthy();
        expect(idAttribute).toBeTruthy();
        expect(nameAttribute).toBeTruthy();
        expect(forAttribute).toBe(idAttribute);
      });

      it("Should have a correct validation", () => {
        const maxlengthAttribute = textarea.getAttribute("maxlength");

        expect(maxlengthAttribute).toBe("100");
      });
    });

    describe("favorite language", () => {
      const htmlLabel = allLabels[6];
      const cssLabel = allLabels[7];
      const jsLabel = allLabels[8];

      const htmlInput = allInputs[5];
      const cssInput = allInputs[6];
      const jsInput = allInputs[7];

      it("Should have all necessary attributes for accessibility", () => {
        const htmlFor = htmlLabel.getAttribute("for");
        const htmlId = htmlInput.getAttribute("id");
        const htmlName = htmlInput.getAttribute("name");

        const cssFor = cssLabel.getAttribute("for");
        const cssId = cssInput.getAttribute("id");
        const cssName = cssInput.getAttribute("name");

        const jsFor = jsLabel.getAttribute("for");
        const jsId = jsInput.getAttribute("id");
        const jsName = jsInput.getAttribute("name");

        const allNamesEquality = htmlName === cssName && htmlName === jsName;

        expect(htmlFor).toBeTruthy();
        expect(htmlId).toBeTruthy();
        expect(htmlFor).toBe(htmlId);

        expect(cssFor).toBeTruthy();
        expect(cssId).toBeTruthy();
        expect(cssFor).toBe(cssId);

        expect(jsFor).toBeTruthy();
        expect(jsId).toBeTruthy();
        expect(jsFor).toBe(jsId);

        expect(allNamesEquality).toBe(true);
      });

      it("Should have a correct validation", () => {
        const htmlType = htmlInput.getAttribute("type");
        const htmlValue = htmlInput.getAttribute("value");

        const cssType = cssInput.getAttribute("type");
        const cssValue = cssInput.getAttribute("value");

        const jsType = jsInput.getAttribute("type");
        const jsValue = jsInput.getAttribute("value");
        const jsChecked = jsInput.getAttribute("checked");

        expect(htmlType).toBe("radio");
        expect(htmlValue).toBe("HTML");

        expect(cssType).toBe("radio");
        expect(cssValue).toBe("CSS");

        expect(jsType).toBe("radio");
        expect(jsValue).toBe("JavaScript");
        expect(jsChecked).not.toBe(null);
      });
    });

    describe("submit", () => {
      const input = allInputs[8];

      it("Should have correct attributes", () => {
        const typeAttribute = input.getAttribute("type");
        const valueAttribute = input.getAttribute("value");

        expect(typeAttribute).toBe("submit");
        expect(valueAttribute).toBe("Submit");
      });
    });
  });
});
