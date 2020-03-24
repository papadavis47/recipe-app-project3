//need to pass user in case someone clicks favorite and add recipe id to favorites list
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import FavoriteButton from "./FavoriteButton";
import EditDelRecipeBtn from "./EditDelRecipeBtn";


export default function ShowRecipe(props) {
    // Get params from link
    const { id } = useParams();
    const [recipe, setRecipe] = useState("");
    const [error, setError] = useState(null);
//     const [author, setAuthor]= useState('');

    let recipeStyle = {
        backgroundImage: 'url(' + recipe.image + ')'
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/recipes/${id}`)
        .then(response => {
            console.log("👹");
            setRecipe(response.data);
// =======
//             if (response.data.message) {
//                 setError(response.data.message);
//                 console.log(response.data.err);
//             } else {
//                 setRecipe(response.data);
//                 console.log("RECIPE:", response.data);
//                 // get the author'sname
//                 axios.get(`${process.env.REACT_APP_SERVER_URL}/authors/${response.data.userId}`)
//                 .then(res2 => {
//                     if (res2.data.message) {
//                         setError(res2.data.message);
//                         console.log("💥", res2.data.err);
//                     } else {
//                         console.log("res2.data:", res2.data)
//                         setAuthor(res2.data);
//                     }
//         }).catch(err => {
//             setError(err);
//             console.log(err);
//         });
//             }
// >>>>>>> master
        })
        .catch(err=> {
            console.log(err);
            setError(err);
        })
    }, []);

    useEffect(()=>{
        console.log("Request to api for all recipes")
    }, [recipe]);

    let ingredientList = !recipe? "" : recipe.ingredients.map((ingred, index) => {
        return (<li className="recipe-ing" key={ingred + index}>{ingred}</li>)
    })


            {props.user ? <FavoriteButton recipeId={id} user={props.user} /> : <Link to="/auth/signup">Sign up to favorite</Link>}

    let directions = !recipe? "" : recipe.directions.map((step, index) => {
        return (<li className="recipe-step" key={step + index}>{index + 1}. {step}</li>)
    })


    let tagList = !recipe? "" : recipe.tags.map((tag, index) => {
        return (<p className="recipe-tag" key={tag + index}>{tag}</p>)
    })

    let recipeDetails = !recipe ? <h3 className="white-bg">Loading...</h3> : (
        <div className="content">
            <div class="recipe-img" style={recipeStyle} alt={recipe.alt}>
                <div class="recipe-img-text">
                    <h3>{recipe.description}</h3>
                </div>
            </div>
            <div className="recipe">
                <div className="recipe-tab">
                    <h3 className="recipe-tab-text">
                        <span className="fancy">Author - </span>
                        <Link className="author" to={`/authors/${author._id}`}>{author.name}</Link>
                    </h3>
                </div>
                <div className="recipe-text">
                    <h2 className="fancy">{recipe.title}</h2>
                    <hr />
                    <h3>Ingredients</h3>
                    <ul className="recipe-ingredients">
                        {ingredientList}
                    </ul>
                    {props.user ? <FavoriteButton recipeId={recipe._id} user={props.user} /> : <Link to="/auth/signup">Sign up to favorite</Link>}
                    <EditDelRecipeBtn user={props.user} recipeId={recipe._id} authorId={recipe.userId}/>
                </div>
                <div className="recipe-steps">
                    <h3>Directions</h3>
                    <hr />
                    <ul>
                        {directions}
                    </ul>
                </div>
                <div className="recipe-tags">
                    <h4>Tags for this recipe</h4>
                    {tagList}
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {recipeDetails}
        </div>
    )
}