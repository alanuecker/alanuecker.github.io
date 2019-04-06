import styled from '@emotion/styled';

const SubHeader = styled.div`
  font-weight: 400;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 3rem;
  margin: 0 5rem 1rem;

  @media all and (max-width: 1920px) {
    margin: 0 6rem 1rem;
  }
  @media all and (max-width: 1280px) {
    margin: 0 4rem 1rem;
  }
  @media all and (max-width: 910px) {
    margin: 0 2rem 1rem;
    font-size: 2rem;
    line-height: 3rem;
  }
  @media all and (max-width: 480px) {
    margin: 0 1rem 1rem;
    font-size: 2rem;
    line-height: 3rem;
  }
`;

export default SubHeader;
