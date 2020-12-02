# element-theme-robo

> element component robo theme for baidu robo team


## Installation
```shell
yarn install element-theme-robo -S
```

## Usage

Use Sass import

```css
@import 'element-theme-robo';
```

Or Use webpack
```javascript
import 'element-theme-robo'
```

Or
```html
<link rel="stylesheet" href="path/to/node_modules/element-theme-robo/lib/index.css">
```

##  Import on demand

```javascript
import 'element-theme-robo/lib/input.css';
import 'element-theme-robo/lib/select.css';

// ...
```

Or with [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)

```js
// babel.config.js
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "~node_modules/element-theme-robo/lib"
      }
    ]
  ]
};
```
