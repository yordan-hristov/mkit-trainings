const exec = require("child_process").execSync;

const { git, github, gitFlow, githubFlow } = require("./index");

describe("Assessment 1", () => {
  describe("Branch name", () => {
    const currentBranchName = exec("git branch --show-current")
      .toString("utf-8")
      .trim();

    it("Should not be main", () => {
      expect(currentBranchName).not.toEqual("main");
    });

    it("Follows the best practices", () => {
      const regex = /^feature|fix|chore|style|refactor?(?=\/)/;

      expect(currentBranchName).toMatch(regex);
    });
  });

  describe("Commit message", () => {
    const commitMessage = exec(
      "git log --max-count=1 --oneline --pretty=format:%s"
    ).toString("utf-8");

    it("Follows the best practices", () => {
      const regex = /^feat|fix|style|refactor|chore?(?=:)/;

      expect(commitMessage).toMatch(regex);
    });
  });
});

describe("Assessment 2", () => {
  const gitHistory = exec(
    "git reflog --oneline --pretty=format:%gs --max-count=20"
  )
    .toString("utf-8")
    .split("\n");

  describe("rebase", () => {
    it("Is executed", () => {
      expect(gitHistory).toContain(
        "rebase (start): checkout feature/john-doe-solution"
      );
    });

    it("Conflicts are resolved", () => {
      expect(gitHistory).toContain("rebase (continue): feat: solution");
    });

    it("Is finished", () => {
      expect(gitHistory).toContain(
        "rebase (continue) (finish): returning to refs/heads/feature/solution"
      );
    });
  });

  describe("git", () => {
    it("Is defined", () => {
      expect(git).toBeDefined();
    });

    it("Returns correct value", () => {
      const expectedGitResult =
        "Git is a DevOps tool used for source code management.";

      expect(git()).toEqual(expectedGitResult);
    });
  });

  describe("github", () => {
    it("Is defined", () => {
      expect(github).toBeDefined();
    });

    it("Returns correct value", () => {
      const expectedGithubResult =
        "GitHub is a code hosting platform for version control and collaboration.";

      expect(github()).toEqual(expectedGithubResult);
    });
  });
});

describe("Assessment 3", () => {
  const gitHistory = exec(
    "git reflog --oneline --pretty=format:%gs --max-count=20"
  )
    .toString("utf-8")
    .split("\n");

  describe("cherry-pick", () => {
    it("Cherry picked git flow", () => {
      expect(gitHistory).toContain("cherry-pick: feat: git flow");
    });

    it("Cherry picked github flow", () => {
      expect(gitHistory).toContain("cherry-pick: feat: github flow");
    });
  });

  describe("gitFlow", () => {
    it("Is defined", () => {
      expect(gitFlow).toBeDefined();
    });

    it("Returns correct value", () => {
      const expected = "";

      expect(gitFlow()).toEqual(expected);
    });
  });

  describe("githubFlow", () => {
    it("Is defined", () => {
      expect(githubFlow).toBeDefined();
    });

    it("Returns correct value", () => {
      const expected = "";

      expect(githubFlow()).toEqual(expected);
    });
  });
});
