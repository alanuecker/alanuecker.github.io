import styled from '@emotion/styled';

const TagContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  padding: 0 1rem 0.5rem;
  > div:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export default TagContainer;
