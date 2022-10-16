import { useState } from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Toggle from "./Toggle.js";
import CommentsList from "./CommentsList.js";

//Map out component hierarchy
//-App 
//--Video (will hold state for upvotes and downvotes)
//--Toggle (will hold boolean showComments state)
//--CommentsList 
//----Comment

function App() {
  //console.log("Here's your data:", video);
  const [showComments, setShowComments] = useState(true); //show comments initially
  const [comments, setComments] = useState(video.comments);

  return (
    <div className="App">
      <Video src={video.embedUrl} title={video.title} views={video.views} createdAt={video.createdAt} upvotesProp={video.upvotes} downvotesProp={video.downvotes}/>
      <br></br>
      <br></br>
      <Toggle showComments={showComments} onButtonClick={setShowComments}/>
      <CommentsList commentsArray={comments} showComments={showComments}/>
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      /> */}
    </div>
  );
}

export default App;
