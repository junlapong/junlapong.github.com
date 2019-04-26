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

## Install MongoDB

Prerequisite:
```
brew tap mongodb/brew
```

Install MongoDB:
```
brew install mongodb-community@4.0
```

Run MongoDB:
```
mongod --config /usr/local/etc/mongod.conf
```

Alternatively, to run MongoDB as a macOS service:
```
brew services start mongodb-community@4.0
```

Connect and Use MongoDB:
```
mongo
```

ref: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

## Installing Robo 3T (Robomongo) 

```
brew cask install robo-3t
```