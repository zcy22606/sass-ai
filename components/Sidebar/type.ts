import { JSXElementConstructor, ReactNode } from 'react'

export interface Route {
  label: string
  icon: JSXElementConstructor<any>
  color: string
  href: string
}
