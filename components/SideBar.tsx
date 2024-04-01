'use client'
import React from 'react'
import NewChat from './NewChat'
import { signOut, useSession } from 'next-auth/react'
import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from '@/firebase'
import { collection, orderBy, query } from 'firebase/firestore'
import ChatRow from './ChatRow'

const SideBar = () => {
    const {data: session} = useSession(); 
    const [chats,loading,error] = useCollection(
        session && query(collection(db,"users",session?.user?.email!,'chats'),orderBy('createdAt','asc'))
    );
  return (
    <div className='flex flex-col p-2 h-screen'>
        <div className='flex-1'> 
        <div>
            {/* NewChat */}
            <NewChat />
            <div>
                {/* Model Selection */}
            </div>
            {/* Map through chat rows */}
            {chats?.docs.map((chat)=> <ChatRow key={chat.id} id={chat.id} />)}
        </div>
        
        </div>
         {session && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={session.user?.image!} alt="profile pic" 
            onClick={()=>signOut()}
            className='p-1 bg-[#22c79e]  h-16 w-16 rounded-full mb-2   hover:opacity-50 mx-auto'/>
         )}
    </div>
  )
}

export default SideBar