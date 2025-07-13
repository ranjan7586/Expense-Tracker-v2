import React from 'react'
import { useFormik } from 'formik'
import { User } from 'lucide-react'
import { toast } from 'react-toastify'
import Email from '../InputFields/Email'
import axiosAuth from '../Axios/axiosAuth'
import Password from '../InputFields/Password'
import { useNavigate } from 'react-router-dom'
import { loginSchema } from '../Validations/loginform'
import { useLoader } from '../Contexts/LoaderContext';
type Props = {}
const Login: React.FC<Props> = (props: Props) => {
    const navigate = useNavigate();
    const { setLoading } = useLoader();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                setLoading(true);
                const { data } = await axiosAuth.post(`/login`, values);
                if (data?.user) {
                    toast.success(data?.message);
                    data?.token && localStorage.setItem('accessToken', data?.token);
                    navigate('/');
                    return;
                }
            } catch (error: any) {
                console.log(error);
                toast.error(error?.response?.data?.error || 'Login failed');
            } finally {
                setLoading(false); // ✅ ensures loader is always stopped
            }

        }
    });



    return (
        <div className="login_container_main min-h-screen flex flex-col justify-center">
            <div className="login_inner_containe">
                <div className='flex flex-wrap'>
                    <div className='login_left_part flex-1 flex items-center justify-center flex-col p-4 border-r-2 border-gray-200'>
                        <div className='bg-white border-4 rounded-full p-4 max-w-max'>
                            <User size={80} />
                        </div>
                        <div className="login_form w-full text-center">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group mt-5">
                                    <Email chnageFunc={formik.handleChange} placeHolder='User Email' className='p-3 w-1/3 rounded-2xl bg-amber-50' />
                                    <p className="mt-3 text-teal-300 font-bold">{formik.errors.email}</p>
                                </div>
                                <div className="form-group mt-5">
                                    <Password chnageFunc={formik.handleChange} placeHolder='User Password' className='p-3 w-1/3 rounded-2xl bg-amber-50' />
                                    <p className='mt-3 text-teal-300 font-bold'>{formik.errors.password}</p>
                                </div>
                                <div className="flex w-1/3 m-auto justify-between mt-8 gap-4">
                                    <button type="submit" className="flex-1 border bg-green-500 uppercase rounded-3xl px-8 py-3 text-lg font-bold text-white cursor-pointer">
                                        Login
                                    </button>
                                    <p className="self-center text-white font-bold text-lg">or</p>
                                    <button type="submit" className="flex-1 border bg-green-500 uppercase rounded-3xl px-8 py-3 text-lg font-bold text-white">
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="login_right_part border-l-2 flex-1 p-4 px-8 border-gray-200">
                        <div className='h-full flex flex-col justify-between'>
                            <p className="heading text-5xl text-white"><span className='font-bold'>Welcome</span><br></br> Back</p>
                            <p className="description line-clamp-4 w-[70%] text-white mt-8 text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam quibusdam facilis
                                ducimus quisquam libero illo placeat consequuntur aliquid obcaecati quidem sint at nisi,
                                ducimus quisquam libero illo placeat consequuntur aliquid obcaecati quidem sint at nisi
                                labore, molestiae sunt, dignissimos optio rem.
                            </p>
                            <div className="mt-8">
                                <button type="button" className="border bg-green-500 uppercase rounded-3xl px-8 py-3 text-lg font-bold text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login