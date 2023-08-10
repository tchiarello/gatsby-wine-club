import * as React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import WinesList from '../components/WinesList';

const CategoryPage = (props) => {
  const data = props.data.firebaseCategory;

  return (
    <div>
      <title>{data.title}</title>

      <Layout>
        <WinesList data={data} />
      </Layout>
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
    }
  }
`;
