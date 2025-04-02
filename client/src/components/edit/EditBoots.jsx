import { Navigate, useNavigate, useParams } from "react-router";
import { useBoot, useEditBoot } from "../../api/bootApi";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

export default function EditBoot() {
    const navigate = useNavigate()
    const { userId } = useAuth()
    const { bootId } = useParams()
    const { edit } = useEditBoot()
    const { boot } = useBoot(bootId)

    const formAction = async (formData) => {
        try {
            const boodData = Object.fromEntries(formData)
            
            await edit(bootId, boodData)

            toast.success('Successfully edited!', {
                position: 'top-center',
                autoClose: 2000,
            })
            
            navigate(`/boots/${bootId}/details`)
        } catch (error) {
            toast.error(error.message, {
                position: 'top-center',
                autoClose: 2000
            })
        }
        
        
    }

    // const isOwner = userId === boot._ownerId

    // if (!isOwner) {
    //     return <Navigate to='/boots' />
    // }

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Edit Football Boot</h2>
                <form action={formAction}>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." defaultValue={boot.imageUrl}/>
                    <input type="text" name="brand" placeholder="Brand" defaultValue={boot.brand} required />
                    <input type="number" name="price" placeholder="Price" defaultValue={boot.price} required />
                    <input type="text" name="color" placeholder="Color" defaultValue={boot.color} required />
                    <input type="text" name="description" placeholder="Description" defaultValue={boot.description} required />
                    <input type="text" name="stud" placeholder="Stud Type" defaultValue={boot.stud} required />
                    <input type="submit" className="btn" value="Edit"/>
                </form>
            </div>
        </div>
    );
}
