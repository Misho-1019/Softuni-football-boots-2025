import { Link } from "react-router";

export default function BootItem({
    _id,
    imageUrl,
    brand,
    price,
    color,
    stud
}) {
    return (
        <div className="boot-card">
            <img src={imageUrl} alt="Under Armour Magnetico" className="boot-image" />
            <div className="boot-info">
                <h3>{brand}</h3>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Color:</strong> {color}</p>
                <p><strong>Stud Type:</strong> {stud}</p>
                <Link to={`/boots/${_id}/details`} className="btn primary">View Details</Link>
            </div>
        </div>
    )
}