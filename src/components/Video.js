import { useState } from "react";

function Video({ src, title, views, createdAt, upvotesProp, downvotesProp }) {
    //two state variables (upvotes and downvotes)
    const [upvotes, setUpvotes] = useState(upvotesProp);
    const [downvotes, setDownvotes] = useState(downvotesProp);

    return (
        <>
            <iframe
                width="919"
                height="525"
                src={src}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <button id="upvotes" onClick={() => setUpvotes((up) => ++up)}>{upvotes} 👍🏽</button>
            <button id="downvotes" onClick={() => setDownvotes((down) => --down)}>{downvotes} 👎🏽</button>
        </>
    )
}

export default Video;