Install Java 8 on OS X
======================

[sdk](http://sdkman.io/sdks.html)

After installing the [brew](https://brew.sh/)
```
$ brew update
$ brew tap caskroom/cask
$ brew install Caskroom/cask/java
```
And Java 8 will be installed at `/Library/Java/JavaVirtualMachines/jdk1.8.xxx.jdk/`

Check version:
```
$ java -version 
java version "1.8.0_131"
Java(TM) SE Runtime Environment (build 1.8.0_131-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.131-b11, mixed mode)
```

Install jEnv:

```
$ brew install jenv
```

Add the following lines to `~/.bash_profile` This will initialize jEnv.

```
# Init jenv
if which jenv > /dev/null; then eval "$(jenv init -)"; fi
```

jEnv doesn’t install JDKs, so we have to tell jEnv where to look for them. Type these commands to register JDKs in jEnv (replace the minor and patch versions with yours):

```
$ jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_121.jdk/Contents/Home/
$ jenv add /Library/Java/JavaVirtualMachines/jdk1.8.0_131.jdk/Contents/Home/
```

After that, run this command to list all registered JDKs:

```
$ jenv versions
```

Removing the Java JDK
```
$ cd /Library/Java/JavaVirtualMachines
$ ls
jdk1.8.0_121.jdk jdk1.8.0_131.jdk
$ sudo rm -rf jdk1.8.0_121.jdk
```



Reference
* [Install Multiple Java Versions on Mac](http://davidcai.github.io/blog/posts/install-multiple-jdk-on-mac/)