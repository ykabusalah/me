'use client';

import Canvasdr from '@/components/canvas/Canvasdr';
import React from 'react'
import { Canvas, ReactSketchCanvas } from "react-sketch-canvas";


const Draw = () => {
  return (
    
    <section className='py-24'>
        <div className='container'>
            <h1 className='text-4xl font-bold'>Draw your Ideas here</h1>
            <p className='text-sm text-muted-foreground'>Draw your favocite drawing here and save them to be shared on the wbeiste or dowbload them to send them to your friends</p>
            <div>
      <h1>Draw here!</h1>
      <ReactSketchCanvas
        width="100%"
        height="150px"
        canvasColor="transparent"
        strokeColor="#a855f7"
      />
    </div>
        </div>
    </section>
  )
}

export default Draw