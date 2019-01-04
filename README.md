# style-module <sup><img src="https://version-badge.egoist.sh/text?text=beta"></sup>

[![NPM version](https://badgen.net/npm/v/style-module)](https://npmjs.com/package/style-module) [![NPM downloads](https://badgen.net/npm/dm/style-module)](https://npmjs.com/package/style-module) [![CircleCI](https://badgen.net/circleci/github/egoist/style-module/master)](https://circleci.com/gh/egoist/style-module/tree/master) [![donate](https://badgen.net/badge/support%20me/donate/ff69b4)](https://patreon.com/egoist) [![chat](https://badgen.net/badge/chat%20on/discord/7289DA)](https://chat.egoist.moe)

**Please consider [donating](https://www.patreon.com/egoist) to this project's author, [EGOIST](https://egoist.sh), to show your ❤️ and support.**

## Install

```bash
npm i style-module
```

<details><summary>Use UMD bundle from CDN</summary>

```html
<script src="https://unpkg.com/style-module/dist/style-module.min.js"></script>
<script>
  const { styleModule } = styleModule

  const styles = styleModule({
    button: {
      color: 'red'
    }
  })
</script>
```

</details>

<details><summary>Use ESM bundle from CDN</summary>

```html
<script type="module">
  import { styleModule } from 'https://unpkg.com/style-module?module'

  const styles = styleModule({
    button: {
      color: 'red'
    }
  })
</script>
```

</details>

## Usage

Check out the live demo on [CodePan](https://codepan.net/gist/bfcdf733f6099fff24080d039569c9aa).

```js
import { styleModule } from 'style-module'

const buttonStyles = styleModule({
  button: {
    color: 'red',
    ':hover': {
      color: 'blue'
    }
  }
})

const styles = styleModule({
  main: {
    font: '14px/1.4 helvetica',
    backgroundColor: 'red'
  },
  button: {
    // Composes (i.e. inherits) all the styles from buttonStyles.button
    composes: buttonStyles.button,
    color: 'pink'
  }
})

// Generated class names
console.log(styles)
//=>
{
  main: 'sm_2',
  button: 'sm_0 sm_3'
}
```

### Composes

Composes (i.e. inherits) all styles from an existing class name which is usually generated by `css` or `styleModule` function:

```js
import { css } from 'styleModule'

const defaultButton = css({
  border: '1px solid #ccc'
})

const primaryButton = css({
  composes: defaultButton,
  color: 'red',
  ':hover': {
    color: 'pink'
  }
})
```

## API

### css

Generate class name for a style record:

```js
import { css } from 'styleModule'

const className = css({
  color: 'red',
  ':hover': {
    color: 'black'
  }
})

className //=> sm_0
```

### styleModule

Generate class names for _multiple style records (a module)_:

```js
import { styleModule } from 'styleModule'

const styles = styleModule({
  button: {
    color: 'red',
    ':hover': {
      color: 'black'
    }
  }
})

styles.button //=> .sm_0
```

`styleModule` is just a short-hand for generating multiple class names at once, internally it calls `css` function too.

## TODO

- [ ] Atomic CSS

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**style-module** © EGOIST, Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/style-module/contributors)).

> [Website](https://egoist.sh) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@\_egoistlily](https://twitter.com/_egoistlily)
