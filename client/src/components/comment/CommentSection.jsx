export default function CommentSection() {
    return (
        <div className="comment-container">
            <div className="comment-box">
                <h2 className="comment-heading">Reviews</h2>
                <form>
                    <textarea
                        className="comment-input"
                        placeholder="Write your comment..."
                        rows="4"
                    />
                    <button type="submit" className="btn primary">
                        Post Review
                    </button>
                </form>

                <div className="comment-list">
                    <div className="comment-item">
                        <p>This is a sample comment.</p>
                    </div>
                    <div className="comment-item">
                        <p>Another comment goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
