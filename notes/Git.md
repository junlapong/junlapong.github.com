Git Notes
=========

## Command

1. [Configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
2. [Syncing a fork](https://help.github.com/articles/syncing-a-fork/)


## Checkout Git Sub Directory
```
svn ls https://github.com/spotify/apollo/trunk/examples
svn checkout https://github.com/spotify/apollo/trunk/examples
```


## How to update a fork directly from GitHub

1. Open your fork on GitHub.
2. Click on `Pull Requests`.
3. Click on `New Pull Request`. By default, GitHub will compare the original with your fork, and there shouldn’t be anything to compare if you didn’t make any changes.
4. Click on `switching the base`. Now GitHub will compare your fork with the original, and you should see all the latest changes.
5. Click on `Create a pull request` for this comparison and assign a predictable name to your pull request (e.g., Update from original).
6. Click on `Send pull request`.
7. Scroll down and click `Merge pull request` and finally `Confirm merge`. If your fork didn’t have any changes, you will be able to merge it automatically.
