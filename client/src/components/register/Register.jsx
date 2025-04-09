import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/authApi";
import { useUserContext } from "../../context/userContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().required('Username is required!'),
    email: yup.string().email('Invalid email format!'),
    password: yup.string().min(6, 'Password must be at least 6 characters!'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match!'),
})

export default function Register() {
    const navigate = useNavigate();
    const { register: registerUser } = useRegister()
    const { userLoginHandler } = useUserContext()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    })

    // const registerHandler = async (formData) => {
    //     const { username, email, password } = Object.fromEntries(formData)

    //     const confirmPassword = formData.get('confirm-password')

    //     if (password !== confirmPassword) {
    //         console.log('Password mismatch!');
            
    //         return;
    //     }

    //     try {
    //         const authData = await registerUser(username, email, password)
    //         userLoginHandler(authData)

    //         toast.success('Successful register!', {
    //             position: 'top-center',
    //             autoClose: 2000,
    //         })

    //         navigate('/boots')
    //     } catch (error) {
    //         toast.error(error.message, {
    //             position: 'top-center',
    //             autoClose: 2000,
    //         })
    //     }
    // }

    const registerHandler = async ({username, email, password}) => {
        try {
            const authData = await registerUser(username, email, password)
            userLoginHandler(authData)
            
            toast.success('Successful registration!', {
                position: 'top-center',
                autoClose: 2000,
            })

            navigate('/boots')
        } catch (error) {
            toast.error(error.message || 'Registration failed!', {
                position: 'top-center',
                autoClose: 2000,
            })
        }
    }

    const onError = (formErrors) => {
        const firstError = Object.values(formErrors)[0]

        if (firstError?.message) {
            toast.error(firstError.message, {
                position: 'top-center',
                autoClose: 2000,
            })
        }
    }

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit(registerHandler, onError)} noValidate>
                    <input type='text' name="username" {...register('username')} placeholder="Username" />
                    <input type="email" name="email" {...register('email')} placeholder="Email" />
                    <input type="password" name="password" {...register('password')} placeholder="Password" />
                    <input type="password" name="confirm-password" {...register('confirmPassword')} placeholder="Confirm Password" />
                    <button disabled={isSubmitting} type="submit">Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}
