import React from 'react';

import classes from './style.module.scss';

export function TastyEffectCaseStudy(): React.JSX.Element {
  return (
    <div>
      <div>
        {/* Header */}
        <h2>Tasty Effect</h2>
        <div>
          For a project during my time in the UX/UI bootcamp, we were tasked
          with creating a platform that takes at least one aspect of
          accessibility into account. I decided to explore recipe websites and
          apps since I was already familiar with the topic and noticed a lot of
          potential. Current recipe websites love to bury the actual recipe
          beneath images and text. Additionally, there is no single platform
          offering recipes tailored to varying skill levels or different
          instructional formats.
        </div>
        <div>
          <h4>Role</h4> Research & Product Design Timeline 3 weeks Tools Figma
        </div>
      </div>
      <div>
        {/* Problem & Solution */}
        <div>
          <h3>Problem</h3>
          Users find it difficult to quickly access ingredients and instructions
          on recipe websites. There is also a lack of platforms offering recipes
          for different skill levels and instructional types.
        </div>
        <div>
          <h3>Solution</h3>
          The solution involves creating a user-friendly recipe app that makes
          ingredients and instructions easily accessible, tailors recipes to
          individual user preferences, and offers multiple instructional
          formats.
        </div>
      </div>
      {/* Timeline */}
      <h3>Timeline</h3>
      <div>Week 1 Research</div>
      <div>Week 2 Mid-fidelity & Prototyping</div>
      <div>Week 3 Design & High-fidelity</div>
      <h2>Research</h2>
      <h3>User Research</h3>
      <span>
        I create a set of survey and interview questions to ask potential users.
        I was especially interested in responses around the following theme:
        <ul>
          <li>
            Are you affected by dietary restrictions and how does that reflect
            in your search for recipes?
          </li>
          <li> Which type of recipe do you prefer? Text, Images, Video? </li>
          <li> For what reason do you skip a recipe once you opened it?</li>
        </ul>
      </span>
      <h3>Key Insights</h3>
      <ul>
        <li>Images significantly influence recipe choice.</li>
        <li>
          Ingredients and instructions are often hard to find on most websites.
        </li>
        <li>
          Users frequently experiment with recipes and substitute ingredients.
        </li>
        <li>
          Most platforms present recipes in a single format (text, images,
          video).
        </li>
      </ul>
      <div>
        {/* Persona */}
        <div>36 Physical Therapist Germany</div>
        <div>
          <h4>Bio</h4>
          <span>
            Laura is a physical therapist based in Berlin. She likes to prepare
            3-4 meals a week, exploring various recipes and trying out some
            modifications. Due to her gluten intolerance, she focuses on
            gluten-free recipes and occasionally prepares vegan dishes to
            accommodate her friends' dietary preferences. Confident in her
            cooking skills, Laura enjoys experimenting in the kitchen while
            balancing her professional and personal life.
          </span>
        </div>
        <div>
          <h4>Goals</h4>
          <ul>
            <li>Seeks recipes that are quick and easy to prepare</li>
            <li>
              Looks for new recipes and cooking tips to have more variety in
              meals
            </li>
            <li>Has to accommodate her gluten-free diet</li>
          </ul>
        </div>
        <div>
          <h4>Pain Points</h4>
          <ul>
            <li>There are a lot of results on Google for the same dish</li>
            <li>Websites are filled with long text before the actual recipe</li>
            <li>Finding gluten-free recipes that also cater to her friends</li>
          </ul>
        </div>
      </div>
      <h3>Competitor Analysis</h3>
      <span>
        To gain deeper insights into the market, I observed and analyzed several
        competitors and documented the features they offered their users. I
        focused on four prominent digital products in the recipe domain: ekilu,
        Good Food, Mealime, and Parsnip.
      </span>
      <h3>Information Architecture & Interaction Architecture</h3>
      <span>
        With the initial UX research and idea finding complete, I create a site
        map to outline they key pages and functionality for the application.
        Afterwards, I created User Flows to outline the most important
        interactions.
      </span>
      <h3>Mid fidelity & Prototyping</h3>
      <h2>Final Result</h2>
      <h3>Design Decisions</h3>
      <span>
        The design needed to evoke feelings of "Organic," "Healthy," "Fresh,"
        "Natural," and "Friendly." I chose light green as the primary color,
        with red and blue as accent colors. To maintain a light and fresh
        aesthetic, I avoided hard edges and borders, using only light shadows to
        distinguish elements from the background.
      </span>
      <h4>Key Features</h4>
      <ul>
        <li>
          An option to choose different ingredients based on recommendations.
        </li>
        <li>
          Deep personalization of recipe recommendations within user profiles.
        </li>
      </ul>
    </div>
  );
}
