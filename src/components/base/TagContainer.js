import styled from '@emotion/styled';

const TagContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 0.5rem 0;
  > div:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export default TagContainer;
