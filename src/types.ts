import { Property } from 'csstype'
import React from 'react'

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: Property.AlignItems
  direction?: Property.FlexDirection
  justify?: Property.JustifyContent
  wrap?: Property.FlexWrap
}
