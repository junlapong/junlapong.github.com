Portable WebSphere 8.5 for Developer (Windows 32bits)
====================================

## Setup
extract WAS85.zip to C:\IBM\WAS85

## How to create profile
PMT Profile Management Tool

```
C:\IBM\WAS85\WebSphere\AppServer\bin\ProfileManagement\pmt.bat
```

## How to delete profile
* ensure profile stopped *

```
C:\IBM\WAS85\WebSphere\AppServer\bin\manageprofiles.bat -delete -profileName AppSrv01
INSTCONFSUCCESS: Success: The profile no longer exists.
```

then remove profile directory
```
rmdir /s C:\IBM\WAS85\WebSphere\AppServer\profiles\Appsrv01
```

## Eclipse

Eclipse JEE neon

```
setup eclipse shortcut
C:\Java\eclipse\eclipse.exe -vm "C:\IBM\WAS85\WebSphere\AppServer\java\jre\bin\j9vm\jvm.dll" -data "C:\Java\workspace"
```

Installing IBM WebSphere Application Server Developer Tools for Eclipse from Eclipse Marketplace