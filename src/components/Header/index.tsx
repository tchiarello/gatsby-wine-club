import * as React from 'react';
import {Link, navigate, withPrefix} from 'gatsby';
import logo from '../../images/wine-club-logo.png';
import Button from '../../components/Button';
import * as S from './header.styles';

const Header = () => {
  const isHomepage = location.pathname === withPrefix('/');

  return (
    <S.Container>
      {!isHomepage && <Button goBack onClick={() => navigate(-1)} />}
      <Link to="/">
        <S.Logo src={logo} alt="Logo Wine Club" />
      </Link>
      {!isHomepage && <S.EmptyContent />}
    </S.Container>
  );
};

export default Header;
