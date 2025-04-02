import { useNavigate } from "react-router";
import { useCreateBoot } from "../../api/bootApi";
import { toast } from "react-toastify";

export default function CreateBoot() {
    const navigate = useNavigate();
    const { create: createBoot } = useCreateBoot()

    const submitAction = async (formData) => {
        try {
            const bootData = Object.fromEntries(formData)
            
            await createBoot(bootData)

            toast.success('Successfully created!', {
                position: 'top-center',
                autoClose: 2000,
            })
        } catch (error) {
            toast.error(error.message, {
                position: 'top-center',
                autoClose: 2000,
            })
        }

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
