# Visual Studio Code

## Shortcut Key

| Description | Shortcut Key |
|:--|:--|
| column select | SHIFT + ALT, then click and drag |
| preview markdown | CMD + ALT + V |
| search, replace | CMD + ALT + F |
| show/hide terminal | CTL + ` |
| trailing whitespace | CTL + X |
| transform text to lowercase | CTL + L |
| transform text to uppercase | CTL + U |

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
 }
]
```

### Terminal

| Description | Shortcut Key |
|:--|:--:|
| clear screen | CTL + L |
| exit terminal | CTL + D |

### ตอนที่ 1

1. เลือกข้อความทั้งหมดแบบง่ายๆ
2. เลือกข้อความทั้งหมดในครั้งเดียว
3. ย้ายบรรทัดง่ายๆ
4. ย้ายโค้ดเด้งซ้ายเด้งขวา

[คลิกเลย](https://www.facebook.com/WebAppzStory/posts/2928259943913336)

### ตอนที่ 2

1. ลากโค้ดได้ดั่งใจ
2. ลากโค้ดพร้อม Copy ในรอบเดียว
3. เลือกโค้ดได้ตามใจเรา จะเลือกเท่าไหร่ก็ได้
4. ก็อปปี้ข้อมูล และวางได้ในครบเดียวจบ!!!!

[คลิกเลย](https://www.facebook.com/WebAppzStory/posts/2949587791780551)

## Extensions

- [REST Client](https://github.com/Huachao/vscode-restclient)

```
wget rest-client.http
```