export default function Header(props){
  return(
      <header className="recipe-header">
        <div className="header-buttons">
          <div className="dislike-button">
            <props.DislikeButton />
          </div>
          <div className="header-content">
            <h2 className="recipe-name">{props.recipename}</h2>
            <p className="time">{props.time}</p>
          </div>
          <div className="like-button">
            <props.LikeButton />
          </div>
        </div>
      </header>
  );
}