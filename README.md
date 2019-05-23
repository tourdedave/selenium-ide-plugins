# Selenium IDE Plugins

Some plugins to help you unlock some new functionality in Selenium IDE.

## Building

```sh
> yarn build
```

## Installing

### Get a working build

You can either build a plugin yourself or grab a package build from [the latest available release](https://github.com/tourdedave/selenium-ide-plugins/releases/latest).

Once you have it, it's a simple matter of installing it in your preferred browser.

### Chrome

1. Visit `chrome://extensions` in the Chrome address bar
2. Click the slider to enable `Developer Mode` (top-right of the window)
3. Select `Load Unpacked`
4. Navigate to the `build` folder for a given plugin (e.g., `file-uploader`) and click `Select`

### Firefox

1. Visit `about:debugging` in the Firefox address bar
2. Click `Load Temporary Add-on...`
3. Navigate to the `build` folder for a given plugin (e.g., `file-uploader`), click `manifest.json`, and click `Open`
