'use client'
import { db } from '@/firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react'
import toast, { Toast } from 'react-hot-toast';


type  Props = {
    chatId : string;
}


const ChatInput = ({chatId} :Props) => {
    const {data:session} = useSession()
    const [prompt, setPrompt] = useState("")
    //use SWR to get the model
    const model = 'davinci-002'

    const handleSendMessage = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!prompt)return
        const input = prompt.trim();
        setPrompt("");
        const message: Message = {
            text: input,
            createdAt : serverTimestamp(),
            user: {
                _id : session?.user?.email!,
                name: session?.user?.name!,
                avatar : session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name!}`
            }
        }

        await addDoc(
            collection(db,"users",session?.user?.email!,'chats', chatId,'messages'),
            message)
        
        const notification= toast.loading('ChatGpt is thinking...')

        await fetch('/api/askQuestion',{
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                prompt:input,
                chatId,
                model,
                session
            })
            

        }).then(()=> {
            // toast notification.. success
            toast.success('ChatGpt has responded!',{
                id:notification,
            })
        })
        
        //Toaster notification


    }
  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm '>
        <form onSubmit={handleSendMessage} className='p-5 space-x-5 flex' action="">
            <input 
            className='bg-transparent flex-1 focus:outline-none disabled:text-gray-300 disabled:cursor-not-allowed'
            disabled={!session}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            type="text" placeholder='Type your message here...' />
            <button 
            disabled={!prompt || !session}
            className='bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed'
            type='submit'>
                <PaperAirplaneIcon className='h-5 w-5 -rotate-45' />
            </button>

            <div>
                {/* Model Selection */}
            </div>
        </form>
    </div>
  )
}

export default ChatInput