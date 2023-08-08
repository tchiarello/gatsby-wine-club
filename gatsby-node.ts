import type {GatsbyNode} from 'gatsby';
import dotenv from 'dotenv';
import path from 'path';
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {DataQuery} from 'types/types';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const sourceNodes: GatsbyNode['sourceNodes'] = async ({
  actions,
  createContentDigest,
}) => {
  const allCategories = await collection(db, 'categories');
  const categoriesSnapshot = await getDocs(allCategories);
  const categoriesData = categoriesSnapshot.docs.map((doc) => doc.data()); // returns a json

  const allWines = await collection(db, 'wines');
  const winesSnapshot = await getDocs(allWines);
  // const allWines = await firebase
  //   .firestore()
  //   .collection('/wines')
  //   .limit(1000)
  //   .get();
  const winesData = winesSnapshot.docs.map((doc) => doc.data());

  // cria nodes gatsby para gerar queries no graphql
  categoriesData.forEach((category) => {
    actions.createNode({
      ...category,
      categoryId: category.id,
      id: `firebase-categories-${category.id}`,
      parent: null,
      // cria o childrenFirebaseWine no graphql
      children: winesData
        .filter((wine) => wine.categoryId === category.id) // filtra os vinhos da mesma categoria
        .map((wine) => `firebase-wines-${category.id}-${wine.id}`), // retorna a array de strings - esse id é igual ao id do winesData
      internal: {
        type: 'FirebaseCategory', // cria um tipo no graphql
        contentDigest: createContentDigest(category), // Ajuda Gatsby a evitar trabalho extra em dados que não foram alterados.
      },
    });
  });

  winesData.forEach((wine) => {
    actions.createNode({
      ...wine,
      wineId: wine.id,
      id: `firebase-wines-${wine.categoryId}-${wine.id}`,
      parent: `firebase-categories-${wine.categoryId}`,
      children: [],
      internal: {
        type: 'FirebaseWine',
        contentDigest: createContentDigest(wine),
      },
    });
  });
};

// To create dynamic URLs
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
}) => {
  const {data} = await graphql<DataQuery>(`
    query MyQuery {
      allFirebaseCategory {
        nodes {
          categoryId
        }
      }
      allFirebaseWine(limit: 1000) {
        nodes {
          wineId
          categoryId
        }
      }
    }
  `);

  // Homepage
  actions.createPage({
    path: `/`,
    component: path.resolve('./src/templates/home-page.tsx'),
  });

  // Categories page
  data.allFirebaseCategory.nodes.forEach((category) => {
    actions.createPage({
      path: `/categories/${category.categoryId}`,
      component: path.resolve('./src/templates/category-page.tsx'),
      context: {
        categoryId: category.categoryId, // para resgatar o valor e fazer a query na pagina. Vem como parametro na query do graphql
      },
    });
  });

  // Wine page
  data.allFirebaseWine.nodes.forEach((wine) => {
    actions.createPage({
      path: `/wines/${wine.categoryId}/${wine.wineId}`,
      component: path.resolve('./src/templates/wine-page.tsx'),
      context: {
        wineId: wine.wineId,
        categoryId: wine.categoryId,
      },
    });
  });
};
