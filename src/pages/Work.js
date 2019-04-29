import * as React from 'react';
import styled from '@emotion/styled';

import rise from '../img/rise_logo.png';
import koaBunga from '../img/koa_bunga.gif';
import mmKochShow from '../img/mm_kochshow.png';

import Post from '../components/Post';
import Link from '../components/base/Link';
import Grid from '../components/base/Grid';
import SubHeader from '../components/base/SubHeader';

const TextLink = styled(Link)`
  padding: 0 0.25rem;
`;

const Work = () => {
  return (
    <React.Fragment>
      <SubHeader>Work</SubHeader>
      <Grid id="works">
        <Post
          key="rise"
          src={rise}
          alt="rise technologies"
          title="Rise Technologies"
          subtitle="Software Engineer"
          tags={['2017 - 2019', 'React', 'Meteor', 'UI', 'CSS', 'Material Design']}
        >
          Tasks:
          <br />
          - creation and maintenance of ui components and pages
          <br />
          - providing a coherent ui experience
          <br />
          - implementation of new features
          <br />
          - data fetching and manipulation from mongodb
          <br />
          <br />
          Major Projects:
          <br />
          <br />
          UI Components:
          <br />
          Implemented
          <TextLink to="https://github.com/material-components/material-components-web">
            MDC Web
          </TextLink>
          as the main ui framework for styling and rebuild all existing components.
          <br />
          <br />
          CI System:
          <br />
          Die css variablen von
          <TextLink to="https://github.com/material-components/material-components-web">
            MDC Web
          </TextLink>
          wurden genutzt auf darauf ein dynamisches theming system aufzubauen, welches ohne
          umfangreiche react updates auskommt und es kunden ermoeglicht ihr eigenen farben zu nutzen
          <br />
          <br />
          Select Menus:
          <br />
          <TextLink to="https://github.com/JedWatson/react-select">React Select v2</TextLink> wurde
          als Basis genommen um eine mehrere komplexe select menus oder einen date picker zu bauen.
          <br />
          <br />
          Stepper:
          <br />
          es wurde eine stepper componente gebaut, welche die validierung von einzelnen steps
          ermoeglicht, die navigation per swipe gesten ermoeglicht, eine umfangreiche navigation per
          tastatur ermoeglicht und einzelne steps lazy loaded
          <br />
          <br />
        </Post>
        <Post
          key="koaBunga"
          src={koaBunga}
          alt="koa bunga"
          title={`University:\nKoa Bunga`}
          subtitle="Programmer"
          tags={['2016 - 2017', 'Unity', 'C#', 'Camera Controls', '2D Animation in Unity']}
        >
          Koa Bunga is a student game which was made with 62 students within four months. The team
          was structured into nine different departments.
          <br />
          <br />
          Koa Bunga is a blood surfing puzzle platformer, in which you use death to your advantage
          and solve challenging puzzles to get you out of hell. It combines hardcore puzzle
          platforming with fast-paced surfing and deadly tiki abilities.
          <br />
          <br />
          <Link to="https://www.youtube.com/watch?v=XQOOf71-y8o">Trailer</Link>
          <br />
          <Link to="https://steamcommunity.com/sharedfiles/filedetails/?id=870664518">Steam</Link>
        </Post>
        <Post
          key="mmKochShow"
          src={mmKochShow}
          alt="mm koch show"
          title={`University:\nDie M&M Kochshow`}
          subtitle="Lead Programmer"
          tags={['2015', 'Unity', 'C#', 'Gameplay']}
        >
          This game was developed and designed for an assignment in the fourth semester.
          <br />
          <br />
          "M&M Kochshow" is a fighting, action, platformer inspired by Super Smash Bros.
          <br />
          <br />
          Two players fight each other to get the most ingredients in their cooking pot. Whoever has
          the most points at the end of 5 minutes wins the show.
          <br />
          <br />
          <Link to="https://alanuecker.itch.io/die-mm-kochshow">Itch.io</Link>
        </Post>
      </Grid>
    </React.Fragment>
  );
};

export default Work;
