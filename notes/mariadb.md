Homebrew
========

## MariaDB Server

Installing MariaDB Server:
```
brew install mariadb
```

start MariaDB Server:
```
mysql.server start
```

To auto-start MariaDB Server, use Homebrew's services:
```
brew services start mariadb
```

After MariaDB Server is started, you can log in:
```
mysql -u root
```

ref: https://mariadb.com/kb/en/library/installing-mariadb-on-macos-using-homebrew/
