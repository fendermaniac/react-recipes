import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RecipeDetail = props => {
  if (!props.recipe) {
    return (
      <p
        style={props.style}
        className={classNames(
          `h3 p2 bg-white italic center ${props.className}`,
        )}
      >
        {'Please select a recipe to see the detail.'}
      </p>
    );
  }
  return (
    <div
      style={props.style}
      className={classNames(`p2 bg-white ${props.className}`)}
    >
      <h2 className="h2">{props.recipe.name}</h2>
      <img
        className="fit"
        src={`https://njkx.imgeng.in/${props.recipe.image}`}
        alt={props.recipe.name}
      />
      <div>
        <span>{props.recipe.category}</span>
        <span>{props.recipe.calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {props.recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {props.recipe.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

RecipeDetail.propTypes = {
  style: PropTypes.object,
  recipe: PropTypes.object,
  className: PropTypes.string,
};

export default RecipeDetail;
