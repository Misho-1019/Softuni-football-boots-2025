export default function Login() {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
                <p>Don't have an account? <a href="/register">Sign up</a></p>
            </div>
        </div>
    );
}
