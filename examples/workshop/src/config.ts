import {defineConfig} from '@sanity/ui-workshop'
import {scopes} from './scopes'

export const config = defineConfig({
  frameUrl: '/frame/',
  scopes,
  title: 'Body Workshop',
})
