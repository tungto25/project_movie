import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function Register({ setFormSign }) {
    return (
        <div className='flex flex-col text-center basis-2/3 p-3 sm:p-6 m-auto'>
            <h1 className="text-yellow-600 text-sm font-bold sm:text-4xl mb-3 sm:mb-6">Register</h1>
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-2 sm:mb-4">
                <FaEnvelope className="text-gray-400 mr-3 text-[9px] sm:text-base" />
                <input type="email" placeholder="Email" className="bg-transparent outline-none w-full text-[9px] sm:text-base" />
            </div>

            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                <FaLock className="text-gray-400 mr-3 text-[9px] sm:text-base" />
                <input type="password" placeholder="Password" className="bg-transparent outline-none w-full text-[9px] sm:text-base" />
            </div>
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                <FaLock className="text-gray-400 mr-3 text-[9px] sm:text-base" />
                <input type="password" placeholder="Confirm password" className="bg-transparent outline-none w-full text-[9px] sm:text-base" />
            </div>
            <button className="text-blue-500 text-[7px] sm:text-base" onClick={() => setFormSign(true)}>
                Login
            </button>

            <button className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-white py-2 px-12 rounded-full shadow-lg hover:opacity-90 transition text-[8px] sm:text-base">
                REGISTER
            </button>
        </div>
    );
}
