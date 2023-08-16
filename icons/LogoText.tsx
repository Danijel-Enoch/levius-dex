import { SVGProps } from 'react'
import { logoText } from '../components/Layout/icons/index'


export const LogoText = (props: SVGProps<SVGSVGElement>) => {
  return (
    <img src={logoText.src} width={props.width} height={props.height} />
  )
}
