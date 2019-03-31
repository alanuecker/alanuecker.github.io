import * as React from 'react';
import styled from '@emotion/styled';

import Post from '../components/Post';
import Link from '../components/base/Link';

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
`;

const Projects = () => {
  return (
    <Root id="projects">
      <Post
        title="React Easy Markdown"
        tags={['React', 'Markdown', 'React Live']}
      >
        write markdown inside a react component and render it
        <br />
        <Link to="https://github.com/alanuecker/react-easy-markdown">Github</Link>
      </Post>
    </Root>
  );
};

export default Projects;
