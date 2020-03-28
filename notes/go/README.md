# Go Programming

![](https://golang.org/lib/godoc/images/go-logo-blue.svg)

[Go](https://golang.org) is a general-purpose programming language with the following characteristics:

- familiar C-like syntax
- statically typed
- language-level support for concurrency
- garbage collected
- fast
- cross-platform (supports Windows, Mac, Linux and more, multiple CPU architectures)
- open-source

## Installation

[Download](https://golang.org/dl/) and [install](https://golang.org/doc/install)

__macOS__

```
$ brew install golang
$ go version
go version go1.14 darwin/amd64
```

## Basic

__Hello World__

`main.go`

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello World")
}
```

__Run__

```bash
$ go run main.go

Hello World
```

__Build__

```bash
$ mkdir hello && cd hello
$ go mod init github.com/username/hello
$ go mod tidy
## write main.go
$ go build
$ ./hello

Hello World
```

## Learning Go

- [A Tour of Go](https://go-tour-th.appspot.com/welcome/1) - ภาษาไทย
- [Effective Go](https://golang.org/doc/effective_go.html)
- [Essential Go](https://www.programming-books.io/essential/go)
- [Go go-to guide](https://yourbasic.org/golang/)
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/en/)
- [Practical Go: Real world advice for writing maintainable Go programs](https://dave.cheney.net/practical-go/presentations/qcon-china.html)

## Notes

### Articles

- [[Recap] Clear is better than clever #GopherConSG 2019](https://link.medium.com/5P5SsmEUYZ)
- [Referenceใน Go](https://link.medium.com/M3p2rgGUYZ)
- [Go — 11 เรื่องชวนว้าวุ่นกับ Pointer](https://link.medium.com/njYiQsIUYZ)
- [การใช้ Reflection ในภาษา Go เพื่อตรวจสอบ interface{}](https://link.medium.com/KzSUqkMUYZ)
- [แนวทางจัดการ Error handling ใน Go](https://link.medium.com/KHcvWwPUYZ)
- [เมื่อไหร่ควรรวม เมื่อไหร่ควรแยก .go ใน package ?](https://link.medium.com/igZdRiRUYZ)
- [เรื่องน่ารู้เกี่ยวกับ HTTP Client ใน Golang](https://link.medium.com/gWGu8KSUYZ)
- [แนวคิดของ CQRS บนโลก Microservice](https://link.medium.com/zb61rIUUYZ)
- [Unit Test HTTP Client ใน Go](https://link.medium.com/LSg572WUYZ)
- [การทำ Unit test สำหรับ HTTP Handler (net/http)ใน Golang](https://link.medium.com/sJSVA1XUYZ)
- [ป้องกัน Race Condition ใน Go ด้วย sync.Mutex](https://link.medium.com/W9SflWYUYZ)
- [Synchronization Pattern ใน Go ด้วย sync.WaitGroup](https://link.medium.com/ShZmDRZUYZ)
- [จัดการ Configuration ใน Go ด้วย Viper](https://link.medium.com/s8CU7y1UYZ)
- [CGO_ENABLE=0 และ Static Binary ใน Go](https://link.medium.com/KRcImK2UYZ)
- [8 พื้นฐาน Convention ใน GO ที่สำคัญ ตอนที่ 1](https://link.medium.com/UUZTJf4UYZ)
- [ใช้งาน Go Module แบบ Local module](https://link.medium.com/aBiQjlaVYZ)
- [GO — With good architecture content you don’t miss](https://link.medium.com/HY8be3bVYZ)
- [Simple Architecture for Test-able code in Golang](https://link.medium.com/EJfs6deVYZ)
- [GO module command notes](https://link.medium.com/HUxxGJiVYZ)
- [panic() vs os.Exit() ในภาษา Golang](https://link.medium.com/0b6MmjkVYZ)
- [GO cli for coverage report](https://link.medium.com/NGv4uYmVYZ)
- [ทบทวนเคล็ดวิชา Pointer ให้นูบ](https://link.medium.com/CNR0z0dWm0)
- [สรุปการเขียน Resume ให้น่าอ่านในสายงาน Software](https://link.medium.com/zUSICrOUYZ)

### golsp

gopls (pronounced: "go please") is an implementation of the Language Server Protocol (LSP) server for Go. The LSP allows any text editor to be extended with IDE-like features (see https://langserver.org/ for details).

__Installation__

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
