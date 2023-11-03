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
  border-radius: 4px;
  width: 300px;
  height: auto;
  padding: 50px;
  margin-bottom: 20px;
  background-color: var(--color-light);
`;

export const Image = styled.img`
  height: 300px;
  width: auto;
`;

export const Description = styled.div`
  width: 300px;
`;

export const WineTitle = styled.h3`
  font-size: 20px;
  color: var(--color-light);
  margin-bottom: 10px;
`;

export const WineLocation = styled.span`
  font-size: 14px;
  color: var(--color-light);
`;
