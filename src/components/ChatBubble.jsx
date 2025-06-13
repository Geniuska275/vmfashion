

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <div className=" flex gap-3 fixed bottom-6 right-6 z-40">
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-yellow-600 text-white rounded-full p-4 shadow-lg hover:bg-rose-700 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${
            isMinimized ? "w-64 h-12" : "w-40 h-46"
          }`}
        >
          {/* Chat Header */}
          <div
            className="bg-yellow-600 text-white p-3 flex justify-between items-center cursor-pointer"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="font-medium">We're online!</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
              }}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <div className="p-4">
              <p className="text-gray-700">How may I help you today?</p>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
