import { useNavigate } from "react-router";
import { useCreateBoot } from "../../api/bootApi";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    imageUrl: yup.string().url('Must be valid URL').required('Image URL is required!'),
    brand: yup.string().required('Brand is required!'),
    price: yup.number().typeError('Price must be a number!').positive('Price must be greater than zero!').required('Price is required!'),
    color: yup.string().required('Color is required!'),
    description: yup.string().min(10, 'Description must be at least 10 characters!').required('Description is required!'),
    stud: yup.string().oneOf(['Artificial Grass', 'Firm Ground'], 'Invalid ground type!').required('Ground Type is required!')
})

export default function CreateBoot() {
    const navigate = useNavigate();
    const { create: createBoot } = useCreateBoot()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: yupResolver(schema),
    })

    const submitAction = async (formData) => {
        try {
            const bootData = {...formData}

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
                <form onSubmit={handleSubmit(submitAction)} noValidate>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." {...register('imageUrl')} />
                    {errors.imageUrl && <p className="error">{errors.imageUrl.message}</p>}

                    <input type="text" name="brand" placeholder="Brand" {...register('brand')} />
                    {errors.brand && <p className="error">{errors.brand.message}</p>}

                    <input type="number" name="price" placeholder="Price" {...register('price')} />
                    {errors.price && <p className="error">{errors.price.message}</p>}

                    <input type="text" name="color" placeholder="Color" {...register('color')} />
                    {errors.color && <p className="error">{errors.color.message}</p>}

                    <input type="text" name="description" placeholder="Description" {...register('description')} />
                    {errors.description && <p className="error">{errors.description.message}</p>}


                    <select name="stud" className="input" {...register('stud')}>
                        <option value="">Select Ground Type</option>
                        <option value="Artificial Grass">Artificial Grass</option>
                        <option value="Firm Ground">Firm Ground</option>
                    </select>
                    {errors.stud && <p className="error">{errors.stud.message}</p>}


                    <input type="submit" disabled={isSubmitting} className="btn" value="Create" />
                </form>
            </div>
        </div>
    );

}
