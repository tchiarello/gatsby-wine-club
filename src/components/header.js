import * as React from "react";
import styled from "styled-components";
import logo from "../images/wine-club-logo.png";
import { Link } from "gatsby";

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
        <Image src={logo} alt="Logo Wine Club"></Image>
      </Link>
    </Container>
  );
}
