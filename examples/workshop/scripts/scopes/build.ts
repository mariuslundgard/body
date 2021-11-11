import path from 'path'
import {_writeScopes, ScopeResolverOptions} from '../../vite/plugin-workshop/_helpers'

const ROOT_PATH = path.resolve(__dirname, '../../../..')

const SCOPES_RESOLVER_OPTIONS: ScopeResolverOptions = {
  pattern: [
    path.resolve(ROOT_PATH, 'packages/**/src/**/__workshop__/index.ts'),
    path.resolve(ROOT_PATH, 'packages/**/src/**/__workshop__/index.tsx'),
  ],
  target: path.resolve(__dirname, '../../src/scopes.ts'),
}

_writeScopes(SCOPES_RESOLVER_OPTIONS)

// eslint-disable-next-line no-console
console.log('Wrote scopes to', SCOPES_RESOLVER_OPTIONS.target)
