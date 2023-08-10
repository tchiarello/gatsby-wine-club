import * as React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import CategoryCard from '../components/CategoryCard';

const Homepage = (props) => {
  return (
    <>
      <title>Wine Club</title>
      <Layout>
        <CategoryCard data={props.data} />
      </Layout>
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
