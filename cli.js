#! /usr/bin/env node
'use strict';

const meow = require('meow');
const sortifiler = require('sortifiler');
const fs = require('fs');

const cli = meow(`
  Usage
    $ sortfiler <path>

  Options
    no flags,                     Sorts all files and folders in a given path.
    --files, -f                   Sort all files in a given path.
    --folders, -F                 Sort all folders in a given path.
    --config, -c <filePath>       Use a custom configuration file.

  <path> is the path to directory that needs sorting

  Examples
    Sort all files and folders in the Downloads folder.
    $ sortifiler ~/Downloads
    Sorting ...
    Sorted ✔

    Sort all files on the Desktop
    $ sortifiler ~/Desktop --files
    Sorting files ...
    Sorted ✔

    Sort all folders in the Downloads folder
    $ sortifiler ~/Downloads --folders
    Sorting folders ...
    Sorted ✔

    Sort all files and folders on the Desktop using a custom configuration file
    $ sortifiler ~/Desktop --config sortifiler.json
    Loaded configuration ✔
    Sorting folders ...
    Sorted ✔
`, {
  flags: {
    help: {
      type: 'boolean',
      alias: 'h'
    },
    version: {
      type: 'boolean',
      alias: 'v'
    },
    files: {
      type: 'boolean',
      alias: 'f'
    },
    folders: {
      type: 'boolean',
      alias: 'F'
    },
    config: {
      type: 'boolean',
      alias: 'c'
    },
  }
});

const flags = cli.unnormalizedFlags;

if (flags.config || flags.c) {
  if (cli.input.length > 2) {
    console.log('Invalid file!');
    return;
  } else {
    const configFile = fs.readFileSync(cli.input[1]);
    const configData = JSON.parse(configFile);
    sortifiler.config(configData);
  }
  console.log('Loaded configuration ✔')
}

if (flags.files || flags.f) {
  console.log('Sorting files ...');
  sortifiler.sortFiles(cli.input[0]);
} else if (flags.folders || flags.F) {
  console.log('Sorting folders ...');
  sortifiler.sortFolders(cli.input[0]);
} else {
  console.log('Sorting ...');
  sortifiler.sortAll(cli.input[0]);
}

console.log('Sorted ✔');
