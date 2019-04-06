import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5rem;
  margin: 1rem 6rem;

  @media all and (max-width: 1920px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    margin: 1rem 6rem;
  }
  @media all and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
    margin: 1rem 4rem;
  }
  @media all and (max-width: 910px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3rem;
    margin: 1rem 2rem;
  }
  @media all and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3rem;
    margin: 1rem;
  }
`;

export default Grid;
