import {Link} from 'gatsby';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 1px solid var(--color-dark);
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px 10px 0 0;
  width: 250px;
  height: 250px;
  padding: 15px 50px;
  background-color: var(--color-light);
`;

export const Image = styled.img`
  height: 200px;
  width: auto;
`;

export const Description = styled.div`
  background-color: var(--color-dark);
  position: relative;
  width: 250px;
  height: 150px;
  border: 1px solid var(--color-light);
  border-radius: 0 0 10px 10px;
  padding: 10px;
`;

export const WineTitle = styled.h3`
  font-size: 16px;
  color: var(--color-light);
  margin-bottom: 10px;
`;

export const Winery = styled.p`
  font-size: 14px;
  color: var(--color-light);
  margin-bottom: 10px;
`;

export const WineLocation = styled.span`
  font-size: 12px;
  color: var(--color-light);
`;
