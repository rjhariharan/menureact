    

export default function Body(props){

    return(
       
            <section className="recipe-body">

                <p className="recipe-serves">Serves: {props.recipeserves} </p>
                <p className="recipe-difficulty">Difficulty: {props.recipedifficulty} </p>
                <p className="recipe-type">Type: {props.recipetype} </p>

            </section>
     
    );
}
