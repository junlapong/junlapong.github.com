Termux
======

## copy to clipboard

### 1. install termux api

```
pkg install termux-api
```

### 2. test

```
termux-clipboard-get
```

### 33. set alias as pcopy

```
cd ~
echo 'alias pbcopy=termux-clipboard-set' >> .bashrc
echo 'alias pbpaste=termux-clipboard-get' >> .bashrc
source .bashrc
```

