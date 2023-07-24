import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  height: 205px;
  padding: 15px 50px;

  &:hover img {
    transform: scale(1.4);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Image = styled.img`
  margin-right: 50px;
  transform: scale(1.3);
  transition: all 0.3s;
`;

const WineTitle = styled.h3`
  font-size: 18px;
`;

const Winery = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const WineLocation = styled.span`
  font-size: 14px;
  color: #939393;
`;

export default function WineCard(props) {
  return (
    <StyledLink to={`/wines/${props.categoryId}/${props.wineId}`}>
      <Container>
        <Image src={props.image} width="50" />
        <div>
          <WineTitle>{props.wine}</WineTitle>
          <Winery>{props.winery}</Winery>
          <WineLocation>{props.location}</WineLocation>
        </div>
      </Container>
    </StyledLink>
  );
}
