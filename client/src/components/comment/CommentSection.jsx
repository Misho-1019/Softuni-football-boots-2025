import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useParams } from "react-router";
import commentService from "../../services/commentService";

export default function CommentSection() {
    const { username } = useContext(UserContext)
    const { bootId } = useParams()

    const commentAction = async (formData) => {
        const comment = formData.get('comment')

        const createComment = await commentService.create(username, bootId, comment)
        
        console.log(createComment);
        
    }
    return (
        <div className="comment-container">
            <div className="comment-box">
                <h2 className="comment-heading">Reviews</h2>
                <form action={commentAction}>
                    <textarea
                        className="comment-input"
                        name="comment"
                        placeholder="Write your review..."
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
