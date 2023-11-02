import * as React from 'react';
import {graphql} from 'gatsby';
import {CategoryPageProps} from 'types/types';
import WinesList from '../components/WinesList';
import * as S from '../styles/categoryPage.styles';

const CategoryPage = (props: CategoryPageProps) => {
  const data = props.data.firebaseCategory;

  return (
    <div>
      <title>{data.title}</title>

      <S.Hero $image={data.image}>
        <S.TitleContainer>
          <S.Title>{data.title}</S.Title>
        </S.TitleContainer>
      </S.Hero>

      <WinesList data={data} />
    </div>
  );
};

export default CategoryPage;

export const query = graphql`
  query getData($categoryId: String) {
    firebaseCategory(categoryId: {eq: $categoryId}) {
      childrenFirebaseWine {
        image
        wine
        wineId
        location
        winery
      }
      title
      categoryId
      image
    }
  }
`;
