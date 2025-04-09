import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../../context/userContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email('Invalid email format!'),
    password: yup.string().min(6, 'Password must be at least 6 characters!'),
})

export default function Login() {
    const navigate = useNavigate();
    const { login } = useLogin()
    const { userLoginHandler } = useContext(UserContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    })

    // const loginHandler = async (_, formData) => {
    //     const values = Object.fromEntries(formData)

    //     try {
    //         const authData = await login(values.email, values.password)
    //         userLoginHandler(authData) 
            
    //         toast.success('Successful login!', { 
    //             position: 'top-center',
    //             autoClose: 2000 
    //         })
            
    //         navigate('/boots')
    //     } catch (error) {
    //         toast.error(error.message, {
    //             position: 'top-center',
    //             autoClose: 2000,
    //         })  
    //     }
    // }

    const loginHandler = async (data) => {
        try {
            const authData = await login(data.email, data.password)
            userLoginHandler(authData)
            toast.success('Successful login!', {
                position: 'top-center',
                autoClose: 2000,
            })

            navigate('/boots')
        } catch (error) {
            toast.error(error.message || 'Login failed!', {
                position: 'top-center',
                autoClose: 2000,
            })
        }
    }

    const onError = (errors) => {
        const firstError = Object.values(errors)[0]

        if (firstError?.message) {
            toast.error(firstError.message, {
                position: "top-center",
                autoClose: 2000,
            })
        }
    }
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(loginHandler, onError)} noValidate>
                    <input type="email" name="email" {...register('email')} placeholder="Email" />
                    <input type="password" name="password" {...register('password')} placeholder="Password" />
                    <button type="submit" disabled={isSubmitting} >Login</button>
                </form>
                <p>Don't have an account? <Link href="/register">Sign up</Link></p>
            </div>
        </div>
    );
}
