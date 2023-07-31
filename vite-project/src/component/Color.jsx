import React from 'react'
import Coloritem from './Coloritem'
import { useEffect } from 'react';

function Color() {
  const colors = ['#2d3436','#4834d4','#be2edd','#f9ca24','#6ab04c','#30336b'];

  useEffect(()=>{
    const currentcolor = localStorage.getItem('color')
    setTheme(currentcolor)
  },[])

  const setTheme =(colorv)=>{document.documentElement.style.setProperty('--bg-color',colorv)}

 const setcolor =(event)=>{
    const currentcolor = event.target.style.getPropertyValue('--bg-color')
    setTheme(currentcolor)
    localStorage.setItem('color', currentcolor)
    
   
 }

  return (
    <div className='app'>
        <div className="color-switcher">
            <h1 className="heading">select colors</h1>
            <div className="color-list">
              {colors.map((color,idx)=>{
                return <Coloritem key={idx} color={color} setcolor={setcolor}/>
              })}
            </div>
        </div>
    </div>
  )
}

export default Color