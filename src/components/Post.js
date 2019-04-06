import * as React from 'react';
import styled from '@emotion/styled';

import TagContainer from './base/TagContainer';
import Tag from './base/Tag';
import H1 from './base/H1';
import H2 from './base/H2';
import Body from './base/Body';

const Root = styled.div`
  display: block;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.87);
`;

const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 1rem 1rem 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.87);

  @media all and (max-width: 360px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  display: flex;
  height: 100%;
  width: 120px;
  border: 1px solid rgba(0, 0, 0, 0.87);
`;

const TitleContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  ${props => props.hasImage && 'padding-left: 1rem;'}

  @media all and (max-width: 360px) {
    padding: 1rem 0;
  }
`;

const Post = ({ src, alt, title, subtitle, tags, children }) => {
  return (
    <Root>
      <Container>
        {src && <Image src={src} alt={alt} />}
        <TitleContainer hasImage={!!src}>
          {title && <H1>{title}</H1>}
          {subtitle && <H2>{subtitle}</H2>}
        </TitleContainer>
      </Container>
      <TagContainer>
        {tags.map(t => (
          <Tag key={t}>{t}</Tag>
        ))}
      </TagContainer>
      <Body>{children}</Body>
    </Root>
  );
};

export default Post;
