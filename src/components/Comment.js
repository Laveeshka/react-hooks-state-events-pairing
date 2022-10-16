
function Comment({ index, user, userComment }) {

    return (
        <div key={index}>
            <h3>{user}</h3>
            <p>{userComment}</p>
        </div>
    )
}

export default Comment;