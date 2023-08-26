import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

import { useContext, useState } from 'react';
import { setCloseSignUp, setOpenSignIn } from '../../reducer/Auth/Auth';

// const handleSignUp = async () => {
//     try {
//         const response = await axios.post('', {data: signUpInfo});
//         if (response.success) {

//         }
//     }catch (error) {

//     }
// }

function SignUp() {
    const isOpenSignUp = useSelector((state) => state.authState.isOpenSignUp);
    const dispatch = useDispatch();

    // const { islogin, setIslogin, isSignUp, setIsSignUp } = useContext(valueLoginSignUp);
    // const [signUpInfo, setSignUpInfo] = useState({});

    // const handleUserName = (name) => {
    //     setSignUpInfo({ ...signUpInfo, name });
    // };

    // const handlePassword = (Password) => {
    //     setSignUpInfo({ ...signUpInfo, Password });
    // };

    // const handleRePassword = (rePassWord) => {
    //     setSignUpInfo({ ...signUpInfo, rePassWord });
    // };

    // const handlePhoneNumber = (phone) => {
    //     setSignUpInfo({ ...signUpInfo, phone });
    // };

    const handleOpenSignIn = (e) => {
        e.preventDefault();
        dispatch(setOpenSignIn());
        dispatch(setCloseSignUp());
    };
    const handleCloseSignUp = () => {
        dispatch(setCloseSignUp());
    };
    return (
        <div
            onClick={handleCloseSignUp}
            className={`${
                isOpenSignUp ? 'flex' : 'hidden'
            } fixed z-[1100] top-0 left-0 right-0 bottom-0 bg-[#00000080]  items-center justify-center`}
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                }}
                className="relative w-[485px] h-[580px] rounded-lg bg-white pt-[16px]"
            >
                <button
                    onClick={handleCloseSignUp}
                    className="absolute top-5 right-8 px-1 py-1 bg-[#16182308] rounded-[50%]"
                >
                    <AiOutlineClose className="text-[30px]" />
                </button>
                <h2 className="text-center text-[32px] font-semibold my-4">Sign Up</h2>
                <form>
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
                            <input
                                // onChange={(e) => handleRePassword(e.target.value)}
                                className="block outline-none border-solid border-[1px] w-full px-2 py-2 mt-1 mb-4 border-[#1618231f] focus-within:border-colorWeb transition-all duration-500 caret-colorWeb"
                                placeholder="Re-Password"
                            />

                            <input
                                // onChange={(e) => handlePhoneNumber(e.target.value)}
                                className="block outline-none border-solid border-[1px] w-full px-2 py-2 mt-1 mb-4 border-[#1618231f] focus-within:border-colorWeb transition-all duration-500 caret-colorWeb"
                                placeholder="Phone Numbe"
                            />
                        </div>
                        <p className="text-center font-[16px] mt-4">
                            By continuing, you agree to Coffee’s Terms of Service and confirm that you have read
                            Coffee’s Privacy Policy.
                        </p>
                        <button className="block w-full px-2 py-2 my-8 bg-white text-colorGreenBold border-solid border-[1px] border-colorGreenBold hover:text-white border-colorWeb hover:bg-colorWeb transition-all duration-500">
                            Sign Up
                        </button>
                        <button
                            onClick={(e) => handleOpenSignIn(e)}
                            className="block w-full text-right pr-8 underline hover:text-colorGreenBold"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
