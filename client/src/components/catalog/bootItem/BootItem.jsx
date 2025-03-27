export default function BootItem({
    _id,
    imageUrl,
    brand,
    price,
    material,
    color,
    stud
}) {
    return (
        <div className="boot-card">
            <img src={imageUrl} alt="Under Armour Magnetico" className="boot-image" />
            <div className="boot-info">
                <h3>{brand} {material}</h3>
                <p><strong>Price:</strong> ${price}</p>
                <p><strong>Color:</strong> {color}</p>
                <p><strong>Stud Type:</strong> {stud}</p>
                <a href="#" className="btn primary">View Details</a>
            </div>
        </div>
    )
}