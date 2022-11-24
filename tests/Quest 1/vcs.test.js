const exec = require("child_process").execSync;

test("Branch_Name", () => {
  const branchName = exec("git branch --show-current").toString("utf-8").trim();

  expect(branchName).toEqual("feature/my-first-branch");
});

test("Commit_Message", () => {
  const commitMessage = exec(
    "git log --max-count=1 --oneline --pretty=format:%s"
  ).toString("utf-8");

  expect(commitMessage).toEqual("feat: my first commit message");
});
