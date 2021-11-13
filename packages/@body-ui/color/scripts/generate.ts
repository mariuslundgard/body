/**
 * Generate `src/hues.ts` based on `COLOR_HUES` constant + values in `src/config.js`
 * This lets us move `polished` (or similar) to a dev dependency, reducing bundle size
 */

import {writeFileSync, readFileSync} from 'fs'
import path from 'path'
import {compileHues} from '../src/_lib/compileHues'
import {config} from '../src/config'

const ROOT_PATH = path.resolve(__dirname, '../../../..')

function generate() {
  const filepath = path.resolve(__dirname, '../src/hues.ts')
  const prettierConfig = JSON.parse(readFileSync(path.resolve(ROOT_PATH, '.prettierrc'), 'utf8'))
  const code = compileHues(config, filepath, prettierConfig)

  writeFileSync(filepath, code)
}

generate()
