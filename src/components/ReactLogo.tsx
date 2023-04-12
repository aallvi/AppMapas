import React from 'react'
import vite from '../vite.svg'

export const ReactLogo = () => {
  return (
     <img src={vite} width='60'  alt='vite' style={{position:'fixed', bottom:40, zIndex:999, right:20 }} />
  )
}
