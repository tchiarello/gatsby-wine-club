import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header";
import styled from "styled-components";
import WineCard from "../components/WineCard";

const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 10px 10px 100px;
`;

const WineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  padding-bottom: 80px;
  margin-bottom: 100px;
`;

const Image = styled.img`
  margin-right: 70px;
`;

const WineTitle = styled.h1`
  font-size: 50px;

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const Winery = styled.p`
  font-size: 24px;
  margin-bottom: 15px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

const WineLocation = styled.span`
  font-size: 22px;
  color: #939393;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

const Rating = styled.p`
  font-size: 22px;
  margin-top: 115px;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }

  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

const SimilarWinesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 500px;
    justify-content: center;
    row-gap: 80px;
  }

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export default function WinePage({ data }) {
  const { firebaseWine, similarWines } = data;

  return (
    <div>
      <Header />
      <Container>
        <WineContainer>
          <Image src={firebaseWine.image} width="130" />
          <div>
            <WineTitle>{firebaseWine.wine}</WineTitle>
            <Winery>{firebaseWine.winery}</Winery>
            <WineLocation>{firebaseWine.location}</WineLocation>
            <Rating>
              {firebaseWine.rating.average} / 5.0 of{" "}
              {firebaseWine.rating.reviews}
            </Rating>
          </div>
        </WineContainer>

        <div>
          <SectionTitle>We think you'd also like</SectionTitle>

          <SimilarWinesContainer>
            {similarWines.nodes.map((wine, index) => (
              <div key={index}>
                <WineCard {...wine} />
              </div>
            ))}
          </SimilarWinesContainer>
        </div>
      </Container>
    </div>
  );
}

export const query = graphql`
  query getWine($wineId: Int, $categoryId: String) {
    firebaseWine(categoryId: { eq: $categoryId }, wineId: { eq: $wineId }) {
      wine
      winery
      wineId
      rating {
        reviews
        average
      }
      location
      image
    }

    similarWines: allFirebaseWine(
      filter: { categoryId: { eq: $categoryId }, wineId: { nin: [$wineId] } }
      sort: { fields: rating___average, order: DESC }
      limit: 2
    ) {
      nodes {
        wine
        wineId
        winery
        image
        categoryId
        location
      }
    }
  }
`;
