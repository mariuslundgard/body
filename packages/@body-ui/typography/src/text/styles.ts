import {cache, CACHE_ENABLED, CSSObject, rem, responsive, Theme} from '@body-ui/core'

export interface TextStyleProps {
  $size: number[]
}

export function text(_props: {}, theme: Theme): CSSObject {
  const {font} = theme
  const key = 'text_size_' + JSON.stringify([font.text.family])

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = {
      fontFamily: font.text.family,

      $nest: {
        '&:before': {
          display: 'block',
          content: '""',
        },

        '&:after': {
          display: 'block',
          content: '""',
        },
      },
    }
  }

  return cache[key]
}

export function text_size(props: TextStyleProps, theme: Theme): CSSObject {
  const {$size} = props
  const {font, media} = theme
  const key = 'text_size_' + JSON.stringify([font.text.sizes, media, $size])

  if (!CACHE_ENABLED || !cache[key]) {
    cache[key] = responsive(media, $size, (sizeIndex): CSSObject => {
      const size = font.text.sizes[sizeIndex]

      if (!size) return {}

      return {
        fontSize: rem(size.fontSize),
        lineHeight: rem(size.lineHeight),
        padding: '1px 0',

        $nest: {
          '& a': {
            color: 'inherit',
          },

          '&:before': {
            marginTop: 0 - size.ascenderHeight - 1,
          },

          '&:after': {
            marginBottom: 0 - size.descenderHeight - 1,
          },
        },
      }
    })
  }

  return cache[key]
}
