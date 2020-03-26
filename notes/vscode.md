# Visual Studio Code

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

File -> Preferences -> Keyboard Shortcuts.

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

### Terminal

| Description | Shortcut Key |
|:--|:--:|
| clear screen | CTL + L |
| exit terminal | CTL + D |

## Extensions

- [REST Client](https://github.com/Huachao/vscode-restclient)

```
wget https://junlapong.github.io/notes/rest-client.http
```
