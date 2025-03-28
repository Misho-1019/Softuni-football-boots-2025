import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import bootService from "../../services/bootService";

export default function BootDetails() {
    const [boot, setBoot] = useState({})
    const { bootId } = useParams();

    useEffect(() => {
        bootService.getOne(bootId)
            .then(setBoot)
    }, [bootId])
    
    return (
        <div className="details-container">
            <div className="details-card">
                <div className="details-image">
                    <img src={boot.imageUrl} alt="Football Boot" />
                </div>
                <div className="details-info">
                    <h2>{boot.brand}</h2>
                    <p className="boot-description">
                        {boot.description}
                    </p>
                    <div className="details-grid">
                        <div className="detail-item"><strong>Color:</strong> {boot.color}</div>
                        <div className="detail-item"><strong>Stud Type:</strong> {boot.stud}</div>
                        <div className="detail-item"><strong>Price:</strong> ${boot.price}</div>
                    </div>
                    <div className="details-actions">
                        <Link to="/boots" className="btn secondary">Back</Link>
                        <a href="/edit-boot" className="btn primary">Edit</a>
                        <a href="/edit-boot" className="btn primary">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
