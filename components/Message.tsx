import React from 'react'
import { DocumentData } from 'firebase/firestore'
import Image from 'next/image'

type Props = {
    message: DocumentData
}

const Message = ({message} : Props) => {
    const isChatGpt = message?.user?.name === "ChatGPT"

  return (
    <div className={`py-5 text-white ${isChatGpt && "bg-[#434654]"} `}>
        
        <div className='flex space-x-5 px-10 max-w-2xl mx-auto'>
        <Image 
            className= 'h-8 w-8'
            src={message?.user?.avatar}
            width={40}
            height={40}
            alt="logo"/>
            
            <p className='pt-1 text-sm'>
                {message.text}
            </p>
        </div>
    </div>
  )
}

export default Message