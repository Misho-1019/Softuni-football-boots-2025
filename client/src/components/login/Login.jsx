import { Link, useNavigate } from "react-router";


export default function Login({
    onLogin,
}) {
    const navigate = useNavigate();

    const loginAction = (formData) => {
        const email = formData.get('email')

        onLogin(email)
        console.log(email);
        

        navigate('/boots')
    }
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form action={loginAction}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <Link href="/register">Sign up</Link></p>
            </div>
        </div>
    );
}
