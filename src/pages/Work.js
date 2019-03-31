import * as React from 'react';
import styled from '@emotion/styled';

import rise from '../img/rise_logo.png';
import Post from '../components/Post';

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
`;

const Work = () => {
  return (
    <Root id="works">
      <Post
        src={rise}
        alt="rise technologies"
        title="Rise Technologies"
        subtitle="Software Engineer"
        tags={['React', 'Meteor', 'UI']}
      >
        {`
          team size: <10
        `}
      </Post>
    </Root>
  );
};

export default Work;
