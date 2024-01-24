import React from 'react'
import "./ImageGrid.css"

// receive props in the argument of your child component function
// you can either receive it as 'props' and then access specific props with object dot notation: 'props.images', OR you can destructure as you're accepting props: '{images}'
export default function ImageGrid({images}) {
  return (
    <div className = "ImageGrid">
      {images.map((i) => (
          <img 
            key={i.title}
            src={i.url}
            alt={i.title}
          />
        ))}
    </div>
  )
}
