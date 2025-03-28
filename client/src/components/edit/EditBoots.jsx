import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import bootService from "../../services/bootService";

export default function EditBoot() {
    const navigate = useNavigate()
    const { bootId } = useParams()
    const [boot, setBoot] = useState({})

    useEffect(() => {
        bootService.getOne(bootId)
            .then(setBoot)
    }, [bootId])

    const formAction = async (formData) => {
        const boodData = Object.fromEntries(formData)

        await bootService.edit(bootId, boodData)
        
        navigate(`/boots/${bootId}/details`)
    }

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
