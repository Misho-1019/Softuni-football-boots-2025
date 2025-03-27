import { useActionState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login({
    onLogin,
}) {
    const navigate = useNavigate()

    const loginHandler = (_, formData) => {
        const values = Object.fromEntries(formData)

        onLogin(values.email)

        navigate('/boots')
    }

    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' })

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form action={loginAction}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" disabled={isPending}>Login</button>
                </form>
                <p>Don't have an account? <Link href="/register">Sign up</Link></p>
            </div>
        </div>
    );
}
