import * as React from 'react';
import styled from '@emotion/styled';

import SubHeader from '../components/base/SubHeader';

const Root = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 'left content right';
  font-size: 1rem;
  margin: 0 2rem;
`;

const Container = styled.div`
  grid-area: content;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const Bio = () => {
  return (
    <React.Fragment>
      <SubHeader>Bio</SubHeader>
      <Root id="bio">
        <Container />
      </Root>
    </React.Fragment>
  );
};

export default Bio;
