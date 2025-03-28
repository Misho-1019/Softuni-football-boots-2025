import { useActionState } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";


export default function Login({
    onLogin,
}) {
    const navigate = useNavigate();
    const { login } = useLogin()

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData)

        const authData = await login(values.email, values.password)

        onLogin(authData)      

        navigate('/boots')

        return values
    }

    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' })

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form action={loginAction}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit" disabled={isPending} >Login</button>
                </form>
                <p>Don't have an account? <Link href="/register">Sign up</Link></p>
            </div>
        </div>
    );
}
