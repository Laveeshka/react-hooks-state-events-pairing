import Comment from "./Comment";

function CommentsList({ commentsArray, showComments }) {

    const numOfComments = showComments ? (<h2>{commentsArray.length} Comments</h2>) : null;

    const comments = showComments ? commentsArray.map((comment, index) => {
        return (
            <Comment index={index} user={comment.user} userComment={comment.comment} />
        )
    }) : null;

    return (
        <>
            {numOfComments}
            {comments}
        </>
    )
}

export default CommentsList;