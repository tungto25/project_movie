import { useState } from 'react';
import Login from './Login';
import Register from './Register';

function Slider() {
    const [formSign, setFormSign] = useState(false);
    return (
        <div
            className="relative h-screen w-full overflow-hidden flex justify-center items-center"
            style={{
                backgroundImage: "url('/image/background.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            <div className="flex justify-center items-center h-screen w-full">
                <div className="relative flex justify-center items-center bg-white h-[40%] w-[95%] sm:h-[40%] sm:w-[95%] lg:w-[80%] lg:h-[85%] overflow-hidden">

                    <div className={`absolute h-screen w-full inset-0 z-10 transition-transform duration-1000 ease-in-out ${formSign ? 'translate-x-full' : 'translate-x-0'}`}>
                        <div className="text-white relative w-full h-full">
                            <img src="/image/inna.png" alt="" className="h-full w-full object-cover" />
                            <div className="absolute top-1/2 -translate-y-1/2 right-2/3 translate-x-1/4 text-center">
                                <h1 className="text-sm font-bold mb-3 sm:text-5xl">Welcome Back</h1>
                                <h2 className="text-[7px] font-bold sm:text-base">
                                    To Keep connected with us please<br /> login with your personal info
                                </h2>
                                <button onClick={() => setFormSign(true)} type='button' className='mt-6 border-2 px-3 py-1 text-[10px] rounded-full hover:bg-blue-500 sm:px-16 sm:py-3 sm:text-base'>
                                    SIGN IN
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row h-full w-full">
                        {formSign ? (
                            <Login setFormSign={setFormSign} />
                        ) : (
                            <Register setFormSign={setFormSign} />
                        )}

                        <div className='flex flex-col basis-1/3 h-full'>
                            <img src="/image/vang.png" alt="" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Slider;
