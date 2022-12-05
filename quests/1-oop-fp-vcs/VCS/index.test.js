const exec = require("child_process").execSync;

const { git, github } = require("./index");

describe("VCS", () => {
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

  describe("Successful rebase", () => {
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
});
