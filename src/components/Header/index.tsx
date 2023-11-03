import * as React from 'react';
import {Link, withPrefix} from 'gatsby';
import logo from '../../images/wine-club-logo.png';
import * as S from './header.styles';

const Header = () => {
  const [changeColor, setChangeColor] = React.useState<boolean>(false);

  const isHomepage = location.pathname === withPrefix('/');

  const categoriesLinks = [
    {
      categoryId: 'whites',
      path: '/categories/whites',
    },
    {
      categoryId: 'dessert',
      path: '/categories/dessert',
    },
    {
      categoryId: 'rosé',
      path: '/categories/rose',
    },
    {
      categoryId: 'reds',
      path: '/categories/reds',
    },
    {
      categoryId: 'port',
      path: '/categories/port',
    },
    {
      categoryId: 'sparkling',
      path: '/categories/sparkling',
    },
  ];

  React.useEffect(() => {
    const changeHeaderColor = () => {
      setChangeColor(Boolean(window.scrollY > 350));
    };
    document.addEventListener('scroll', changeHeaderColor);
    return () => document.removeEventListener('scroll', changeHeaderColor);
  }, [changeColor]);

  return (
    <>
      {isHomepage && (
        <S.Container>
          <Link to="/">
            <img src={logo} alt="Logo Wine Club" />
          </Link>
        </S.Container>
      )}

      {!isHomepage && (
        <S.ContainerFixed changeColor={changeColor}>
          <Link to="/">
            <img src={logo} alt="Logo Wine Club" />
          </Link>
          <S.Navbar>
            {categoriesLinks.map((cat) => (
              <li>
                <Link to={cat.path}>{cat.categoryId.toUpperCase()}</Link>
              </li>
            ))}
          </S.Navbar>
        </S.ContainerFixed>
      )}
    </>
  );
};

export default Header;
