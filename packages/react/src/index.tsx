import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  background: '$ignite500',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$white',
  color: '$white',
  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },
})

export type ButtonProps = ComponentProps<typeof Button>
