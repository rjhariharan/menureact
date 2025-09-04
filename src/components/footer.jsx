
export default function Footer(props){

    return(
        <footer className="recipe-footer">
            <small className="recipe-maker">Recipe by {props.recipemaker}</small>
        </footer>
    );
}