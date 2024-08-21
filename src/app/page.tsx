'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { FaPencilAlt } from 'react-icons/fa'; 

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
     <div className="flex h-screen flex-col">
      <div className="flex flex-grow flex-col justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="text-4xl font-bold text-gray-800 sm:text-6xl" >
             <h1>Unleash Your Creativity </h1> 
            <p className="mt-4 text-gray-600 sm:text-xl">
              Explore our drawing tools and bring your ideas to life.
            </p>
            </div>
            <div className='text-1xl mt-10'>
              <span>
                To draw your Own Drawings Click the 
                <Link href="/draw" className="pr-2 ml-2 inline-flex items-center text-black hover:text-gray-800">
                  <FaPencilAlt className=" h-4 w-4" />
                </Link>
              </span>

            </div>

          </div>
          <div className="col-span-2 flex justify-center items-center">
            {/* Canvas for displaying generated images */}
            <div className="relative w-full max-w-lg aspect-square rounded-lg bg-white shadow-lg">
              <canvas className="h-full w-full rounded-lg"></canvas>
            </div>
          </div>
        </div>
      </div>
     </div>

    </main>
  

);
}
