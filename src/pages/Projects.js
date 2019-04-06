import * as React from 'react';

import Post from '../components/Post';
import Link from '../components/base/Link';
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
          write markdown inside a react component and render it
          <br />
          <Link to="https://github.com/alanuecker/react-easy-markdown">Github</Link>
        </Post>
        <Post
          key="matrixDisplay"
          title="Led Matrix Display"
          tags={['2019', '64x32 Led Matrix', 'ESP8266', 'C++']}
        >
          write markdown inside a react component and render it
          <br />
          <Link to="https://github.com/alanuecker/matrixdisplay">Github</Link>
        </Post>
        <Post
          key="riesenwiesen"
          title="Riesenwiesen"
          tags={['2017', 'NodeJS', 'express', 'socket.io']}
        >
          write markdown inside a react component and render it
          <br />
          <Link to="https://github.com/alanuecker/react-easy-markdown">Github</Link>
        </Post>
        <Post key="islandPainter" title="Island Painter" tags={['2016', 'WebGL', 'JavaScript']}>
          "Island Painter" was a small project to learn the basics of WebGL.
          <br />
          <Link to="https://github.com/alanuecker/island-painter">Github</Link>
          <br />
          <Link to="https://alanuecker.itch.io/island-painter">Demo</Link>
        </Post>
      </Grid>
    </React.Fragment>
  );
};

export default Projects;
