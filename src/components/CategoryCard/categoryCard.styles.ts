import styled from 'styled-components';
import {Link} from 'gatsby';

interface CardProps {
  $image: string;
}

export const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  text-align: center;
  padding: 20px;
  margin-bottom: 50px;

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled.div<CardProps>`
  position: relative;
  overflow: hidden;
  height: 250px;
  margin-bottom: 30px;
  color: #fff;
  border-radius: 4px;
  transition: all 0.3s;
  background-color: grey;
  display: flex;
  flex-direction: column-reverse;
  padding: 10px 10px 40px 10px;
  background-image: ${(props) => `url("${props.$image}")` || `url("")`};
  background-size: cover;
  background-position: center;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(143, 143, 143, 0) -15%,
      rgba(0, 0, 0, 0.75) 100%
    );
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const Title = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 25px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
