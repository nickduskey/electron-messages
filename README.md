# electron-messages
![Android Messages Electron](https://raw.githubusercontent.com/nickduskey/electron-messages/master/media/androidmessagesicon.jpg)

electron-messages is an **unofficial** electron wrapper for Android Messages for Web.

We are not affiliated with Android Messages team. All copyrights belong to their respective owners.

### Features

#### Background behaviour
_Coming Soon!_

#### Native Notifications
_Coming Soon!_

### Version

Alpha 0.0.0

## Dev and contributing

Built with [Electron](http://electron.atom.io). The main skeleton of the app is based on [szwacz/electron-boilerplate](https://github.com/szwacz/electron-boilerplate). Inspiration has also been taken from [protonmail-desktop](https://github.com/protonmail-desktop/application).

Any contribution or suggestion is accepted. Feel free to create any report for issues or app crashes. You can also use the report link provided in the application menu to create a crash report.
Pull requests are accepted.

##### Known bugs

* Notifications not working
* Upgrades lose authentication

### Testing


## Running the App

### Executables

You can build your own executables from the latest source by running one of the commands below.

### Compiling from source
The installer is provided by *electon-builder* and processed through gulp thanks to `electron-boilerplate`.

This will work on OS X, Linux, and Windows. You will need [Yarn](https://yarnpkg.com/en/docs/install) to run this app.
- Install required packages: `$ yarn install`
- Run: `$ yarn start`
- Build: `$ yarn build`
- Package in a distributable format: `$ yarn run dist`
- Generate package directory without distributable: `$ yarn run pack`

The building settings is in `./package.json` and additional configuration instructions can be found [here](https://github.com/electron-userland/electron-builder/wiki/Options). The building process will only create version for the current OS. For creating MacOS, Windows and Linux distributable you need to run the command from each OS.


License
----
**MIT** See LICENSE
