export default function BootDetails() {
    return (
        <div className="details-container">
            <div className="details-card">
                <div className="details-image">
                    <img src="https://via.placeholder.com/500x300" alt="Football Boot" />
                </div>
                <div className="details-info">
                    <h2>Nike Mercurial Vapor 14</h2>
                    <p className="boot-description">
                        The Nike Mercurial Vapor 14 is designed for speed and agility, featuring a lightweight Flyknit upper 
                        and firm ground studs for ultimate traction.
                    </p>
                    <div className="details-grid">
                        <div className="detail-item"><strong>Brand:</strong> Nike</div>
                        <div className="detail-item"><strong>Price:</strong> $199</div>
                        <div className="detail-item"><strong>Material:</strong> Flyknit</div>
                        <div className="detail-item"><strong>Color:</strong> Red & Black</div>
                        <div className="detail-item"><strong>Stud Type:</strong> Firm Ground (FG)</div>
                    </div>
                    <div className="details-actions">
                        <a href="/all-boots" className="btn secondary">Back</a>
                        <a href="/edit-boot" className="btn primary">Edit</a>
                        <a href="/edit-boot" className="btn primary">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
