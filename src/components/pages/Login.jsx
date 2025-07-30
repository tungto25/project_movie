import { FaFacebookF, FaGooglePlusG, FaTwitter, FaEnvelope, FaLock } from 'react-icons/fa';

export default function Login({ setFormSign }) {
    return (
        <div className='flex flex-col text-center basis-2/3 p-3 sm:p-6 m-auto'>
            <h1 className="text-yellow-600 text-sm font-bold sm:text-4xl mb-3 sm:mb-6">Sign in use</h1>

            <div className="flex justify-center gap-4 mb-3 sm:mb-6">
                <div className="bg-blue-600 text-white w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
                    <FaFacebookF />
                </div>
                <div className="bg-red-600 text-white w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
                    <FaGooglePlusG />
                </div>
                <div className="bg-sky-400 text-white w-6 h-6 sm:w-10 sm:h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition">
                    <FaTwitter />
                </div>
            </div>

            <p className="text-gray-500 text-[7px] sm:text-base mb-3 sm:mb-6">or use your email account:</p>

            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-2 sm:mb-4">
                <FaEnvelope className="text-gray-400 mr-3 text-[9px] sm:text-base" />
                <input type="email" placeholder="Email" className="bg-transparent outline-none w-full text-[9px] sm:text-base" />
            </div>

            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                <FaLock className="text-gray-400 mr-3 text-[9px] sm:text-base" />
                <input type="password" placeholder="Password" className="bg-transparent outline-none w-full text-[9px] sm:text-base" />
            </div>

            <p className="text-[7px] sm:text-base text-gray-400 mb-3 sm:mb-6 border-b border-gray-300 w-fit mx-auto">Forget your password?</p>

            <div className="flex items-center gap-2 m-auto mb-2 sm:mb-3">
                <span className="text-[7px] sm:text-base text-gray-400 border-b border-gray-300">Don't have account?</span>
                <button className="text-blue-500 text-[7px] sm:text-base" onClick={() => setFormSign(false)}>Register</button>
            </div>

            <button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white py-2 px-12 rounded-full shadow-lg hover:opacity-90 transition text-[8px] sm:text-base">
                SIGN IN
            </button>
            
        </div>
        
    );
}

