
import { useState } from "react"
import { X } from "lucide-react"


export default function LoginModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otpEmail, setOtpEmail] = useState("")

  if (!isOpen) return null

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    console.log("Login with:", { email, password })
    // Implement login logic here
  }

  const handleOtpLogin = (e) => {
    e.preventDefault()
    console.log("Login with OTP:", { otpEmail })
    // Implement OTP login logic here
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <h2 className="text-2xl font-bold tracking-tight">VM FASHION</h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-3 font-medium text-center ${
              activeTab === "login" ? "text-gray-900 border-b-2 border-yellow-600" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("login")}
          >
            LOGIN
          </button>
          <button
            className={`flex-1 py-3 font-medium text-center ${
              activeTab === "signup" ? "text-gray-900 border-b-2 border-yellow-600" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            SIGN UP
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "login" ? (
            <>
              {/* OTP Login */}
              <form onSubmit={handleOtpLogin} className="mb-6">
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="enter email address"
                    value={otpEmail}
                    onChange={(e) => setOtpEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors"
                >
                  LOGIN WITH OTP
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center justify-center mb-6">
                <span className="text-gray-500">or</span>
              </div>

              {/* Password Login */}
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <label className="block mb-1 font-medium">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-1 font-medium">
                    Password <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-3 rounded font-medium hover:bg-yellow-700 transition-colors"
                >
                  LOGIN
                </button>
              </form>

              {/* Forgot Password */}
              <div className="text-center mt-4">
                <a href="#" className="text-gray-700 hover:text-rose-600 transition-colors">
                  Forgot Password?
                </a>
              </div>
            </>
          ) : (
            <div className="py-8 text-center text-gray-500">
              Sign up form would go here. This tab is not currently active in the screenshot.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
