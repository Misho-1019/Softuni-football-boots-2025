import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/authApi";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister()
    const { userLoginHandler } = useContext(UserContext)

    const registerHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData)

        const confirmPassword = formData.get('confirm-password')

        if (password !== confirmPassword) {
            console.log('Password mismatch!');
            
            return;
        }

        const authData = await register(email, password)

        userLoginHandler(authData)

        navigate('/boots')
    }
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                <form action={registerHandler}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="password" name="confirm-password" placeholder="Confirm Password" required />
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
}
