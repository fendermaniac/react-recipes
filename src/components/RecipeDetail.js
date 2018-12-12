import React from 'react';

const RecipeDetail = (props) => (
    <div style={props.style}>
      <h2>Asian Sticky Wings</h2>
      <img src="https://bakeatmidnite.com/wp-content/uploads/2017/12/asian-sticky-wings-pin-320x320.jpg"/>
      <div>
          <span>Appetizer</span>
          <span>1000 cal</span>
      </div>
        <h3>Ingredients</h3>
        <ul>
            <li>3-5 lbs chicken wings, tips removed</li>
            <li>1 cup low-sodium soy sauce</li>
            <li>¾ cup sugar</li>
            <li>½ cup gin (see NOTES)</li>
            <li>1 tsp grated fresh ginger -OR- 1 tsp ground ginger</li>
            <li>3 large cloves garlic, crushed</li>
            <li>2 tbs honey</li>
        </ul>

                <h3>Steps</h3>
        <ol>
            <li>Remove wing tips and cut wings into 2 pieces at the joint (dummies & flats)</li>
            <li>Mix marinade ingredients in a small bowl, stirring until sugar and honey are dissolved.</li>
            <li>Place wings in a large zipper freezer bag and pour marinade over wings.</li>
            <li>Turn a few times to coat then put them in the fridge for at least 24 hours, preferably 36 hours, turning the bag once in the marination time.</li>
            <li>Preheat oven to 350℉. Line a large baking sheet with parchment paper or foil sprayed with non-stick spray. Place wings on prepared sheet.</li>
            <li>Bake for 25 minutes; turn wings and bake for an additional 20-25 minutes.</li>
            <li>Glaze with additional honey if desired.</li>
        </ol>
    </div>
)

export default RecipeDetail;
