import { useNavigate } from "react-router";
import { useCreateBoot } from "../../api/bootApi";

export default function CreateBoot() {
    const navigate = useNavigate();
    const { create: createBoot } = useCreateBoot()

    const submitAction = async (formData) => {
        const bootData = Object.fromEntries(formData)

        await createBoot(bootData)

        navigate('/boots')
    }
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Create Football Boot</h2>
                <form action={submitAction}>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                    <input type="text" name="brand" placeholder="Brand" required />
                    <input type="number" name="price" placeholder="Price" required />
                    <input type="text" name="color" placeholder="Color" required />
                    <input type="text" name="description" placeholder="Description" required />
                    <input type="text" name="stud" placeholder="Stud Type" required />
                    <input type="submit" className="btn" value="Create"/>
                </form>
            </div>
        </div>
    );
}
