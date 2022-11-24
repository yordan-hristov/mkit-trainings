const exec = require("child_process").execSync;

test("Branch_Name", () => {
  const branchName = exec("git branch --show-current").toString("utf-8").trim();

  const regex = /^feature|fix|chore|style|refactor?(?=\/)/;

  expect(branchName).toMatch(regex);
});

test("Commit_Message", () => {
  const commitMessage = exec(
    "git log --max-count=1 --oneline --pretty=format:%s"
  ).toString("utf-8");

  const regex = /^feat|fix|style|refactor|chore?(?=:)/;

  expect(commitMessage).toMatch(regex);
});
