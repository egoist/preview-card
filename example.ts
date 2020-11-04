import fs from 'fs'
import { getImage, stopBrowser } from './src'

async function main() {
  const buffer = await getImage({
    title: 'Customizable social media preview image',
    description: `If you want to create a preview card like this, go check out this project on GitHub and let me know if you like it!`,
    domain: 'github.com/egoist/preview-card',
  })
  await fs.promises.writeFile('foo.jpg', buffer)
  await stopBrowser()
}

main()
