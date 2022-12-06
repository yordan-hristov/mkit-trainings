const exec = require("child_process").execSync;

const { vcs, flows } = require("./index");

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
    "git reflog --oneline --pretty=format:%gs --max-count=50"
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
      expect(
        gitHistory.some((x) => x.includes("rebase (continue):"))
      ).toBeTruthy();
    });
  });

  describe("vcs.git", () => {
    it("Is defined", () => {
      expect(vcs.git).toBeDefined();
    });

    it("Returns correct value", () => {
      const expectedGitResult =
        "Git is a DevOps tool used for source code management.";

      expect(vcs.git).toEqual(expectedGitResult);
    });
  });

  describe("vcs.github", () => {
    it("Is defined", () => {
      expect(vcs.github).toBeDefined();
    });

    it("Returns correct value", () => {
      const expectedGithubResult =
        "GitHub is a code hosting platform for version control and collaboration.";

      expect(vcs.github).toEqual(expectedGithubResult);
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

  describe("flows.gitFlow", () => {
    it("Is defined", () => {
      expect(flows.gitFlow).toBeDefined();
    });

    it("Returns correct value", () => {
      const expected =
        "Gitflow is an Git branching model that involves the use of feature branches and multiple primary branches.";

      expect(flows.gitFlow).toEqual(expected);
    });
  });

  describe("flows.githubFlow", () => {
    it("Is defined", () => {
      expect(flows.githubFlow).toBeDefined();
    });

    it("Returns correct value", () => {
      const expected =
        "Github Flow focuses on branching and makes it possible for teams to experiment freely, and make deployments regularly.";

      expect(flows.githubFlow).toEqual(expected);
    });
  });
});
