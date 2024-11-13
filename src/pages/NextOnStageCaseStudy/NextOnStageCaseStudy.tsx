import React from 'react';

import sitemapURL from '../../img/images/nos_sitemap.png';
import userflowURL from '../../img/images/nos_userflow.png';
import wireframe1URL from '../../img/images/nos_wireframe_1.png';
import wireframe2URL from '../../img/images/nos_wireframe_2.png';
import wireframe3URL from '../../img/images/nos_wireframe_3.png';
import wireframe4URL from '../../img/images/nos_wireframe_4.png';
import wireframe5URL from '../../img/images/nos_wireframe_5.png';
import wireframe6URL from '../../img/images/nos_wireframe_6.png';
import moodBoardURL from '../../img/images/nos_mood_board.png';
import final1URL from '../../img/images/nos_high_fi_1.png';
import final2URL from '../../img/images/nos_high_fi_2.png';
import final3URL from '../../img/images/nos_high_fi_3.png';
import final4URL from '../../img/images/nos_high_fi_4.png';
import final5URL from '../../img/images/nos_high_fi_5.png';
import final6URL from '../../img/images/nos_high_fi_6.png';
import final7URL from '../../img/images/nos_high_fi_7.png';
import final8URL from '../../img/images/nos_high_fi_8.png';
import final9URL from '../../img/images/nos_high_fi_9.png';
import profilePicURL from '../../img/images/nos_user.png';
import nextOnStageURL from '../../img/images/nextonstage.png';
import noiseMapURL from '../../img/images/nos_noise_map.png';
import backgroundURL from '../../img/images/nos_background.png';

import classes from './style.module.scss';

export function NextOnStageCaseStudy(): React.JSX.Element {
  return (
    <div className={classes.root}>
      <section className={classes.hero}>
        <div className={classes.hero__container}>
          <img
            className={classes.hero__image}
            src={nextOnStageURL}
            title="Hero Image"
            alt="Shows screenshot from the NEXT ON STAGE website project"
          ></img>
        </div>
        <h1>NEXT ON STAGE</h1>
        <div className={classes.hero__description}>
          <p>
            This is the final project for a UX/UI bootcamp, where we were tasked
            with researching a topic and designing an application or website.
            Inspired by my experience moving to a new city, I decided to address
            the challenge of finding reliable information about smaller, local
            concerts. With event details often scattered across Instagram,
            Telegram, and physical posters, especially newcomers struggle to
            stay informed.
          </p>
          <p>
            To solve this, I developed “Next on Stage,” a website framework
            designed to bring event information into one accessible space and
            empower local communities to easily promote their shows. This case
            study will walk through the research, design decisions, and user
            experience optimizations that shaped this solution.
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
            Newcomers to a city often struggle to find reliable information on
            small concerts and the local event scene. Details about events are
            scattered across multiple platforms like Instagram, Telegram
            channels, and physical flyers, making it difficult to stay up to
            date. For those looking to go out on a specific date, finding
            relevant event information requires significant time and effort,
            often resulting in missed opportunities and frustration.
          </p>
        </div>
        <div>
          <h3>Solution</h3>
          <p>
            The solution is a website framework designed to empower local
            communities by providing a dedicated platform for event promotion.
            This website will allow organizers to easily list their events while
            offering attendees a central hub for up-to-date information. In
            addition to event details, the platform will include essential
            information about venues, accessibility features, and awareness
            policies, ensuring that users have everything they need to plan
            their outing with confidence.
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
          The first step was to develop a set of interview questions aimed at
          gathering insights from individuals who organize smaller, local
          events. I wanted to understand their methods for promoting events and
          identify factors that influence attendee turnout.
        </p>
        <p>
          For the quantitative research, I conducted a survey with concert
          attendees to learn about their experiences with local show promotion
          and the types of information they prioritize when deciding whether to
          attend an event. This combination of qualitative and quantitative data
          helped build a well-rounded understanding of current challenges and
          user needs.
        </p>
        <h3>Key Insights</h3>
        <ul>
          <li>
            Information Overload: 47% of survey participants felt overwhelmed by
            the number of sources for concert information, making it challenging
            to keep track of events.
          </li>
          <li>
            Missed Opportunities: 27% of respondents reported missing out on
            shows due to insufficient or delayed promotion, with many seeing
            event posts only after the event had passed.
          </li>
          <li>
            Venue Information Gaps: Many attendees expressed a need for more
            comprehensive venue information, including details on atmosphere and
            accessibility, to help them decide whether a venue aligns with their
            preferences.
          </li>
        </ul>
        <p>
          These insights underscored the need for a centralized platform that
          could simplify event discovery while offering crucial details about
          venues and accessibility.
        </p>
      </section>
      <section className={classes.persona}>
        <h2 className={classes.persona__title}>User Persona</h2>
        <p className={classes.persona__description}>
          After gathering and organizing the data from my research, I created a
          user persona to help visualize the target end-user and better
          understand their needs, preferences, and pain points.
        </p>
        <div className={classes.persona__container}>
          <img
            className={classes.persona__image}
            src={profilePicURL}
            title="Profile Picture"
            alt="Shows profile picture for the persona"
          ></img>
          <div className={classes.persona__info}>
            <h3>Alex</h3>
            <div className={classes.persona__info_row}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8ZM15.7142 12.7125C17.1064 11.6137 18 9.91121 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 9.91121 6.8936 11.6137 8.28579 12.7125C4.60205 14.187 2 17.7896 2 22H4C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H22C22 17.7896 19.3979 14.187 15.7142 12.7125Z"
                  fill="currentColor"
                />
              </svg>
              28
            </div>
            <div className={classes.persona__info_row}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 6.5H16V5.5C16 4.70435 15.6839 3.94129 15.1213 3.37868C14.5587 2.81607 13.7956 2.5 13 2.5H11C10.2044 2.5 9.44129 2.81607 8.87868 3.37868C8.31607 3.94129 8 4.70435 8 5.5V6.5H5C4.20435 6.5 3.44129 6.81607 2.87868 7.37868C2.31607 7.94129 2 8.70435 2 9.5V18.5C2 19.2956 2.31607 20.0587 2.87868 20.6213C3.44129 21.1839 4.20435 21.5 5 21.5H19C19.7956 21.5 20.5587 21.1839 21.1213 20.6213C21.6839 20.0587 22 19.2956 22 18.5V9.5C22 8.70435 21.6839 7.94129 21.1213 7.37868C20.5587 6.81607 19.7956 6.5 19 6.5ZM10 5.5C10 5.23478 10.1054 4.98043 10.2929 4.79289C10.4804 4.60536 10.7348 4.5 11 4.5H13C13.2652 4.5 13.5196 4.60536 13.7071 4.79289C13.8946 4.98043 14 5.23478 14 5.5V6.5H10V5.5ZM20 18.5C20 18.7652 19.8946 19.0196 19.7071 19.2071C19.5196 19.3946 19.2652 19.5 19 19.5H5C4.73478 19.5 4.48043 19.3946 4.29289 19.2071C4.10536 19.0196 4 18.7652 4 18.5V13C4.97544 13.3869 5.97818 13.7011 7 13.94V14.53C7 14.7952 7.10536 15.0496 7.29289 15.2371C7.48043 15.4246 7.73478 15.53 8 15.53C8.26522 15.53 8.51957 15.4246 8.70711 15.2371C8.89464 15.0496 9 14.7952 9 14.53V14.32C9.99435 14.4554 10.9965 14.5255 12 14.53C13.0035 14.5255 14.0057 14.4554 15 14.32V14.53C15 14.7952 15.1054 15.0496 15.2929 15.2371C15.4804 15.4246 15.7348 15.53 16 15.53C16.2652 15.53 16.5196 15.4246 16.7071 15.2371C16.8946 15.0496 17 14.7952 17 14.53V13.94C18.0218 13.7011 19.0246 13.3869 20 13V18.5ZM20 10.81C19.0274 11.2205 18.0244 11.5548 17 11.81V11.5C17 11.2348 16.8946 10.9804 16.7071 10.7929C16.5196 10.6054 16.2652 10.5 16 10.5C15.7348 10.5 15.4804 10.6054 15.2929 10.7929C15.1054 10.9804 15 11.2348 15 11.5V12.24C13.0113 12.54 10.9887 12.54 9 12.24V11.5C9 11.2348 8.89464 10.9804 8.70711 10.7929C8.51957 10.6054 8.26522 10.5 8 10.5C7.73478 10.5 7.48043 10.6054 7.29289 10.7929C7.10536 10.9804 7 11.2348 7 11.5V11.83C5.97562 11.5748 4.9726 11.2405 4 10.83V9.5C4 9.23478 4.10536 8.98043 4.29289 8.79289C4.48043 8.60536 4.73478 8.5 5 8.5H19C19.2652 8.5 19.5196 8.60536 19.7071 8.79289C19.8946 8.98043 20 9.23478 20 9.5V10.81Z"
                  fill="currentColor"
                />
              </svg>
              Bookstore Clerk
            </div>
            <div className={classes.persona__info_row}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 10.8C12.3956 10.8 12.7822 10.6827 13.1111 10.4629C13.44 10.2431 13.6964 9.93078 13.8478 9.56533C13.9991 9.19988 14.0387 8.79775 13.9616 8.40979C13.8844 8.02182 13.6939 7.66546 13.4142 7.38575C13.1345 7.10605 12.7781 6.91557 12.3902 6.8384C12.0022 6.76122 11.6001 6.80083 11.2346 6.95221C10.8692 7.10358 10.5568 7.35993 10.3371 7.68883C10.1173 8.01772 10 8.4044 10 8.79997C10 9.3304 10.2107 9.83911 10.5858 10.2142C10.9609 10.5893 11.4696 10.8 12 10.8ZM11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9796 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9796 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L16.8 13.61C17.75 12.6605 18.397 11.4507 18.6593 10.1334C18.9216 8.8162 18.7873 7.45077 18.2735 6.20986C17.7597 4.96894 16.8894 3.90828 15.7727 3.16202C14.656 2.41577 13.3431 2.01746 12 2.01746C10.6569 2.01746 9.344 2.41577 8.22731 3.16202C7.11062 3.90828 6.24033 4.96894 5.72652 6.20986C5.2127 7.45077 5.07845 8.8162 5.34073 10.1334C5.60301 11.4507 6.25005 12.6605 7.2 13.61L11.29 17.71ZM7.23 8.33997C7.29833 7.62698 7.52502 6.93826 7.89352 6.32408C8.26203 5.7099 8.76305 5.18577 9.36 4.78997C10.1442 4.27506 11.0619 4.00072 12 4.00072C12.9381 4.00072 13.8558 4.27506 14.64 4.78997C15.233 5.18442 15.7311 5.70537 16.0987 6.31535C16.4663 6.92533 16.6942 7.6092 16.7659 8.31775C16.8376 9.02631 16.7514 9.74195 16.5135 10.4132C16.2756 11.0845 15.8919 11.6947 15.39 12.2L12 15.59L8.61 12.2C8.10752 11.6996 7.72293 11.0935 7.48421 10.4258C7.24548 9.75804 7.15864 9.04549 7.23 8.33997ZM19 20H5C4.73478 20 4.48043 20.1053 4.29289 20.2929C4.10536 20.4804 4 20.7347 4 21C4 21.2652 4.10536 21.5195 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22H19C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5195 20 21.2652 20 21C20 20.7347 19.8946 20.4804 19.7071 20.2929C19.5196 20.1053 19.2652 20 19 20Z"
                  fill="currentColor"
                />
              </svg>
              Germany
            </div>
          </div>
          <div className={classes.persona__bio}>
            <h3>Bio</h3>
            <p>
              Alex is a 28-year-old bookstore clerk who recently moved to
              Leipzig and is passionate about exploring the local music scene.
              They enjoy attending smaller, niche concerts but find it
              challenging to discover such events in a new city. Outside of
              work, Alex loves spending time in local cafes, art galleries,
              seeking to immerse themselves in the city's vibrant cultural
              scene. They are eager to meet new people, make friends with
              similar interests, and feel more connected to their new community.
            </p>
          </div>
          <div className={classes.persona__goals}>
            <h3>Goals</h3>
            <ul>
              <li>
                Find reliable source for information about small concerts and
                events
              </li>
              <li>Support local artists and venues</li>
              <li>
                Meet like-minded people and build social circle in new city
              </li>
            </ul>
          </div>
          <div className={classes.persona__pain}>
            <h3>Pain Points</h3>
            <ul>
              <li>
                Feels overwhelmed by the amount of local event websites and
                social media channels
              </li>
              <li>
                Difficult to find information on smaller, underground concerts
                and events
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={classes.sitemap}>
        <h2>Sitemap</h2>
        <p>
          With the initial UX research and ideation complete, I created a
          sitemap to outline the key pages and functionalities of the
          application. This visual representation helps clarify the structure of
          the website and ensures that all essential components are accounted
          for.
        </p>
        <img
          className={classes.sitemap__image}
          src={sitemapURL}
          title="Sitemap"
          alt="Shows a sitemap of the next on stage website"
        ></img>
      </section>
      <section className={classes.userflow}>
        <h2>User Flow</h2>
        <p>
          The User Flow outlines the key functionalities of the website, guiding
          users through a seamless event discovery experience. Starting on the
          homepage, users can use the search and filter options to find events
          that match their interests or a specific date. Each event page
          provides essential details and connects directly to the organizer and
          venue pages, giving users a fuller picture of the event's atmosphere,
          accessibility, and policies. Additionally, a report feature enables
          users to flag events, organizers, or venues if issues arise, fostering
          a respectful and trustworthy community.
        </p>
        <img
          className={classes.userflow__image}
          src={userflowURL}
          title="User Flow"
          alt="Shows the primary user flow for navigating the website."
        ></img>
      </section>
      <section className={classes.wireframe}>
        <h2>Wireframes</h2>
        <p>
          The initial low-fidelity wireframes were sketched on paper, allowing
          for quick exploration of layout ideas and page structures. After
          conducting brief user tests with these sketches to gather initial
          feedback, I moved the designs into Figma to refine and iterate
          digitally. Mid-fidelity wireframes were then developed to focus on
          testing the information architecture, ensuring that users could easily
          navigate between events, venues, and organizer details. This step
          helped validate the structure before adding visual details in the
          high-fidelity prototypes.
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
            alt="Shows a hand drawn wireframe of a event page."
          ></img>
          <img
            className={classes.wireframe__image}
            src={wireframe3URL}
            title="Wireframe 3"
            alt="Shows a hand drawn wireframe of a form."
          ></img>
          <img
            className={classes.wireframe__image}
            src={wireframe4URL}
            title="Wireframe 4"
            alt="Shows a mid fidelity wireframe of a home screen."
          ></img>
          <img
            className={classes.wireframe__image}
            src={wireframe5URL}
            title="Wireframe 5"
            alt="Shows a mid fidelity wireframe of a event page."
          ></img>
          <img
            className={classes.wireframe__image}
            src={wireframe6URL}
            title="Wireframe 6"
            alt="Shows a mid fidelity wireframe of a form."
          ></img>
        </div>
      </section>
      <section className={classes.design}>
        <h2>Design System</h2>
        <p>
          The design captures the rebellious and bold spirit of the underground
          music scene by leveraging dynamic elements like bold typography,
          layered graphics, and striking gradients. The color palette is
          intentionally limited to a foreground, background, and elevation color
          to create contrast and maintain focus. Gradients and abstract
          background textures bring a sense of energy and noise, reflecting the
          raw and vibrant feel of smaller local concerts.
        </p>
        <h3>Mood Board</h3>
        <p>
          The mood board draws inspiration from images and flyers of smaller
          underground shows, aiming to capture their raw, rebellious energy and
          translate it into the final design.
        </p>
        <img
          className={classes.design__mood_board_image}
          src={moodBoardURL}
          title="Mood Board"
          alt="Shows a mood board with images from concert flyers and live music in underground locations."
        ></img>
        <div className={classes.design__container}>
          <div className={classes.design__color}>
            <h3>Color Palette</h3>
            <div className={classes.design__color_row}>
              <div
                className={classes.design__color_item}
                style={{ background: '#0F1112', color: '#FFF' }}
              >
                <span>Black</span>
                <span>#0F1112</span>
              </div>
              <div
                className={classes.design__color_item}
                style={{ background: '#F2F2F2' }}
              >
                <span>Background</span>
                <span>#F2F2F2</span>
              </div>
              <div
                className={classes.design__color_item}
                style={{ background: '#FFFFFF' }}
              >
                <span>Elevation</span>
                <span>#FFFFFF</span>
              </div>
            </div>
          </div>
          <div className={classes.design__color}>
            <h3>Gradients & Background</h3>
            <div className={classes.design__color_row}>
              <div
                className={classes.design__color_item}
                style={{
                  backgroundImage: `url(${noiseMapURL}), linear-gradient(90deg, #D92625, #F26241, #F2C879)`,
                }}
              ></div>
              <div
                className={classes.design__color_item}
                style={{
                  backgroundImage: `url(${noiseMapURL}), linear-gradient(90deg, #7D6BBF, #F28DC4 39%, #F2B077 75%, #F2CC85)`,
                }}
              ></div>
              <div
                className={classes.design__color_item}
                style={{ backgroundImage: `url(${backgroundURL})` }}
              ></div>
            </div>
          </div>
          <div className={classes.design__typo}>
            <h3>Typography</h3>
            <div className={classes.design__typo_container}>
              <div>
                <div className={classes.design__typo_name}>
                  <span
                    style={{
                      fontFamily: 'Newake',
                      fontWeight: 'Demo',
                      fontSize: '3rem',
                      lineHeight: '3.5rem',
                    }}
                  >
                    Aa
                  </span>
                  <hr className={classes.design__typo_divider} />
                  <span
                    style={{
                      fontFamily: 'Newake',
                      fontWeight: 'Demo',
                      fontSize: '0.75rem',
                    }}
                  >
                    Newake
                  </span>
                </div>
              </div>
              <div className={classes.design__typo_list}>
                <div className={classes.design__typo_list_item}>
                  <span
                    style={{
                      fontFamily: 'Newake',
                      fontWeight: 'Demo',
                      fontSize: '64px',
                    }}
                  >
                    Display
                  </span>
                  64px
                </div>
              </div>
            </div>
            <div className={classes.design__typo_container}>
              <div>
                <div className={classes.design__typo_name}>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 700,
                      fontSize: '3rem',
                      lineHeight: '3.5rem',
                    }}
                  >
                    Aa
                  </span>
                  <hr className={classes.design__typo_divider} />
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '0.75rem',
                    }}
                  >
                    Manrope
                  </span>
                </div>
              </div>
              <div className={classes.design__typo_list}>
                <div className={classes.design__typo_list_item}>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 700,
                      fontSize: '32px',
                    }}
                  >
                    Headline
                  </span>
                  32px
                </div>
                <div className={classes.design__typo_list_item}>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 700,
                      fontSize: '24px',
                    }}
                  >
                    Title
                  </span>
                  24px
                </div>
                <div className={classes.design__typo_list_item}>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '20px',
                    }}
                  >
                    Subhead
                  </span>
                  20px
                </div>
                <div className={classes.design__typo_list_item}>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '16px',
                    }}
                  >
                    Body
                  </span>
                  16px
                </div>
                <div className={classes.design__typo_list_item}>
                  <span
                    style={{
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '14px',
                    }}
                  >
                    Label
                  </span>
                  14px
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.final}>
        <h2>Final Design</h2>
        <p>
          The final design focuses on providing users with comprehensive
          features for discovering and attending local events. The homepage
          highlights popular upcoming events, followed by a complete list that
          users can narrow down using search and filter options. Each event page
          prominently displays key details and showcases event artwork, with
          additional information available further down the page. Venue pages
          offer images to convey the atmosphere, along with FAQs addressing
          common attendee questions.
        </p>
        <p>
          To support the local community, space is dedicated to organizers and
          collectives, helping users make informed decisions about events. A
          submission feature allows anyone to add events, with moderation in
          place to maintain quality. Additionally, a report function enables
          users to flag issues with events, organizers, or venues, fostering a
          safe and trustworthy platform.
        </p>
        <div className={classes.final__container}>
          <div className={classes.final__column}>
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
          </div>
          <div className={classes.final__column}>
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
          </div>
        </div>
      </section>
      {/* <section>
        <h2>Challenges & Conclusion</h2>
        <p></p>
        <br />
        <p></p>
      </section> */}
    </div>
  );
}
