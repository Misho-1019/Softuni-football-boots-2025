import useAuth from "../../hooks/useAuth"

export default function Profile() {
    const { email, accessToken, _id, username } = useAuth()

    console.log(email, accessToken, _id, username);
    
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-card">
                    <h2 className="title">Profile</h2>
                    <div className="input-group">
                        <label className="label">Email</label>
                        <input type="email" className="input" />
                    </div>
                    <div className="input-group">
                        <label className="label">Password</label>
                        <input type="password" className="input" />
                    </div>
                </div>
            </div>
        </div>
    )
}