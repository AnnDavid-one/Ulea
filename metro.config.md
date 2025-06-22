the file namme:
"metro.config.js"

# NOTE I CHANGED THIS CAUSE I WAS TRYING TO SEE IF MY PROJECT ACUTUALLY NEEDS A METRO CONFIG FILE FOR THE FIREBASE

# this is the main version from reactt#
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;




## this the edited version: ##

const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);
config.resolver.sourceExts.push('cjs');
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
