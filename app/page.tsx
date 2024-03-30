/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/16/solid'


function page() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
        <h1  className='text-5xl font-bold mb-20'>ChatGPT Messenger</h1>

        <div className='flex space-x-2 text-center'>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    {/* Sun icon */}
                    <SunIcon className='h-8 w-8'/>
                    
                    <h2>Examples</h2>
                </div>
                <div className='space-y-2'>
                    <p className="infoText">"Explain Something to me?"</p>
                    <p className="infoText">"Difference between apple and orange"</p>
                    <p className="infoText">"What is color or tortoise?"</p>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    {/* Sun icon */}
                    <BoltIcon className='h-8 w-8'/>
                    
                    <h2>Capabilties</h2>
                </div>
                <div className='space-y-2'>
                    <p className="infoText">"Explain Something to me?"</p>
                    <p className="infoText">"Difference between apple and orange"</p>
                    <p className="infoText">"What is color or tortoise?"</p>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center justify-center mb-5'>
                    {/* Sun icon */}
                    <ExclamationTriangleIcon className='h-8 w-8'/>
                    
                    <h2>Limitations</h2>
                </div>
                <div className='space-y-2'>
                    <p className="infoText">"Explain Something to me?"</p>
                    <p className="infoText">"Difference between apple and orange"</p>
                    <p className="infoText">"What is color or tortoise?"</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default page