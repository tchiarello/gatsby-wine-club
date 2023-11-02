import styled from 'styled-components';

interface ContainerProps {
  $image: string;
}

export const Hero = styled.div<ContainerProps>`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  margin-bottom: 50px;
  background-image: ${(props) => `url("${props.$image}")` || `url("")`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  background-color: #00000070;
  border-radius: 4px;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 20px;
`;
