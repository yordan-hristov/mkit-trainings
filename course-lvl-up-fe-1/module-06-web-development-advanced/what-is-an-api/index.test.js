const {
  getCurrency,
  socialMedia,
  createPost,
  getPost,
  updatePost,
  deletePost,
  getPostById,
} = require("./index");

describe("Exercise 1 - Fetch Currency With Soap", () => {
  it("Should be defined", () => {
    expect(getCurrency).toBeDefined();
  });

  it("Should return a Promise", async () => {
    const response = getCurrency("US");

    expect(response).toBeInstanceOf(Promise);
  });

  it("Should return correct result", async () => {
    const expectedResponseUS = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><m:CountryCurrencyResponse xmlns:m="http://www.oorsprong.org/websamples.countryinfo"><m:CountryCurrencyResult><m:sISOCode>USD</m:sISOCode><m:sName>Dollars</m:sName></m:CountryCurrencyResult></m:CountryCurrencyResponse></soap:Body></soap:Envelope>`;

    const expectedResponseBG = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><m:CountryCurrencyResponse xmlns:m="http://www.oorsprong.org/websamples.countryinfo"><m:CountryCurrencyResult><m:sISOCode>BGN</m:sISOCode><m:sName>Leva</m:sName></m:CountryCurrencyResult></m:CountryCurrencyResponse></soap:Body></soap:Envelope>`;

    const expectedResponseGB = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><m:CountryCurrencyResponse xmlns:m="http://www.oorsprong.org/websamples.countryinfo"><m:CountryCurrencyResult><m:sISOCode>GBP</m:sISOCode><m:sName>Great Brittain Pounds</m:sName></m:CountryCurrencyResult></m:CountryCurrencyResponse></soap:Body></soap:Envelope>`;

    const removeWhiteSpaces = (str) =>
      str
        .replaceAll(/>(\n|\t|\s)*</gm, "><")
        .replaceAll(/\n|\t/gm, " ")
        .replaceAll(/\s+/gm, " ");

    const responseUS = await getCurrency("US");
    const responseBG = await getCurrency("BG");
    const responseGB = await getCurrency("GB");

    const trimmedResponseUS = removeWhiteSpaces(responseUS);
    const trimmedResponseBG = removeWhiteSpaces(responseBG);
    const trimmedResponseGB = removeWhiteSpaces(responseGB);

    expect(trimmedResponseUS).toEqual(expectedResponseUS);
    expect(trimmedResponseBG).toEqual(expectedResponseBG);
    expect(trimmedResponseGB).toEqual(expectedResponseGB);
  });
});

describe("Exercise 2 - Social Media", () => {
  it("Should be defined", () => {
    expect(socialMedia).toBeDefined();
  });

  it("Return a Promise", async () => {
    const response = socialMedia();

    expect(response).toBeInstanceOf(Promise);
  });

  it("Should return 100 posts", async () => {
    const posts = await socialMedia();

    const numberOfPosts = posts.length;

    expect(numberOfPosts).toEqual(100);
  });

  it("Should return 1 post if id is provided", async () => {
    global.fetch = jest.fn(() => {
      Promise.resolve({
        json: () =>
          Promise.resolve({
            userId: 1,
            id: 1,
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          }),
      });
    });

    const post = await socialMedia(1);

    const expectedResult = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };

    expect(post).toEqual(expectedResult);
  });

  it("Should return all comments for post 1", async () => {
    global.fetch = jest.fn(() => {
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              postId: 1,
              id: 1,
              name: "id labore ex et quam laborum",
              email: "Eliseo@gardner.biz",
              body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            },
            {
              postId: 1,
              id: 2,
              name: "quo vero reiciendis velit similique earum",
              email: "Jayne_Kuhic@sydney.com",
              body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
            },
            {
              postId: 1,
              id: 3,
              name: "odio adipisci rerum aut animi",
              email: "Nikita@garfield.biz",
              body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
            },
            {
              postId: 1,
              id: 4,
              name: "alias odio sit",
              email: "Lew@alysha.tv",
              body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
            },
            {
              postId: 1,
              id: 5,
              name: "vero eaque aliquid doloribus et culpa",
              email: "Hayden@althea.biz",
              body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
            },
          ]),
      });
    });

    const comments = await socialMedia(1, true);

    const expectedReturnedCommentsLength = 5;

    const commentsLength = comments.length;

    expect(commentsLength).toEqual(expectedReturnedCommentsLength);
  });
});

describe("Exercise 3 - CRUD Operations", () => {
  describe("createPost()", () => {
    it("Should be defined", () => {
      expect(createPost).toBeDefined();
    });

    it("Should return a Promise", () => {
      const response = createPost();

      expect(response).toBeInstanceOf(Promise);
    });

    it("Should create post about Harry Potter", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              id: 101,
              title: "Harry Potter and the Sorcerer's Stone",
              body: "Harry Potter and the Philosopher's Stone is a 1997 fantasy novel written by British author J. K. Rowling.",
              userId: 1,
            }),
        })
      );

      const newPost = await createPost();

      expect(newPost).toEqual({
        id: 101,
        title: "Harry Potter and the Sorcerer's Stone",
        body: "Harry Potter and the Philosopher's Stone is a 1997 fantasy novel written by British author J. K. Rowling.",
        userId: 1,
      });
    });
  });

  describe("getPost()", () => {
    it("Should be defined", () => {
      expect(getPost).toBeDefined();
    });

    it("Should accept id as a number", async () => {
      await expect(getPost("test")).rejects.toThrow();

      await expect(getPost(true)).rejects.toThrow();

      await expect(getPost([])).rejects.toThrow();

      await expect(getPost({ prop: "test" })).rejects.toThrow();

      await expect(getPost(123)).resolves.not.toThrow();
    });

    it("Should return a Promise", () => {
      const response = getPost(101);

      expect(response).toBeInstanceOf(Promise);
    });

    it("Should get post depending on id", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              userId: 1,
              id: 1,
              title:
                "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
              body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            }),
        })
      );

      const post = await getPost(1);

      const expectedResult = {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      };

      expect(post).toEqual(expectedResult);
    });
  });

  describe("updatePost()", () => {
    global.fetch = jest.fn(() => {
      Promise.resolve({
        json: () =>
          Promise.resolve({
            title: "Harry Potter and the Philosopher's Stone",
            id: 1,
          }),
      });
    });

    it("Should be defined", () => {
      expect(updatePost).toBeDefined();
    });

    it("Should accept id as a number", async () => {
      await expect(updatePost("test")).rejects.toThrow();

      await expect(updatePost(true)).rejects.toThrow();

      await expect(updatePost([])).rejects.toThrow();

      await expect(updatePost({ prop: "test" })).rejects.toThrow();

      await expect(updatePost(1)).resolves.not.toThrow();
    });

    it("Should return a Promise", () => {
      const response = updatePost(1);

      expect(response).toBeInstanceOf(Promise);
    });

    it("Should update post about Harry Potter", async () => {
      const updatedPost = await updatePost(1);

      expect(updatedPost).toEqual({
        title: "Harry Potter and the Philosopher's Stone",
        id: 1,
      });
    });
  });

  describe("deletePost()", () => {
    it("Should be defined", () => {
      expect(deletePost).toBeDefined();
    });

    it("Should accept id as a number", async () => {
      await expect(deletePost("test")).rejects.toThrow();

      await expect(deletePost(true)).rejects.toThrow();

      await expect(deletePost([])).rejects.toThrow();

      await expect(deletePost({ prop: "test" })).rejects.toThrow();

      await expect(deletePost(123)).resolves.not.toThrow();
    });

    it("Should return a Promise", () => {
      const response = deletePost(1);

      expect(response).toBeInstanceOf(Promise);
    });

    it("Should delete a post", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({}),
        })
      );

      const deletedPost = await deletePost(2);

      expect(deletedPost).toEqual({});
    });
  });
});

describe("Exercise 4 - Status Codes", () => {
  describe("getPostById", () => {
    beforeEach(() => {});

    it("Should be defined", () => {
      expect(getPostById).toBeDefined();
    });

    it("Should return a Promise", () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        })
      );

      const result = getPostById(1);

      expect(result).toBeInstanceOf(Promise);
    });

    it("Should throw error on wrong id type", async () => {
      const rejectError = { message: "Id must be a number!", statusCode: 400 };

      try {
        await expect(getPostById("test")).rejects.toThrow();
      } catch (error) {
        expect(error.message).toEqual(rejectError.message);
        expect(error.statusCode).toEqual(rejectError.statusCode);
      }

      try {
        await expect(getPostById(true)).rejects.toThrow();
      } catch (error) {
        expect(error.message).toEqual(rejectError.message);
        expect(error.statusCode).toEqual(rejectError.statusCode);
      }

      try {
        await expect(getPostById([])).rejects.toThrow();
      } catch (error) {
        expect(error.message).toEqual(rejectError.message);
        expect(error.statusCode).toEqual(rejectError.statusCode);
      }

      try {
        await expect(getPostById({ prop: "test" })).rejects.toThrow();
      } catch (error) {
        expect(error.message).toEqual(rejectError.message);
        expect(error.statusCode).toEqual(rejectError.statusCode);
      }

      await expect(getPostById(1)).resolves.not.toThrow();
    });

    it("Should throw success", async () => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        })
      );

      const result = await getPostById(1);

      const { message, statusCode } = result;

      expect(message).toBe("Success!");
      expect(statusCode).toBe(200);
    });

    it("Should throw a not found error", async () => {
      global.fetch = jest.fn(() =>
        Promise.reject({
          message: "No post found with this id!",
          statusCode: 404,
        })
      );

      try {
        await expect(getPostById(999)).rejects.toThrow();
      } catch (error) {
        expect(error.message).toEqual("No post found with this id!");
        expect(error.statusCode).toEqual(404);
      }
    });
  });
});
