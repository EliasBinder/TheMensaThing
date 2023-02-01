# TheMensaThing Documentation

## Table of contents
- Description
- Installation guide for android and iOS
- Getting started
- Structure of code
  - File tree structure
  - List and explanation of features
  - Explanation of how the university APIs are integrated
  - Explanation of how geofencing is implemented
  - background location not working for IOS on expo GO

## Description

## Installation guide for android and iOS
If you don't want to build the app yourself, you can download the binaries from the [releases page](https://github.com/EliasBinder/TheMensaThing/releases). To install on Android, download the `.apk` file on your phone and open it. On iOS, you need a third party app to install the `.ipa` file. We recommend [AltStore](https://altstore.io/). Once you installed AltStore, you can open the `.ipa` file with it directly on your phone and install it.

## Getting started
Note: This project uses package manager yarn and the expo cli. If you don't have yarn installed, you can install it with `npm install -g yarn`. If you don't have the expo cli installed, you can install it with `npm install -g expo-cli`.
### Setup procedure
1. Clone the repository
2. Setup git submodules using `git submodule update --init --recursive`
3. Install the dependencies (using `yarn install`)
4. Start the project using `expo start`. Note: Your phone and computer need to be on the same network for the app to work.