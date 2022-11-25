`Git exercises are done using the terminal!`

1. Create a new branch.
2. Commit any file changes. 
3. Push the branch to remote.

**Note: make sure to follow the best practices.**

The expected output in the terminal if all unit tests pass is a success message followed by and error from git. The error from git is caused by the pre-push hook, which runs the unit tests and exits with code 1, preventing the branch from actually being pushed to remote.

-- 

The Branch_Name unit test checks the name of the current branch.
The Commit_Message unit test checks the commit message of the last commit.
Unit test only check for pattern (beginning with feat, fix etc.) not for exact match.
Unit test do `not` run if the current branch is `main`
In order to see the unit tests output and the success message, the branch needs to be pushed to remote from the terminal. If it is pushed from VS Code U you will receive an error window.
