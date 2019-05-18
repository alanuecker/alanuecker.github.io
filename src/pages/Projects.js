import * as React from 'react';

import Post from '../components/Post';
import ExternalLink from '../components/base/ExternalLink';
import Grid from '../components/base/Grid';
import SubHeader from '../components/base/SubHeader';

const Projects = () => {
  return (
    <React.Fragment>
      <SubHeader>Projects</SubHeader>
      <Grid id="projects">
        <Post
          key="reactEasyMarkdown"
          title="React Easy Markdown"
          tags={['2019', 'React', 'markdown-it', 'react-live']}
        >
          Write markdown inside a react component and render it live.
          <br />
          <br />
          The goal of this project was to make it as simple as possible to document an ui component
          using markdown and provide some interactivity to test the props.
          <br />
          <br />
          <ExternalLink to="https://github.com/alanuecker/react-easy-markdown">Github</ExternalLink>
        </Post>
        <Post
          key="matrixDisplay"
          title="Led Matrix Display"
          tags={['2019', '64x32 Led Matrix', 'ESP8266', 'C++']}
        >
          use a 64x32 led matrix to display the weather and other fun things
          <br />
          <br />
          <ExternalLink to="https://github.com/alanuecker/matrixdisplay">Github</ExternalLink>
        </Post>
        <Post
          key="riesenwiesen"
          title="Riesenwiesen"
          tags={['2017', 'NodeJS', 'express', 'socket.io', 'Multiplayer']}
        >
          This project was inspired by all the ".io games" and some inside jokes about the game
          carcassonne.
          <br />
          <br />
          The main goal was to program an online game where every one could place game tiles on an
          infinite game board.
          <br />
          <br />
          <ExternalLink to="https://github.com/alanuecker/Riesenwiesen">Github</ExternalLink>
        </Post>
        <Post key="islandPainter" title="Island Painter" tags={['2016', 'WebGL', 'JavaScript']}>
          "Island Painter" was a small project to learn the basics of WebGL.
          <br />
          <br />
          <ExternalLink to="https://github.com/alanuecker/island-painter">Github</ExternalLink>
          <br />
          <ExternalLink to="https://alanuecker.itch.io/island-painter">Demo</ExternalLink>
        </Post>
      </Grid>
    </React.Fragment>
  );
};

export default Projects;
