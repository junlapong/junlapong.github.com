# Yarn


## Installation

```
curl -o- -L https://yarnpkg.com/install.sh | bash
```

## Check Version

```
yarn --version
```

## Basic Usage

https://classic.yarnpkg.com/en/docs/usage

### Starting a new project

```
mkdir new-project && cd new-project
yarn init
```

### Adding a dependency

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### Adding a dependency to different categories of dependencies

Add to devDependencies, peerDependencies, and optionalDependencies respectively:

```
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

### Upgrading a dependency

```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### Removing a dependency

```
yarn remove [package]
```

### Installing all the dependencies of project

```
yarn
```

or

```
yarn install
```

## Dependencies Management & Audit

- `yarn list` list installed packages
  - `yarn list --pattern "gulp|grunt"`
- `yarn audit` perform a vulnerability audit against the installed packages
- `yarn outdated` displays the list of outdated packages
- `yarn upgrade [package...]` can then be used to upgrade desired packages
- `yarn upgrade-interactive` as a combination of the yarn outdated and yarn upgrade [package...] commands


## Issues

- [How to fix: node-gyp rebuild fail; No Xcode or CLT version detected!](https://mycyberuniverse.com/how-fix-node-gyp-rebuild-fail-no-xcode-clt.html)


