# SortiFiler CLI

> Get your files sorted from the command line. 📚🗂🖥

## Description
An opinionated command line interface to sort your files and folders easily while feeling like [Hackerman](https://knowyourmeme.com/memes/hackerman).

**Desktop app coming soon! 🚀**

Everyday you look at your *Desktop/Downloads* folder and think, "Damn I need to clean up this mess". 🤦

That feeling is why this CLI now exists. 😆

SortiFiler CLI classifies files and folders and moves them into *\_Type* folders for easy access at the root of your chosen directory. 🗃

## Installation

To install SortiFiler CLI enter `npm -g install sortifiler-cli` into your terminal.

If you are looking for the SortiFiler API then check out [SortiFiler](https://github.com/yougotwill/sortifiler)!

## Usage

```
sortifiler --help

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
```

## How does the sorting work?

- Folders are classified using the best matching *_Type* folder based on the files within that folder (only 1 level down).
- Files are classified as follows:

| _Type Folder | File Extension                           |
| :------------- | :--------------------------------------- |
| _Books         | ".epub", ".mobi"                         |
| _Documents     | ".pdf", ".txt", ".doc", ".docx", ".ppt", ".pptx", ".md", ".json", ".ods", ".log", ".xls", ".xlsx", ".ttf" |
| _Images        | ".png", ".jpg", ".jpeg", ".gif", ".xcf", ".stl", ".blend", "*.obj", "*.mtl", "*.3ds", "*.tga", ".icns" |
| _Music         | ".mp3", ".wav", ".flac", ".m4a", ".ogg", ".mid", ".asd", ".m3u", ".pls", ".alp", ".asx", ".bfxrsound", ".m3u8", ".als", ".m4r" |
| _Programs      | ".dmg", ".exe", ".sh", ".app", ".pkg", ".apk", ".ipa", ".gba", ".gbc" |
| _Scripts       | ".py", ".java", ".class", ".sh", "*.cs", "*.r", ".itermcolors", ".terminal", ".theme", ".gbaskin", ".tmtheme", ".resbackup" |
| _Torrents      | ".torrent"                               |
| _Videos        | ".mkv", ".mp4", ".mov", ".mpeg", ".webm", ".srt", ".avi" |
| _Web           | ".html", ".css", ".js", ".htm"           |
| _Zipped        | ".zip", ".rar", ".7z", ".tar.gz", ".tar", ".gz", "*.unitypackage", "*.prefab", ".fbx" |

- **Note:** This list maybe outdated please check out [SortiFiler](https://github.com/yougotwill/sortifiler) for the latest info.

## Development

### Contributing

1. Fork it
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

### Requirements / Dependencies

- npm

## Version

0.1.1

## License

[MIT](LICENSE)
