# isomorphic-git-1908

Repro for isomorphic-git issue #1908:
https://github.com/isomorphic-git/isomorphic-git/issues/1908

To show the issue:

1. Clone this repo
2. Modify one of the text files (e.g. README.md)
3. Run: `npm run example`

After doing the above, running `git status` will show that the text file is
staged for commit (expected), along with the image file also (unexpected).

