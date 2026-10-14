# Central management pilot

Temporary public repository used to prove that `Nisan-Sinai/github-workflows`
can centrally discover Node.js, Python, .NET and GitHub Actions dependencies,
open update pull requests, run shared CI for all three language stacks, and
merge only after every required check succeeds.

The intentionally outdated patch-level dependencies are test fixtures. The
central manager must update them by pull request; they must not be updated
directly on `main`.

This repository is temporary and will be deleted only after explicit approval.
