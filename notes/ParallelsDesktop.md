Parallels Desktop 12 for macOS Sierra
=====================================

From [Download Parallels Desktop 12 for macOS Sierra](https://youtu.be/EQq92kv1Q3Y) 

1. get `ParallelsDesktop-12.1.3-41532.dmg` file
2. install.app by skip download latest version
3. run Tools/EFI Patch/`SnowLeo.tool` 
4. restart your Mac

## Note

For those having problems due to having the trial installed before the cracked version.
Copy and paste the code below into the terminal. Enter your password and open parallels up again.
Trial should be gone after that.

```
rm -rfd ~/library/preferences/com.parallels*
rm -rfd ~/library/preferences/parallels/*
rm -rfd ~/library/preferences/parallels
sudo -s rm -rfd /private/var/db/parallels/stats/*
sudo -s rm -rfd /private/var/db/parallels/stats
sudo -s rm -rfd /private/var/db/parallels
sudo -s rm -rfd /library/logs/parallels.log
sudo -s rm -rfd /library/preferences/parallels/*
sudo -s rm -rfd /library/preferences/parallels
sudo -s rm -rfd /private/var/db/parallels
sudo -s rm -rfd /private/var/.parallels_swap
sudo -s rm -rfd /private/var/db/receipts/'com.parallels*'
sudo -s rm -rfd /private/tmp/qtsingleapp*-lockfile
sudo -s rm -rfd /private/tmp/com.apple.installer*/*
sudo -s rm -rfd /private/tmp/com.apple.installer*
sudo -s rm -rfd /private/var/root/library/preferences/com.parallels.desktop.plist
sudo rm -fr /private/var/.Parallels_swap
sudo rm -fr /private/var/db/Parallels/Stats
sudo rm -fr /private/tmp/qtsingleapp-Parall-c0ce-0-lockfile
sudo rm -fr /Library/Preferences/Parallels/
sudo rm -fr ~/Library/Logs/parallels.log
sudo rm -fr ~/Library/Preferences/com.parallels
sudo rm -fr ~/Library/Preferences/Parallels
```

