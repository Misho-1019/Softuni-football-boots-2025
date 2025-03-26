export default function Register() {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
}
