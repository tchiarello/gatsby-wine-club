import {Link} from 'gatsby';
import styled from 'styled-components';

export const Container = styled.div`
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

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Image = styled.img`
  margin-right: 50px;
  transform: scale(1.3);
  transition: all 0.3s;
`;

export const WineTitle = styled.h3`
  font-size: 18px;
`;

export const Winery = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const WineLocation = styled.span`
  font-size: 14px;
  color: #939393;
`;
