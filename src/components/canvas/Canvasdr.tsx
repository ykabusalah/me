'use client';

import { type ChangeEvent, useRef, useState } from "react";
import {
    ReactSketchCanvas,
    type ReactSketchCanvasRef,
  } from "react-sketch-canvas";

  import { FaPencilAlt, FaEraser, FaRedo, FaUndo, FaRegSave} from 'react-icons/fa'; 
  import { FaArrowsRotate } from "react-icons/fa6";
const Canvasdr = () => {

    const colorInputRef= useRef<HTMLInputElement>(null)
    const canvaRef= useRef<ReactSketchCanvasRef>(null)
    const [strokeColor, setStrokeColor] = useState("#000000");
    const [eraseMode, setEraseMode] = useState(false);
    
  return (
    <div>Canvasdr

<FaEraser />
<FaPencilAlt />
<FaRedo />
<FaUndo />
<FaRegSave />
<FaArrowsRotate />

    </div>
    
  )
}

export default Canvasdr