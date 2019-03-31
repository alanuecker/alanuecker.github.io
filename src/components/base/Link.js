import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Root = styled(Link)`
  color: #231f20;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: normal;
  letter-spacing: 0.25rem;
  :hover {
    text-decoration: line-through;
  }
`;

export default Root;
