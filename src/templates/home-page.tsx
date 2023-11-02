import * as React from 'react';
import {graphql} from 'gatsby';
import {HomepageProps} from 'types/types';
import CategoryCard from '../components/CategoryCard';

const Homepage = (props: HomepageProps) => {
  return (
    <>
      <title>Wine Club</title>
      <CategoryCard data={props.data} />
    </>
  );
};

export default Homepage;

export const query = graphql`
  query {
    allFirebaseCategory {
      nodes {
        categoryId
        title
        image
      }
    }
  }
`;
