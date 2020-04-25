# Node JS

[Node.js®](https://nodejs.org) is a JavaScript runtime built on Chrome's V8 JavaScript engine.

<img src="https://nodejs.org/static/images/logo.svg" width="200">

## Installation

- use [brew](https://brew.sh/)

```
brew install node
```

- use [nvm](https://github.com/nvm-sh/nvm)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install v12.16.1
```

### Check Version

```
node -v
v12.16.1

npm -v
6.13.4
```

### Yarn

```
npm install -g yarn
```

## Notes

- [How to fix: node-gyp rebuild fail; No Xcode or CLT version detected](https://link.medium.com/3GO4FKHdZ3)

`gyp: No Xcode or CLT version detected!`

```sh
# step 1
xcode-select --print-path

# step 2
sudo rm -r -f /Library/Developer/CommandLineTools

# step 3
xcode-select --install
```
