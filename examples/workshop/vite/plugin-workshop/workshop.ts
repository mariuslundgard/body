import {ResolvedConfig} from 'vite'
import {_initWatcher, _writeScopes, ScopeResolverOptions} from './_helpers'

const WORKSHOP_ENV_MODULE_ID = '$workshop'

export function workshop(opts: ScopeResolverOptions) {
  let isInitialized = false
  let isWatcherInitialized = false
  let shouldWatch = true

  return {
    name: 'resolve-stories',

    configResolved(config: ResolvedConfig) {
      shouldWatch = config.command !== 'build'
    },

    resolveId(id: string) {
      if (id === WORKSHOP_ENV_MODULE_ID) {
        if (!isInitialized) {
          _writeScopes(opts)
          isInitialized = true
        }

        if (shouldWatch && !isWatcherInitialized) {
          _initWatcher(opts)
          isWatcherInitialized = true
        }

        return opts.target
      }

      return undefined
    },
  }
}
