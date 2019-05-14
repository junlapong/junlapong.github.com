# Go

## golsp

gopls (pronounced: "go please") is an implementation of the Language Server Protocol (LSP) server for Go. The LSP allows any text editor to be extended with IDE-like features (see https://langserver.org/ for details).

### Installation

First, install `gopls` by running
```go get -u golang.org/x/tools/cmd/gopls```

We suggest using VSCode with the Go plugin.

Turning off both build and vet on save is useful to avoid duplicating diagnostics from both gopls and VSCode-Go. gopls also replicates the functionality of both gofmt and goimports.

Editors instructions
VSCode, through the VSCode-Go plugin, with the following configuration:

```
"go.useLanguageServer": true,
"go.languageServerExperimentalFeatures": {
        "diagnostics": true // for diagnostics as you type
},
"[go]": {
    "editor.snippetSuggestions": "none",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.organizeImports": true
    },
},
"gopls": {
    "usePlaceholders": true, // add parameter placeholders when completing a function
    "enhancedHover": true,   // experimental to improve quality of hover (will be on by default soon)
}
```

VSCode will complain about the "gopls" settings, but they will still work.
