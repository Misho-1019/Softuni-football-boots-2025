import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useParams } from "react-router";
import { useComments, useCreateComment } from "../../api/commentApi";

export default function CommentSection() {
    const { username } = useContext(UserContext)
    const { bootId } = useParams()
    const { comments, setComments } = useComments(bootId)
    const { create } = useCreateComment()  

    console.log(comments);
    

    const commentCreateHandler = async (comment) => {
       const newComment = await create(bootId, comment)

       setComments(state => [...state, newComment])
    }

    const commentAction = async (formData) => {
        const comment = formData.get('comment')

        commentCreateHandler(comment)
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
                    {comments.length > 0
                        ? comments.map(({ _id, _ownerId, comment }) => (
                            <div key={_id} className="comment-item">
                                <p>{_ownerId}: {comment}</p>
                            </div>
                        )) : <p>No Reviews</p>
                    }
                </div>
            </div>
        </div>
    );
}
