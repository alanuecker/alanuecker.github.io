import React from 'react';

import sitemapURL from '../../img/images/te_sitemap-min.png';
import userflowURL from '../../img/images/te_userflow-min.png';
import wireframe1URL from '../../img/images/te_wireframe_1-min.png';
import wireframe2URL from '../../img/images/te_wireframe_2-min.png';
import wireframe3URL from '../../img/images/te_wireframe_3-min.png';
import wireframe5URL from '../../img/images/te_wireframe_5-min.png';
import wireframe6URL from '../../img/images/te_wireframe_6-min.png';
import wireframe8URL from '../../img/images/te_wireframe_8-min.png';
import final1URL from '../../img/images/te_high_fi_1-min.png';
import final2URL from '../../img/images/te_high_fi_2-min.png';
import final3URL from '../../img/images/te_high_fi_3-min.png';
import final4URL from '../../img/images/te_high_fi_4-min.png';
import final5URL from '../../img/images/te_high_fi_5-min.png';
import final6URL from '../../img/images/te_high_fi_6-min.png';
import final7URL from '../../img/images/te_high_fi_7-min.png';
import final8URL from '../../img/images/te_high_fi_8-min.png';
import final9URL from '../../img/images/te_high_fi_9-min.png';
import final10URL from '../../img/images/te_high_fi_10-min.png';
import final11URL from '../../img/images/te_high_fi_11-min.png';
import final12URL from '../../img/images/te_high_fi_12-min.png';

import classes from './style.module.scss';

export function TastyEffectCaseStudy(): React.JSX.Element {
  return (
    <div className={classes.root}>
      <section className={classes.hero}>
        <h1>Tasty Effect</h1>
        <div className={classes.hero__description}>
          <p>
            This project was created during a UX/UI bootcamp, where we were
            tasked with researching and designing an application or website that
            incorporates at least one aspect of accessibility.
          </p>
          <p>
            I chose to focus on recipe apps and websites, as I use them
            frequently and see significant potential for customization based on
            users' skill levels, preferences, and physical abilities. Many
            top-ranking recipe websites tend to hide the actual recipe beneath
            layers of images and text, creating a frustrating user experience.
          </p>
        </div>
        <div className={classes.hero__info}>
          <div>
            <h4>Role</h4>
            <ul>
              <li>Research</li>
              <li>Product Design</li>
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <ul>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <h4>Duration</h4>
            <ul>
              <li>3 weeks</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={classes.overview}>
        <h2>Overview</h2>
        <div>
          <h3>Problem</h3>
          <p>
            Users often struggle to quickly access essential information, such
            as ingredients and instructions, on recipe websites. Additionally,
            there is also a noticeable lack of platforms that allow users to
            tailor the skill level, ingredients, and instructional formats to
            their individual needs.
          </p>
        </div>
        <div>
          <h3>Solution</h3>
          <p>
            The solution is to develop a user-friendly recipe app that makes
            ingredients and instructions easily accessible, personalizes recipes
            based on individual user preferences, and provides multiple
            instructional formats to accommodate different learning styles and
            skill levels.
          </p>
        </div>
      </section>
      <section className={classes.process}>
        <h2>Design Process</h2>
        <p>
          I choose the design thinking process for this project due to it’s
          focus on human needs, completing the <b>Empathize</b>, <b>Define</b>,{' '}
          <b>Ideate</b>, <b>Prototype</b>, and <b>Test</b> stages over the
          course of three weeks.
        </p>
        <div className={classes.process__weeks}>
          <div>
            <h3>Week 1</h3>
            <ul>
              <li>Interviews & Surveys</li>
              <li>Problem Statement</li>
              <li>User Persona</li>
              <li>User Journey</li>
              <li>Low Fidelity</li>
            </ul>
          </div>
          <div>
            <h3>Week 2</h3>
            <ul>
              <li>Sitemap</li>
              <li>User Flow</li>
              <li>Mid Fidelity</li>
            </ul>
          </div>
          <div>
            <h3>Week 3</h3>
            <ul>
              <li>Style Guide</li>
              <li>High Fidelity</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2>Research & Insights</h2>
        <p>
          The first step was to developed a set of survey and interview
          questions to gather insights from potential users. The focus was on
          understanding user behavior and preferences, particularly around these
          key themes:
        </p>
        <ul>
          <li>How do dietary restrictions influence your recipe search?</li>
          <li>
            What type of recipe format do you prefer: text, images, or video?
          </li>
          <li>What typically leads you to skip a recipe after opening it?</li>
        </ul>
        <h3>Key Insights</h3>
        <p>
          Through the survey and interviews, I gathered valuable insights into
          user behavior and preferences when interacting with recipe websites
          and apps. These findings highlighted several pain points and
          opportunities for improvement:
        </p>
        <ul>
          <li>
            Ingredients and instructions are often difficult to locate on many
            websites, leading to frustration and a higher exit rate.
          </li>
          <li>
            Users frequently experiment with recipes by substituting ingredients
            based on availability or dietary needs.
          </li>
          <li>
            Most platforms only present recipes in a single format (text,
            images, or video), limiting flexibility for different learning
            preferences.
          </li>
          <li>
            Images significantly influence recipe choice, as users are often
            drawn to visually appealing dishes.
          </li>
        </ul>
      </section>
      <section className={classes.persona}>
        <h2 className={classes.persona__title}>User Persona</h2>
        <p className={classes.persona__description}>
          After gathering and organizing the data from my research, I created a
          user persona to help visualize the target end-user and better
          understand their needs, preferences, and pain points.
        </p>
        <div className={classes.persona__person}>
          <h3>Laura</h3>
          <div>36</div>
          <div>Physical Therapist</div>
          <div>Germany</div>
        </div>
        <div className={classes.persona__bio}>
          <h3>Bio</h3>
          <p>
            Laura is a physical therapist based in Berlin. She likes to prepare
            3-4 meals a week, exploring various recipes and trying out some
            modifications. Due to her gluten intolerance, she focuses on
            gluten-free recipes and occasionally prepares vegan dishes to
            accommodate her friends' dietary preferences. Confident in her
            cooking skills, Laura enjoys experimenting in the kitchen while
            balancing her professional and personal life.
          </p>
        </div>
        <div className={classes.persona__goals}>
          <h3>Goals</h3>
          <ul>
            <li>Seeks recipes that are quick and easy to prepare</li>
            <li>
              Looks for new recipes and cooking tips to have more variety in
              meals
            </li>
            <li>Has to accommodate her gluten-free diet</li>
          </ul>
        </div>
        <div className={classes.persona__pain}>
          <h3>Pain Points</h3>
          <ul>
            <li>There are a lot of results on Google for the same dish</li>
            <li>Websites are filled with long text before the actual recipe</li>
            <li>Finding gluten-free recipes that also cater to her friends</li>
          </ul>
        </div>
      </section>
      <section className={classes.sitemap}>
        <h2>Sitemap</h2>
        <p>
          With the initial UX research and ideation complete, I created a
          sitemap to outline the key pages and functionalities of the
          application. This visual representation helps clarify the structure of
          the app and ensures that all essential components are accounted for.
        </p>
        <img
          className={classes.sitemap__image}
          src={sitemapURL}
          title="Sitemap"
          alt="Shows a sitemap of the tasty effect application"
        ></img>
      </section>
      <section className={classes.userflow}>
        <h2>User Flow</h2>
        <p>
          The User Flow emphasizes three main aspects of the application. Users
          are welcomed with a comprehensive onboarding process designed for
          personalization, allowing them to define their preferences and dietary
          restrictions right from the start. The search and filter page offers a
          wide variety of options and categories, enabling users to narrow down
          their search for an appropriate recipe. Each recipe page presents
          instructions, cookware requirements, and ingredient information in a
          clear and accessible format, ensuring that users have all the
          necessary details to successfully prepare their chosen dish.
        </p>
        <img
          className={classes.userflow__image}
          src={userflowURL}
          title="User Flow"
          alt="Shows the primary user flow for a new user that want's to find a recipe."
        ></img>
      </section>
      <section className={classes.wireframe}>
        <h2>Wireframes</h2>
        <p>
          The initial low-fidelity wireframes were sketched on paper to quickly
          explore layout concepts and page structures. After testing these
          sketches with a few users, I transferred the designs to Figma for
          further development. The mid-fidelity wireframes were created to test
          the information architecture and were designed to align more closely
          with iOS interface guidelines, ensuring a more polished and
          user-friendly experience.
        </p>
        <div className={classes.wireframe__container}>
          <img
            className={classes.wireframe__image}
            src={wireframe1URL}
            title="Wireframe 1"
            alt="Shows a hand drawn wireframe of a home screen."
          ></img>
          <img
            className={classes.wireframe__image}
            src={wireframe2URL}
            title="Wireframe 2"
            alt="Shows a hand drawn wireframe of a search screen."
          ></img>
          <img
            className={classes.wireframe__image}
            src={wireframe3URL}
            title="Wireframe 3"
            alt="Shows a hand drawn wireframe of a filter selection."
          ></img>
          <img
            className={classes.wireframe__image}
            src={wireframe8URL}
            title="Wireframe 8"
            alt="Shows a mid fidelity wireframe of a home screen."
          ></img>
          <img
            className={classes.wireframe__image}
            src={wireframe5URL}
            title="Wireframe 5"
            alt="Shows a mid fidelity wireframe of a search screen."
          ></img>
          <img
            className={classes.wireframe__image}
            src={wireframe6URL}
            title="Wireframe 6"
            alt="Shows a mid fidelity wireframe of a filter selection."
          ></img>
        </div>
      </section>
      <section>
        <h2>Design System</h2>
        <p>
          The design aimed to evoke feelings of <b>Organic</b>, <b>Healthy</b>,{' '}
          <b>Fresh</b>, <b>Natural</b>, and <b>Friendly</b>. I selected light
          green as the primary color, complemented by red and blue accent colors
          to create a vibrant palette.
        </p>
        <div className={classes.design__container}>
          <div className={classes.design__color}>
            <div className={classes.design__color_column}>
              <h3>Color Palette</h3>
              <div
                className={classes.design__color_item}
                style={{ background: '#D8E65A' }}
              >
                <span>Green Yellow</span>
                <span>#D8E65A</span>
              </div>
            </div>
            <div className={classes.design__color_column}>
              <div
                className={classes.design__color_item}
                style={{ background: '#E6625A' }}
              >
                <span>Red</span>
                <span>#E6625A</span>
              </div>
              <div
                className={classes.design__color_item}
                style={{ background: '#5AA0E6' }}
              >
                <span>Blue</span>
                <span>#5AA0E6</span>
              </div>
            </div>
            <div className={classes.design__color_column}>
              <div
                className={classes.design__color_item}
                style={{ background: '#141516', color: '#FAFAF9' }}
              >
                <span>Black</span>
                <span>#141516</span>
              </div>
              <div
                className={classes.design__color_item}
                style={{ background: '#FAFAF9' }}
              >
                <span>Background</span>
                <span>#FAFAF9</span>
              </div>
            </div>
          </div>
        </div>
        <p>
          To maintain a light and fresh aesthetic, I avoided hard edges and
          borders, opting instead for soft, rounded shapes and only light
          shadows to distinguish elements from the background. This approach
          enhances the overall user experience, making the interface feel
          approachable and inviting.
        </p>
      </section>
      <section className={classes.final}>
        <h2>Final Design</h2>
        <p>Here are some screens of the final design.</p>
        <div className={classes.final__container}>
          <img
            className={classes.final__image}
            src={final1URL}
            title="Final Design 1"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final2URL}
            title="Final Design 2"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final3URL}
            title="Final Design 3"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final4URL}
            title="Final Design 4"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final5URL}
            title="Final Design 5"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final6URL}
            title="Final Design 6"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final7URL}
            title="Final Design 7"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final8URL}
            title="Final Design 8"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final9URL}
            title="Final Design 9"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final10URL}
            title="Final Design 10"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final11URL}
            title="Final Design 11"
            alt="Shows a screen with the final design."
          ></img>
          <img
            className={classes.final__image}
            src={final12URL}
            title="Final Design 12"
            alt="Shows a screen with the final design."
          ></img>
        </div>
      </section>
      <section>
        <h2>Challenges & Conclusion</h2>
        <p>
          One of the main challenges faced during this project was the limited
          sample size of the survey and interview participants, as only eight
          individuals provided feedback. This lack of information resulted in a
          narrow perspective on user needs and preferences, potentially
          impacting the insights gathered.
        </p>
        <br />
        <p>
          In conclusion, while the design process successfully created a
          user-friendly recipe app that prioritizes accessibility and
          personalization, expanding the sample size for future research would
          significantly enhance the quality of user insights and inform more
          robust design decisions. This experience underscored the importance of
          thorough user research and its critical role in developing a product
          that truly meets the needs of its target audience.
        </p>
      </section>
    </div>
  );
}
