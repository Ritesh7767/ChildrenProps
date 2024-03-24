import React from 'react'
import "./Gallery.css"
import { products } from './Images'

const Gallery = ({children}) => {

  return (
    <div className='container'>
      {products.slice(0, children).map(ele => {
        return (
          <img src={ele} />
        )
      })}
    </div>
  )
}

export default Gallery