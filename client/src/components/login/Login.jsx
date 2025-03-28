import { useActionState } from "react";
import { Link, useNavigate } from "react-router";


export default function Login({
    onLogin,
}) {
    const navigate = useNavigate();

    const loginHandler = (previousState, formData) => {
        const values = Object.fromEntries(formData)

        onLogin(values.email)      

        navigate('/boots')

        return values
    }

    const [values, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' })

    console.log(values);
    
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
