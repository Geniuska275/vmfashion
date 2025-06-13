import React from 'react'
import { PiChats } from 'react-icons/pi'

function Chat() {
  return (
                 <div className="fixed right-5 bottom-4 flex justify-center items-center rounded-full w-[60px] h-[60px] bg-yellow-600"> 
                  <PiChats className="text-white text-3xl" />
                 </div>  

  )
}

export default Chat