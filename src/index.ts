import { getImage as htmlToImage, stopBrowser } from '@egoist/html-to-image'

type Options = {
  title: string
  description: string
  domain: string
  themeColor?: string
}

export { stopBrowser }

export const getImage = async (options: Options) => {
  const themeColor = options.themeColor || '#e02423'
  const width = 1280
  const height = 640

  const html = `
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>


  <div class="card">
    <div class="card-inner">
      <div class="domain">${options.domain}</div>
      <h1 class="title">${options.title}</h1>
      <div class="description">${options.description}</div>
    </div>
  </div>
  
  <style>
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  .card {
    position: relative;
    padding: 0 7rem;
    background: white;
  }
  .card:before {
    position: absolute;
    height: 6px;
    background: ${themeColor};
    content: '';
    display: block;
    width: 100%;
    top: 0;
    left: 0;
  }
  .card-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
  .title {
    font-size: 5rem;
    margin: 12px 0 0 0;
    line-height: 1;
    color: #171d2d;
  }
  .description {
    font-size: 2.4rem;
    margin: 30px 0 0 0;
    color: #5c6067;
    line-height: 1.5;
  }
  .domain {
    font-size: 1.8rem;
    color: ${themeColor};
  }
  </style>

  `

  const buffer = await htmlToImage(html, {
    browser: {
      // headless: false,
      defaultViewport: {
        width,
        height,
      },
    },
    clip: {
      width,
      height,
      x: 0,
      y: 0,
    },
  })

  return buffer
}
