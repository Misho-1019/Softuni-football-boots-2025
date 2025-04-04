import { Link, useNavigate, useParams } from "react-router";
import { useBoot, useDeleteBoot } from "../../api/bootApi";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

export default function BootDetails() {
    const navigate = useNavigate()
    const { bootId } = useParams();
    const { boot } = useBoot(bootId)
    const { deleteBoot } = useDeleteBoot()
    const { _id: UserId } = useAuth()


    const bootDeleteClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete this ${boot.brand}?`)

        if (!hasConfirmed) {
            return;
        }

        try {
            await deleteBoot(bootId)

            toast.success('Successfully deleted!', {
                position: 'top-center',
                autoClose: 2000,
            })
            
            navigate('/boots')
        } catch (error) {
            toast.error(error.message, {
                position: 'top-center',
                autoClose: 2000,
            })
        }


    }

    const isOwner = UserId === boot._ownerId

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

                        {isOwner && (
                            <div className="btns">
                                <Link to={`/boots/${boot._id}/edit`} className="btn primary">Edit</Link>
                                <button onClick={bootDeleteClickHandler} className="btn primary">Delete</button>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
