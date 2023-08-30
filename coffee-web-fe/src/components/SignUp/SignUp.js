import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

import { useState } from 'react';
import { setCloseSignUp, setOpenSignIn } from '../../reducer/Auth/Auth';

import { useForm } from 'react-hook-form';

function SignUp() {
    const isOpenSignUp = useSelector((state) => state.authState.isOpenSignUp);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    // lấy thông tin user
    const password = watch('password');
    const rePassword = watch('rePassword');

    const onSubmitForm = (data) => {
        console.log(data);
        dispatch(setCloseSignUp());
        dispatch(setOpenSignIn());

        reset();
    };
    // xét status auth

    const handleOpenSignIn = (e) => {
        e.preventDefault();
        dispatch(setOpenSignIn());
        dispatch(setCloseSignUp());
        reset();
    };
    const handleCloseSignUp = () => {
        dispatch(setCloseSignUp());
        reset();
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
                    // e.preventDefault();
                }}
                className={`h-[650px] relative w-[485px] rounded-lg bg-white pt-[16px]`}
            >
                <button
                    onClick={handleCloseSignUp}
                    className="absolute top-5 right-8 px-1 py-1 bg-[#16182308] rounded-[50%]"
                >
                    <AiOutlineClose className="text-[30px]" />
                </button>
                <h2 className="text-center text-[32px] font-semibold my-4">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmitForm)}>
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
                                <span className="text-red-600">Vui lòng nhập nhập tối thiểu 6 ký tự</span>
                            )}
                            <input
                                type="password"
                                name="password"
                                className={`${
                                    errors.password? '!border-red-600' : ''
                                } block outline-none border-solid border-[1px] w-full px-2 py-2 mt-1 mb-4 border-[#1618231f] focus-within:border-colorWeb transition-all duration-500 caret-colorWeb`}
                                placeholder="Password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                })}
                            />
                            {errors.rePassword?.type === 'required' && (
                                <span className="text-red-600">Vui lòng nhập trường này</span>
                            )}
                            {errors.rePassword?.type === 'validate' && (
                                <span className="text-red-600">Nhập lại mật khẩu không khớp</span>
                            )}
                            {errors.rePassword?.type === 'minLength' && (
                                <span className="text-red-600">Vui lòng nhập tối thiểu 6 ký tự</span>
                            )}
                            <input
                                type="password"
                                name="rePassword"
                                className={`${
                                    errors.rePassword ? '!border-red-600' : ''
                                } block outline-none border-solid border-[1px] w-full px-2 py-2 mt-1 mb-4 border-[#1618231f] focus-within:border-colorWeb transition-all duration-500 caret-colorWeb`}
                                placeholder="Re-Password"
                                {...register('rePassword', {
                                    required: true,
                                    minLength: 6,
                                    validate: (value) => value === password || 'Mật khẩu không khớp',
                                })}
                            />

                            {errors.phoneNumber?.type === 'required' && (
                                <span className="text-red-600">Vui lòng nhập trường này</span>
                            )}
                            {errors.phoneNumber?.type === 'minLength' && (
                                <span className="text-red-600">Vui lòng nhập lại số điện thoại</span>
                            )}
                            <input
                                type="password"
                                name="phoneNumber"
                                className={`${
                                    errors.phoneNumber ? '!border-red-600' : ''
                                } block outline-none border-solid border-[1px] w-full px-2 py-2 mt-1 mb-4 border-[#1618231f] focus-within:border-colorWeb transition-all duration-500 caret-colorWeb`}
                                placeholder="PhoneNumber"
                                {...register('phoneNumber', {
                                    required: true,
                                    minLength: 9,
                                })}
                            />
                        </div>
                        <p className="text-center font-[16px] mt-4">
                            By continuing, you agree to Coffee’s Terms of Service and confirm that you have read
                            Coffee’s Privacy Policy.
                        </p>
                        <button
                            type="submit"
                            className="block w-full px-2 py-2 my-8 bg-white text-colorGreenBold border-solid border-[1px] border-colorGreenBold hover:text-white border-colorWeb hover:bg-colorWeb transition-all duration-500"
                        >
                            Sign Up
                        </button>
                        <div className="text-right">
                            <button
                                onClick={(e) => handleOpenSignIn(e)}
                                className="inline-block text-right pr-8 underline hover:text-colorWeb"
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
