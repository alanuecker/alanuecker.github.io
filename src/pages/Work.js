import * as React from 'react';

import rise from '../img/rise_logo.png';
import koaBunga from '../img/koa_bunga.gif';
import mmKochShow from '../img/mm_kochshow.png';

import Post from '../components/Post';
import Link from '../components/base/Link';
import Grid from '../components/base/Grid';
import SubHeader from '../components/base/SubHeader';

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
          tags={['2017 - 2019', 'React', 'Meteor', 'Material Design']}
        >
          {`
          team size: <10
        `}
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
