export default function EditBoot() {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Edit Football Boot</h2>
                <form>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                    <input type="text" name="brand" placeholder="Brand" required />
                    <input type="number" name="price" placeholder="Price" required />
                    <input type="text" name="color" placeholder="Color" required />
                    <input type="text" name="description" placeholder="Description" required />
                    <input type="text" name="stud" placeholder="Stud Type" required />
                    <input type="submit" className="btn" value="Edit"/>
                </form>
            </div>
        </div>
    );
}
