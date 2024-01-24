// need to import useState 
import React, { useState } from 'react'
import "./ImageGrid.css"

// receive props in the argument of your child component function
// you can either receive it as 'props' and then access specific props with object dot notation: 'props.images', OR you can destructure as you're accepting props: '{images}'
export default function ImageGrid({images}) {
  // create state "isBig"
  const [isBig, setIsBig] = useState(false)

  return (
    <div className = "ImageGrid">
      <div className = "buttons">
        <button 
          className={isBig ? "active" : null}
          onClick={() => setIsBig(true)}>
          Big
        </button>
        
        <button 
          className={!isBig ? "active" : null}
          onClick={() => setIsBig(false)}>
          Small
        </button>
      </div>
      <div className="grid">
        {images.map((i) => (
            <img 
              key={i.title}
              src={i.url}
              alt={i.title}
              className={isBig ? "big" : null}
            />
          ))}
        </div>
    </div>
  )
}
