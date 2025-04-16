import { useOptimistic } from "react";
import { Link, useParams } from "react-router";
import { useComments, useCreateComment } from "../../api/commentApi";
import useAuth from "../../hooks/useAuth";
import { v4 as uuid } from "uuid";

export default function CommentSection() {
    const { username, userId } = useAuth()
    const { bootId } = useParams()
    const { comments, addComment } = useComments(bootId)
    const { create } = useCreateComment()
    const [optimisticComments, setOptimisticComments] = useOptimistic(comments)


    const commentCreateHandler = async (formData) => {
        const comment = formData.get('comment')

        const newOptimisticComment = {
            _id: uuid(),
            _ownerId: userId,
            bootId,
            comment,
            pending: true,
            author: {
                username,
            }
        }

        setOptimisticComments((optimisticState) => [...optimisticState, newOptimisticComment])

        const commentResult = await create(bootId, comment)

        addComment({...commentResult, author: { username }})
    }

    return (
        <div className="comment-container">
            <div className="comment-box">
                <h2 className="comment-heading">Reviews</h2>
                { userId ? (<form action={commentCreateHandler}>
                    <textarea
                        className="comment-input"
                        name="comment"
                        placeholder="Write your review..."
                        rows="4"
                    />
                    <button type="submit" className="btn primary">
                        Post Review
                    </button>
                    <Link to={`/boots/${bootId}/details`} className="btn secondary">Back</Link>
                </form>) : ''}

                <div className="comment-list">
                    {optimisticComments.length > 0
                        ? optimisticComments.map(({ _id, comment, pending, author }) => (
                            <div key={_id} className="comment-item" style={{ backgroundColor: pending ? 'lightgray' : '' }}>
                                <p>{author.username}: {comment}</p>
                            </div>
                        )) : <p>No Reviews Yet</p>
                    }
                </div>
            </div>
        </div>
    );
}
