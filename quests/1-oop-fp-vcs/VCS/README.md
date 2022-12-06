# Quest 1 - Version Control Systems

## Introduction

Version or **source control** is the best practice of **tracking and managing changes** **to software code** but lately goes even beyond just that, e.g. version control of assets, content, and even using it as a fully-fledged CMS.

No one can control the chaos of software development without the help of the powerful version control systems and our school of choice is [Git](https://git-scm.com/).

[Link to Notion](https://www.notion.so/mkit/Version-Control-Systems-VCS-36274ba4f59649a4b0bcbaa6f20aa57b)

## Assessment #1 - Branches And Commits

In this assessment you are provided with the function `git()`. Your tasks are to:

- Create a new branch

- Change the `git()` function is such way that it returns the string `"Git is a DevOps tool used for source code management."`

- Commit the changed file

- Follow the best practices for naming branches and commit messages

## Assessment #2 - Rebasing And Resolving Conflicts

After you have completed `Assessment 1`, your next tasks are to:

- Rebase your branch with `feature/john-doe-solution`

- Resolve the conflict is such way that you keep your changes but also John Doe's changes.

## Assessment #3 - Cherry Picking

After you have completed `Assessment 2`, your next tasks are to:

- Cherry-pick the `feat: git flow` commit from `feature/cherry-pick`

- Cherry-pick the `feat: github flow` commit from `feature/cherry-pick`

- `Hint:` use `git log --oneline feature/aaa` to see the commits' `SHA`

**After you have completed all assessments, your final task is to push the branch to remote.**

If you have completed all steps and all unit tests pass you can expect a success message in the terminal after you push to remote. Otherwise you will see an error message. If you feel stuck, checkout a new branch and start over.
