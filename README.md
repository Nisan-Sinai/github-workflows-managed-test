# Central management pilot

Temporary public repository used to prove that `Nisan-Sinai/github-workflows`
can centrally discover and safely update dependencies across a practical
polyglot matrix. The pilot covers npm, pnpm, Yarn, Bun, pip/PEP 621, NuGet,
Maven, Gradle, Go modules, Cargo, Composer, Bundler, Terraform, Docker,
Docker Compose, Helm, Kubernetes manifests and GitHub Actions.

The original Node.js, Python and .NET jobs consume reusable workflows from the
central hub. The extended matrix performs native build or validation checks for
Java, Go, Rust, PHP, Ruby and infrastructure-as-code fixtures. This is broad
representative coverage, not a claim that every one of Renovate's many niche
managers can be exercised in a single repository.

The intentionally outdated patch-level dependencies are test fixtures. The
central manager must update them by pull request; they must not be updated
directly on `main`.

This repository is temporary and will be deleted only after explicit approval.
