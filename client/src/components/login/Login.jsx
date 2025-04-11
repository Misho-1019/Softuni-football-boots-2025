import { useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../../context/userContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email('Invalid email format!').required('Email is required!'),
    password: yup.string().min(6, 'Password must be at least 6 characters!'),
})

export default function Login() {
    const navigate = useNavigate();
    const { login } = useLogin()
    const { userLoginHandler } = useContext(UserContext)
    const abortControllerRef = useRef(null)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    })

    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
                console.log('Login request aborted on unmount!');
            }
        }
    }, [])

    const loginHandler = async (data) => {

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        const controller = new AbortController();
        abortControllerRef.current = controller;

        try {
            const authData = await login(data.email, data.password, controller.signal)
            userLoginHandler(authData)
            toast.success('Successful login!', {
                position: 'top-center',
                autoClose: 2000,
            })

            navigate('/boots')
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Login request was aborted!');
                return;
            }

            toast.error(error.message || 'Login failed!', {
                position: 'top-center',
                autoClose: 2000,
            })
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(loginHandler)} noValidate>
                    <input type="email" name="email" {...register('email')} placeholder="Email" />
                    {errors.email && <p className='error'>{errors.email.message}</p>}
                    
                    <input type="password" name="password" {...register('password')} placeholder="Password" />
                    {errors.password && <p className='error'>{errors.password.message}</p>}

                    <button type="submit" disabled={isSubmitting} >Login</button>
                </form>
                <p>Don't have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </div>
    );
}
