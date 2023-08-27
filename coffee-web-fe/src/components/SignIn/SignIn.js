import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { setCloseSignIn, setOpenSignUp } from '../../reducer/Auth/Auth';
import { useForm } from 'react-hook-form';

function SignIn({ islogin, setIslogin, setIsSignUp }) {
    const isOpenSignIn = useSelector((state) => state.authState.isOpenSignIn);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmitForm = (data) => {
        console.log(data);
        dispatch(setCloseSignIn());
        reset();
    };

    const handleCloseSignIn = () => {
        dispatch(setCloseSignIn());
        reset();
    };
    const handleOpenSignUp = (e) => {
        e.preventDefault();
        dispatch(setCloseSignIn());
        dispatch(setOpenSignUp());
        reset();
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
                    // e.preventDefault();
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
                <form className="mt-8" onSubmit={handleSubmit(onSubmitForm)}>
                    <div className="px-8">
                        <div>
                            {errors.UserName?.type === 'required' && (
                                <span className="text-red-600">Vui lòng nhập trường này</span>
                            )}
                            <input
                                type="text"
                                name="UserName"
                                className={`${
                                    errors.UserName ? '!border-red-600' : ''
                                } block outline-none border-solid border-[1px] w-full px-2 py-2 mt-1 mb-4 border-[#1618231f] focus-within:border-colorWeb transition-all duration-500 caret-colorWeb`}
                                placeholder="User Name"
                                {...register('UserName', {
                                    required: true,
                                })}
                            />
                            {errors.password?.type === 'required' && (
                                <span className="text-red-600">Vui lòng nhập trường này</span>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <span className="text-red-600">Vui lòng nhập tối thiểu 6 ký tự</span>
                            )}
                            <input
                                type="password"
                                name="password"
                                className={`${
                                    errors.password ? '!border-red-600' : ''
                                } block outline-none border-solid border-[1px] w-full px-2 py-2 mt-1 mb-4 border-[#1618231f] focus-within:border-colorWeb transition-all duration-500 caret-colorWeb`}
                                placeholder="Password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                })}
                            />
                        </div>
                        <p className="text-center font-[16px] mt-8">
                            By continuing, you agree to Coffee’s Terms of Service and confirm that you have read
                            Coffee’s Privacy Policy.
                        </p>
                        <button className="block w-full px-2 py-2 my-8 bg-white  border-solid border-[1px] border-colorWeb hover:bg-colorWeb hover:text-white transition-all duration-500">
                            Login
                        </button>

                        <div className="text-right">
                            <button
                                onClick={(e) => handleOpenSignUp(e)}
                                className="text-right pr-8 hover:text-colorWeb transition-all underline duration-500"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
