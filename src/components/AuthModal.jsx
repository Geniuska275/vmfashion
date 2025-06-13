



import { useState } from "react"
import { X } from "lucide-react"



export default function AuthModal({ isOpen, onClose, initialTab = "login" }) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [email, setEmail] = useState("")
  const [otpEmail, setOtpEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


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

  if (!isOpen) return null

  const handleOtpSignup = (e) => {
    e.preventDefault()
    console.log("Sign up with OTP:", { otpEmail })
    // Implement OTP signup logic here
  }

  const handleSignup = (e) => {
    e.preventDefault()
    console.log("Sign up with details:", { email, telephone, firstName, lastName, password, confirmPassword })
    // Implement signup logic here
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
            <div className="py-8 text-center text-gray-500">
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
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
            </div>
          ) : (
            <>
              {/* OTP Signup */}
              <form onSubmit={handleOtpSignup} className="mb-6">
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
                  SIGN UP WITH OTP
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center justify-center mb-6">
                <span className="text-gray-500">or</span>
              </div>

              {/* Create Account Form */}
              <div className="mb-4">
                <h3 className="text-lg font-medium text-center mb-4">Create New Account</h3>
              </div>

              <form onSubmit={handleSignup}>
                {/* Email Address */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                {/* Telephone */}
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium">Telephone .</label>
                  <input
                    type="tel"
                    placeholder="Telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      placeholder="first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      placeholder="last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block mb-1 text-sm font-medium">Choose Password</label>
                    <input
                      type="password"
                      placeholder="choose password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-3 rounded font-medium hover:bg-yellow-700 transition-colors"
                >
                  CREATE ACCOUNT
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
