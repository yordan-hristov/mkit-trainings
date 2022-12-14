# Module 1 - Version Control Systems

## Introduction

Version or **source control** is the best practice of **tracking and managing changes** **to software code** but lately goes even beyond just that, e.g. version control of assets, content, and even using it as a fully-fledged CMS.

No one can control the chaos of software development without the help of the powerful version control systems and our school of choice is [Git](https://git-scm.com/).

[Learning Materials About This Topic](https://www.notion.so/mkit/Version-Control-Systems-VCS-36274ba4f59649a4b0bcbaa6f20aa57b)

## Exercise #1 - Branches And Commits

In this Exercise you are provided with the `vcs` object literal.

Your objectives are to:

- Create a new branch
- Add new property called `git` that has a value `"Git is an awesome tool used for version control management."`
- Commit the changed file

_Pro Tip: Follow the [best practices](https://www.conventionalcommits.org/en/v1.0.0/) for naming branches and commit messages._

## Exercise #2 - Rebasing And Resolving Conflicts

After you have completed Exercise 1, your next objectives are to:

- Rebase your branch with `feature/john-doe-solution`

- Resolve the conflict in such way that you keep your changes but also John Doe's changes.

## Exercise #3 - Cherry Picking

After you have completed Exercise 2, your next objectives are to:

- Cherry-pick the `feat: git flow` commit from `feature/cherry-pick`

- Cherry-pick the `feat: github flow` commit from `feature/cherry-pick`

_Pro Tip: use `git log --oneline feature/cherry-pick` to see the commits' `SHA`._

**After you have completed all Exercises, your final task is to push the branch to remote.**

If you have completed all steps and all unit tests pass you can expect a success message in the terminal after you push to remote. Otherwise you will see an error message. If you feel stuck, checkout a new branch and start over.
