import { useForm } from 'react-hook-form';

import { useQueryClient } from 'react-query';
import LoadingComment from '../LoadingComment/LoadingComment';
const FormComment = ({ postCommentMutation, isLoadingCmt, setIsLoadingCmt }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const QueryClient = useQueryClient();

    const onSubmitForm = (data) => {
        postCommentMutation.mutate(data, {
            onSuccess: () => {
                QueryClient.invalidateQueries({ queryKey: ['comments'] });
                reset();
            },
        });
    };
    return (
        <form className="mt-8 relative" onSubmit={handleSubmit(onSubmitForm)}>
            {isLoadingCmt && <LoadingComment />}
            {/* <LoadingComment /> */}
            <div className="flex items-center justify-between mb-4 flex-col md:flex-row">
                <div className="xl:w-[500px] w-full md:w-[320px] lg:w-[420px]">
                    {errors.name?.type === 'required' && (
                        <span className="text-red-600 mt-4 block">Please enter this field</span>
                    )}
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={`${
                            errors.name ? '!border-red-600 !mt-1' : ''
                        } block w-full px-4 py-2 outline-none rounded-md border-[1px] focus:border-colorWeb transition-all duration-500`}
                        {...register('name', {
                            required: true,
                        })}
                    />
                </div>
                <div className="xl:w-[500px] w-full md:w-[320px] lg:w-[420px]">
                    {errors.email?.type === 'required' && (
                        <span className="text-red-600 mt-4 block">Please enter this field</span>
                    )}
                    {errors.email?.type === 'pattern' && (
                        <span className="text-red-600 mt-4 block">Please enter the correct email address</span>
                    )}
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className={`${
                            errors.email ? '!border-red-600 !mt-1' : ''
                        } block w-full mt-4 md:mt-0 px-4 py-2 outline-none rounded-md border-[1px] focus:border-colorWeb transition-all duration-500`}
                        {...register('email', {
                            required: true,
                            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                        })}
                    />
                </div>
            </div>
            <h3 className="mb-4">Your Rating</h3>
            {errors.description?.type === 'required' && (
                <span className="text-red-600 mt-4 block">Please enter this field</span>
            )}
            <textarea
                placeholder="Your Review"
                className={`${
                    errors.description ? '!border-red-600 !mt-1' : ''
                } p-4 resize-none outline-none block w-full h-[135px] border-[1px] border-[#ced4da] focus:border-colorWeb transition-all duration-500`}
                rows={5}
                name="description"
                {...register('description', {
                    required: true,
                })}
            ></textarea>
            <div className="md:text-right">
                <button className="mt-6 w-full md:w-auto py-2 px-4 border-[1px] border-colorWeb rounded-lg text-[16px] hover:bg-colorWeb hover:text-white transition-all duration-500">
                    Add Review
                </button>
            </div>
        </form>
    );
};

export default FormComment;
