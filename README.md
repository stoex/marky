<h1 align="center">
  <br>
  <a href="https://github.com/vesparny/marky"><img src="https://cloud.githubusercontent.com/assets/82070/14968420/fd7960b4-10bc-11e6-80ef-a7eb63fb1677.png" alt="MDedit" width="200"></a>
  <br>
  MDedit
  <br>
  <br>
</h1>

<h4 align="center">A Markdown editor</h4>
<h4 align="center">For OS X, Windows and Linux</h4>
<h5 align="center">Built with Electron and React + Redux</h5>


<p align="center">
  <a href="https://travis-ci.org/stoex/md.edit"><img src="https://travis-ci.org/stoex/md.edit.svg?branch=master" alt="Travis"></a>
  <a href="https://github.com/stoex/md.edit/releases"><img src="https://img.shields.io/github/release/stoex/md.edit.svg" alt="Release"></a>
  <a href="https://github.com/stoex/md.edit/releases"><img src="https://img.shields.io/github/downloads/stoex/md.edit/total.svg" alt="Downloads"></a>
</p>

## Install

**MDedit** is still under development. You can download the latest version from the [releases](https://github.com/stoex/md.edit/releases) page.

Please not that binaries are not signed. If you need them to be signed you can easily do it with your own certificates.

## Features

* Live preview
* View / Edit mode
* CLI Options
* GitHub Flavored Markdown support
* Search in Markdown
* Syntax highlighting
* Emoji Support
* Words count
* Resizable panels

## Technologies used

* [electron](https://github.com/electron/electron)
* [React](https://facebook.github.io/react/)
* [Redux](https://github.com/reactjs/redux/)

## Roadmap

Refer to open [issues](https://github.com/stoex/md.edit/issues). Also feel free to propose features and report bugs.

## How to Contribute

### Install dependencies

```
$ npm install
```

### Run app

```
$ npm start
```

### Package app

Builds app binaries for OS X, Linux, and Windows.

```bash
$ npm run build
```

To build for one platform:

```bash
$ npm run build -- [platform]
```

Where `[platform]` is `darwin`, `linux`, `win32`, or `all` (default).

The following optional arguments are available:

- `--sign` - Sign the application (OS X, Windows)
- `--package=[type]` - Package single output type.
   - `deb` - Debian package
   - `zip` - Linux zip file
   - `dmg` - OS X disk image
   - `exe` - Windows installer
   - `portable` - Windows portable app
   - `all` - All platforms (default)

Note: Even with the `--package` option, the auto-update files (.nupkg for Windows, *-darwin.zip for OS X) will always be produced.

#### Windows build notes

To package the Windows app from non-Windows platforms, [Wine](https://www.winehq.org/) needs
to be installed.

On OS X, first install [XQuartz](http://www.xquartz.org/), then run:

```
brew install wine
```

(Requires the [Homebrew](http://brew.sh/) package manager.)

#### CLI Options

**MDedit** currently supports the following flags:

- ``-f {absolute file path} ``
  * Pass a file to MDedit to open it immediately on startup. Good for scripting previews and such of existing markdown files.

### Code Style

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Inspiration

* https://github.com/vesparny/marky - picking it up where Marky left off. Thanks for the awesome project!
## License

MIT.

Copyright for portions of 'MDedit' are held by Alessandro Arnodo, 2016 as part of 'Marky'.

All other copyright for 'MDedit' are held by Christian Nicola, 2017-present.