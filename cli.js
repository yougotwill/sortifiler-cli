#! /usr/bin/env node
'use strict';

const meow = require('meow');
const sortifiler = require('sortifiler');

const cli = meow(`
  Usage
    $ sortfiler <path>

  Options
    --meta, -m     Includes meta files when sorting.
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

    Sort all folders and meta files in the current directory
    $ sortifiler . --folders --meta
    Looking for meta files ...
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
    meta: {
      type: 'boolean',
      alias: 'm'
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
let metaFiles = false;
if (flags.meta || flags.m) {
  metaFiles = true;
  console.log('Looking for meta files ...');
}
if (flags.files || flags.f) {
  console.log('Sorting files ...');
  sortifiler.sortFiles(cli.input[0], metaFiles);
} else if (flags.folders || flags.F) {
  console.log('Sorting folders ...');
  sortifiler.sortFolders(cli.input[0], metaFiles);
} else {
  console.log('Sorting ...');
  sortifiler.sortAll(cli.input[0], metaFiles);
}

console.log('Sorted ✔');
