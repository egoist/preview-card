#!/usr/bin/env node
import fs from 'fs'
import minimost from 'minimost'
import { getImage, stopBrowser } from './'

const { input, flags } = minimost(process.argv.slice(2), {
  alias: {
    help: ['h'],
    description: ['desc'],
  },
})

const outfile = input[0]

if (flags.help || !outfile) {
  console.log(`
preview-card <outfile> [options]

FLAGS:
--title <title>                    Title
--desc, --description <desc>       Description   
--domain <value>                   Domain
--themeColor <value>               Theme color 
-h, --help                         Display this message
    `)
  process.exit()
}

async function main() {
  const buffer = await getImage({
    title: flags.title,
    description: flags.description,
    domain: flags.domain,
    themeColor: flags.themeColor,
  })
  await fs.promises.writeFile(outfile, buffer)
  await stopBrowser()
  console.log(`Successfully to ${outfile}!`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
