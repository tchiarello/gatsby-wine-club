import styled from 'styled-components';

interface ContainerProps {
  changeColor: boolean;
}

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  margin-bottom: 40px;
  display: flex;
  align-items: baseline;
  justify-content: space-around;

  img {
    width: 200px;
    height: auto;
    cursor: pointer;

    @media (max-width: 600px) {
      width: 150px;
    }
  }
`;

export const ContainerFixed = styled.div<ContainerProps>`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
  text-align: center;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  background-color: ${(props) =>
    !props.changeColor ? '#00000038' : 'var(--color-bg)'};

  img {
    width: 80px;
    height: auto;
    cursor: pointer;
  }
`;

export const Navbar = styled.ul`
  list-style-type: none;
  display: flex;
  column-gap: 10px;

  li {
    border-bottom: 2px solid transparent;
    padding: 2px;
    transition: all 0.3s;

    &:hover {
      border-bottom: 2px solid var(--color-light);
    }
  }

  li > a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
`;
