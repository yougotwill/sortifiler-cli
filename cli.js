#! /usr/bin/env node
'use strict';

const meow = require('meow');
const sortifiler = require('sortifiler');

const cli = meow(`
  Usage
    $ sortfiler <path>

  Options
    --files, -f    Sort all files in a given path.
    --folders, -F  Sort all folders in a given path
    no flags,      Sorts all files and folders in a given path.

  <path> is the file path to directory that needs sorting

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
    }
  }
});

const flags = cli.unnormalizedFlags;
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
