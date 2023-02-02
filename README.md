# TheMensaThing Documentation

## Table of contents
- Description
- Getting started
- Structure of code
  - File tree structure
  - Submodules
  - Explanation of how geofencing is implemented
- Known issues
  - Background location not working for IOS on expo GO
- Future improvements

## Description
‘TheMensaThing’ is an app for all things regarding the UniBZ Mensa. It displays the daily menu and prices, as well as the current occupation of the mensa and UniBar. It is possible to change the location to Bolzano, Bressanone or Bruneck and display the data for the respective mensa. When logged in (via the uniBZ credentials) ‘The MensaThing’ also allows access to uniBZ data like the current card balance and the menu prices of the mensa.

## Getting started
Note: This project uses package manager yarn and the expo cli. If you don't have yarn installed, you can install it with `npm install -g yarn`. If you don't have the expo cli installed, you can install it with `npm install -g expo-cli`.

### Setup procedure
1. Clone the repository
2. Setup git submodules using `git submodule update --init --recursive`
3. Install the dependencies (using `yarn install`)
4. Start the project using `npm start`. Note: Your phone and computer need to be on the same network for the app to work.

Note that this app does not use any native code anymore, as the firebase database is not anymore accessed directly by the app, but instead by a backend. Therefore, a GET and POST requests to the backend are used to retrieve and update the data. The backend is hosted by google firebase. We chose this way to get rid of the never ending build issues with the native code, as it seems that expo regularly updates something that breaks literally everything :(

## Structure of code

### File tree structure

- `components`: Contains all the components used in the app. Some of the components are only used in one screen, so they are located in a folder with the name of the screen they are used in.
- `hooks`: Contains all the custom hooks used in the app.
- `model`: Contains relational object models used for the data that gets retrieved from the APIs.
- `screens`: Contains all the screens used in the app. Each screen is a separate file. Some screens contain nested navigations, so folders with the name of that screens exist to structure screens in some kind of hierarchy.
- `TheMensaThingAzureLogin`: Submodule, The Azure login library used for the login with uniBZ credentials.
- `util`: Contains static utility functions used in the app.

### Submodules

This application uses one submodule

- `TheMensaThingAzureLogin`: The Azure login library used for the login with uniBZ credentials. The repository of that library can be found [here](https://github.com/EliasBinder/TheMensaThingAzureLogin). It is a fork of another [repository](https://github.com/shedaltd/react-native-azure-ad-2), however this fork is enhanced by supporting the login with microsoft company accounts, providing a method to deal with the refresh token used by the oauth2 flow, and providing additional methods to access the uniBZ backend. This is achieved by using the CockpitMobileTestAPI which does not require administrator consent. In order to receive the endpoints of this API, the cockpit mobile android apk has been decompiled and the endpoints have been extracted from the code. You can find a list of all university endpoints [here](https://gist.github.com/EliasBinder/515e679276cb7e6022fe7ad1f66c3197)

### Explanation of how geofencing is implemented

TODO

## Known issues

### Background location not working for IOS on expo GO

When using the expo go app on IOS (on a real device), the background location does not work. This is due to the fact that the expo go app does not support background location. However, when you build the app for iOS, the background location works as expected.

## Future improvements

- Add preferred dishes screen
- Improve backend by providing a more realistic view of the mensa occupation



