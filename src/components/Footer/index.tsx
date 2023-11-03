import * as React from 'react';
import FooterImage from '../../images/grape.png';
import * as S from './footer.styles';

const Footer = () => {
  return (
    <S.Container>
      <S.DividerContainer>
        <S.Divider />
        <img src={FooterImage} alt="Grape image" width="45" />
        <S.Divider />
      </S.DividerContainer>
      <p>
        Powered by{' '}
        <a href="https://www.gatsbyjs.com/" target="_blank">
          Gatsby
        </a>
      </p>
    </S.Container>
  );
};

export default Footer;
