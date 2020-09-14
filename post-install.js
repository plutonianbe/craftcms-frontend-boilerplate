// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

'use strict'

var gentlyCopy = require('gently-copy')

var filesToCopy = ['webpack.config.js', 'assets', 'templates']

// User's local directory
var userPath = process.env.INIT_CWD

// Moving files to user's local directory
gentlyCopy(filesToCopy, userPath)

// Insert scripts
const saveFile = require('fs').writeFileSync;

const pkgJsonPath = require.main.paths[0].split('node_modules')[0] + 'package.json';
console.log(require);

const json = require(pkgJsonPath);


if (!json.hasOwnProperty('scripts')) {
  json.scripts = {};
}

json.scripts['watch'] = 'webpack --watch --mode=development';
json.scripts['dev'] = 'webpack --mode=development';
json.scripts['build'] = 'webpack --watch --mode=production';

saveFile(pkgJsonPath, JSON.stringify(json, null, 2));