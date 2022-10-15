import video from "../data/video.js";
import Video from "./Video.js";

//Map out component hierarchy
//-App 
//--Video (will hold state for upvotes and downvotes)
//--CommentsList (will hold boolean showComments state)
//Comment

function App() {
  //console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video src={video.embedUrl} title={video.title} views={video.views} createdAt={video.createdAt} upvotesProp={video.upvotes} downvotesProp={video.downvotes}/>
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
