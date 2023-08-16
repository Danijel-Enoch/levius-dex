
import { SVGProps } from 'react'
import { logo } from '../components/Layout/icons/index'

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <img src={logo.src} width={props.width} height={props.height} />
  )
}
