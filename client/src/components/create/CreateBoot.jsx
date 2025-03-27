export default function CreateBoot() {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Create Football Boot</h2>
                <form>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
                    <input type="text" name="brand" placeholder="Brand" required />
                    <input type="number" name="price" placeholder="Price" required />
                    <input type="text" name="material" placeholder="Material" required />
                    <input type="text" name="color" placeholder="Color" required />
                    <input type="text" name="stud" placeholder="Stud Type" required />
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}
