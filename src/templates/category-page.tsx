import * as React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Header from '../components/Header';
import WineCard from '../components/Card';

const Container = styled.div`
  padding: 10px 10px 100px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

const WinesContainer = styled.div`
  max-width: 950px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 20px;
  row-gap: 80px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 500px;
    justify-content: center;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export default function CategoryPage(props) {
  const data = props.data.firebaseCategory;
  return (
    <div>
      <Header />

      <Container>
        <Title>{data.title}</Title>
        <WinesContainer>
          {data.childrenFirebaseWine.map((wine, index) => (
            <WineCard key={index} categoryId={data.categoryId} {...wine} />
          ))}
        </WinesContainer>
      </Container>
    </div>
  );
}

// $categoryId: String = context da createPages
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
    }
  }
`;
