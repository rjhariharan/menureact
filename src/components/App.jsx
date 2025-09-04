import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import { useState } from "react";

export default function RecipeCard(props) {

  return(
    <div className="recipe-contianer">
      <Header 
            recipename= {props.item.recipename} 
            time={props.item.time}
            LikeButton={LikeButton}
            DislikeButton={DislikeButton}
      />

      <div className="content-container">
        <Body
         recipeserves={props.item.recipeserves} 
         recipedifficulty= {props.item.recipedifficulty}
         recipetype={props.item.recipetype}/>
         <img src={props.item.recipeimage} alt={props.item.recipename} onError={(e) => {
           console.log('Image failed to load:', props.item.recipename, props.item.recipeimage);
           e.target.src = "https://via.placeholder.com/120x120?text=No+Image";
         }} />
      </div>

      <Footer 
            recipemaker={props.item.recipemaker}/>
    </div>
  );
}

function LikeButton(){
  const[count,likeCounter]=useState(0);
  return(
    <div>
      <button className='btn' onClick={()=>{
        likeCounter(count+1);}}>{count}👍🏽</button>
      
    </div>
  )
}

function DislikeButton(){
  const[count,dislikeCounter]=useState(0);
  return(
    <div>
      <button className='btn' onClick={()=>{
        dislikeCounter(count+1);}}>{count}👎🏽</button>
      
    </div>
  )
}
