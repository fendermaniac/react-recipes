import React from 'react';

const RecipeList = (props) => (
    <div style={props.style}>
        <h2>Recipes</h2>
        <ul>
            <li>
              <span>Halloween Cupcakes</span> <span>Dessert</span>
            </li>
            <li>
            <span>Blueberry Sourcream Coffee Cake</span> <span>Dessert</span>   
            </li>
            <li>
            <span>Amazing Pork Tenderloin in Slow Cooker</span> <span>Meat</span>
            </li>
        </ul>
        </div>
)

export default RecipeList;
