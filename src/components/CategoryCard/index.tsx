import * as React from 'react';
import * as S from './categoryCard.styles';

interface CategoryCard {
  data: {
    allFirebaseCategory: {
      nodes: {
        categoryId: string;
        image: string;
        title: string;
      }[];
    };
  };
}

const CategoryCard: React.FC<CategoryCard> = ({data}) => {
  return (
    <S.Container>
      {data.allFirebaseCategory.nodes.map((obj, index) => {
        return (
          <S.StyledLink key={index} to={`/categories/${obj.categoryId}`}>
            <S.CardContainer image={obj.image}>
              <S.Title>{obj.title}</S.Title>
            </S.CardContainer>
          </S.StyledLink>
        );
      })}
    </S.Container>
  );
};

export default CategoryCard;
