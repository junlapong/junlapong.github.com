# Visual Studio Code

__Installation__

```
$ brew cask install visual-studio-code
```

__Usage__

```
$ mkdir project
$ code ./project
```

## Shortcut Key

| Description | Shortcut Key |
|:--|:--|
| column select | SHIFT + ALT, then click and drag |
| preview markdown | CMD + ALT + V |
| search, replace | CMD + ALT + F |
| show/hide terminal | CTL + ` |
| show emoji & symbols | CTL + CMD + Space |
| trailing whitespace | CTL + X |
| transform text to lowercase | CTL + L |
| transform text to uppercase | CTL + U |
| เลือกข้อความที่เหมือนกัน | คลุมดำข้อความ, CMD + D |
| เลือกข้อความที่เหมือนกันทั้งหมด | คลุมดำข้อความ, CTL + SHIFT + L |
| ย้ายบรรทัด ขึ้น-ลง | ALT + ⬆︎, ALT + ⬇︎ |

---

File -> Preferences -> Keyboard Shortcuts. or CMD + K, CMD + S

An editor will appear with `keybindings.json` file. Place the following JSON in there and save.

```
[
 {
    "key": "ctrl+x",
    "command": "editor.action.trimTrailingWhitespace",
    "when": "editorTextFocus && !editorReadonly"
 },
 {
    "key": "ctrl+u",
    "command": "editor.action.transformToUppercase",
    "when": "editorTextFocus"
 },
 {
    "key": "ctrl+l",
    "command": "editor.action.transformToLowercase",
    "when": "editorTextFocus"
 },
 {
    "key": "ctrl+shift+l",
    "command": "editor.action.selectHighlights",
    "when": "editorFocus"
 }
]
```

__Terminal__

| Description | Shortcut Key |
|:--|:--:|
| clear screen | CTL + L |
| exit terminal | CTL + D |

## Extensions

### [REST Client](https://github.com/Huachao/vscode-restclient)

```
wget https://junlapong.github.io/notes/rest-client.http
```

example `rest-client.http`

```
@host = https://httpbin.org

###
GET {{host}}/get?x=123 HTTP/1.1
Accept: application/json

###
POST {{host}}/post HTTP/1.1
Content-Type: application/xml
Accept: application/json

<request>
    <name>sample</name>
    <time>Wed, 21 Oct 2015 18:27:50 GMT</time>
</request>

###
POST {{host}}/post HTTP/1.1
Content-Type: application/x-www-form-urlencoded

name=foo
&password=bar
```

## Notes

- Java - [Visual Studio Code Java: Disable serialVersionUID warning](https://stackoverflow.com/questions/49667888/visual-studio-code-java-disable-serialversionuid-warning)

Currently Java Support for VSCode reads a file called

`.settings/org.eclipse.jdt.core.prefs`

In this file, we can suppress the serialVersionUID warning by adding the following line: 

`org.eclipse.jdt.core.compiler.problem.missingSerialVersion=ignore`

Now just restart VS Code, and those warnings will no longer show up.


- Go - [How to Debug Golang with VSCode](https://74th.github.io/vscode-debug-specs/golang/)
