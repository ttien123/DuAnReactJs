import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { setCloseSignIn, setOpenSignUp } from '../../reducer/Auth/Auth';

function SignIn({ islogin, setIslogin, setIsSignUp }) {
    const isOpenSignIn = useSelector((state) => state.authState.isOpenSignIn);
    const dispatch = useDispatch();

    // const [Login, setLogin] = useState({});

    const handleCloseSignIn = () => {
        dispatch(setCloseSignIn());
    };
    const handleOpenSignUp = (e) => {
        e.preventDefault();
        dispatch(setCloseSignIn());
        dispatch(setOpenSignUp());
    };

    // const handleUserName = (userName) => {
    //     setLogin({ ...Login, userName });
    // };
    // const handlePassword = (password) => {
    //     setLogin({ ...Login, password });
    // };
    return (
        <div
            onClick={handleCloseSignIn}
            className={`${
                isOpenSignIn ? 'flex' : 'hidden'
            } fixed z-[1100] top-0 left-0 right-0 bottom-0 bg-[#00000080] items-center justify-center`}
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
                className=" w-[485px] h-[580px] rounded-lg bg-white pt-[48px] relative"
            >
                <button
                    onClick={handleCloseSignIn}
                    className="absolute top-5 right-8 px-1 py-1 bg-[#16182308] rounded-[50%]"
                >
                    <AiOutlineClose className="text-[30px]" />
                </button>
                <h2 className="text-center text-[32px] font-semibold my-4 text-colorWeb">Sign In</h2>
                <form className="mt-8">
                    <div className="px-8">
                        <div>
                            <input
                                // onChange={(e) => handleUserName(e.target.value)}
                                className="block outline-none border-solid border-[1px] w-full px-2 py-2 mt-1 mb-4 border-[#1618231f] focus-within:border-colorWeb transition-all duration-500 caret-colorWeb"
                                placeholder="User Name"
                            />
                            <input
                                // onChange={(e) => handlePassword(e.target.value)}
                                className="block outline-none border-solid border-[1px] w-full px-2 py-2 mt-1 mb-4 border-[#1618231f] focus-within:border-colorWeb transition-all duration-500 caret-colorWeb"
                                placeholder="Password"
                            />
                        </div>
                        <p className="text-center font-[16px] mt-8">
                            By continuing, you agree to Coffee’s Terms of Service and confirm that you have read
                            Coffee’s Privacy Policy.
                        </p>
                        <button className="block w-full px-2 py-2 my-8 bg-white  border-solid border-[1px] border-colorWeb hover:bg-colorWeb hover:text-white transition-all duration-500">
                            Login
                        </button>

                        <button
                            onClick={(e) => handleOpenSignUp(e)}
                            className="block w-full text-right pr-8 hover:text-colorWeb transition-all underline duration-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
