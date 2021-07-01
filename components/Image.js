import React from 'react'
export default function Image({ src, altText = '', className = '', width = '', height = '' }) {
  /**
   * param: src
   * type: string
   * example: 'c4ab287c-2d40-4c81-b10b-9d7d3e1c2e5b'
   */
  return (
    <>
      <img src={`${process.env.assetsUrl}/${src}`} alt={altText} className={className} width={width} height={height} />
    </>
  )
}
