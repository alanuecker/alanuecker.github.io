import * as React from 'react';
import styled from '@emotion/styled';

import TagContainer from './base/TagContainer';
import Tag from './base/Tag';
import H1 from './base/H1';
import H2 from './base/H2';
import Body from './base/Body';

const Root = styled.div``;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

const Image = styled.img`
  display: flex;
  height: 80px;
  width: 80px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding-left: ${props => props.src ? '1rem' : '0'};
`;

const Post = ({ src, alt, title, subtitle, tags, children }) => {
  return (
    <Root>
      <Container>
        {src && <Image src={src} alt={alt} />}
        <TitleContainer src={src}>
          {title && <H1>{title}</H1>}
          {subtitle && <H2>{subtitle}</H2>}
        </TitleContainer>
      </Container>
      <TagContainer>
        {tags.map(t => (
          <Tag>{t}</Tag>
        ))}
      </TagContainer>
      <Body>{children}</Body>
    </Root>
  );
};

export default Post;
