export default function EditBoot() {
    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Edit Football Boot</h2>
                <form>
                    <input type="text" placeholder="Boot Name" required />
                    <input type="text" placeholder="Brand" required />
                    <input type="number" placeholder="Price" required />
                    <input type="text" placeholder="Material" required />
                    <input type="text" placeholder="Color" required />
                    <input type="text" placeholder="Stud Type" required />
                    <button type="submit">Edit</button>
                </form>
            </div>
        </div>
    );
}
