# @egoist/preview-card

Customizable social media preview image, like this one:

<img src="https://user-images.githubusercontent.com/8784712/98120564-11d02900-1ee9-11eb-9574-d243e617f682.png" alt="preview" width="600">

## Install

```bash
yarn add @egoist/preview-card
```

**NOTE: this module relies on Chrome (or Chromium) browser, make sure you have it installed on your machine before running this module**.

## Usage

```ts
import { getImage, stopBrowser } from '@egoist/preview-card'

const imageBuffer = await getImage({
  title: 'your title',
  description: 'your description',
  domain: 'your domain',
  themeColor: '#e02423', // optional
})

// Close the browser when you no longer need to use this module
await stopBrowser()
```

## CLI Usage

```bash
preview-card out.png --title title --domain domain --desc description

# All flags
preview-card --help
```

## Inspiration

Thanks to [Mugshot Bot](https://www.mugshotbot.com/) for the original design inspiration.

## License

MIT &copy; [EGOIST](https://github.com/sponsors/egoist)
