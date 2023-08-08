import * as React from 'react';
import {Link} from 'gatsby';
import logo from '../../images/wine-club-logo.png';

import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 20px 10px;
  margin-bottom: 100px;
`;

const Image = styled.img`
  width: 100px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <Image src={logo} alt="Logo Wine Club" />
      </Link>
    </Container>
  );
}
