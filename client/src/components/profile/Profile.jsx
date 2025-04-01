import { useState } from "react"
import useAuth from "../../hooks/useAuth"

export default function Profile() {
    const { email, _id, username } = useAuth()
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-card">
                    <h2 className="title">Profile</h2>
                    <div className="profile-info">
                        <div className="input-group">
                            <label className="label">Username</label>
                            <input type="email" className="input" defaultValue={username} />
                        </div>
                        <div className="input-group">
                            <label className="label">Email</label>
                            <input type="email" className="input" defaultValue={email} />
                        </div>
                        <div className="password-group">
                            <label className="password-label">User Id</label>
                            <div className="show-password">
                                <input type={showPassword ? 'text' : 'password'} className="input" defaultValue={_id} />
                                <button onClick={() => setShowPassword(!showPassword)}>👁️</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}