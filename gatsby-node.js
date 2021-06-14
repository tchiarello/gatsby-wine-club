const firebase = require("firebase");
require("firebase/firestore");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require("path");

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "wine-club-b6626.firebaseapp.com",
  databaseURL:
    "https://wine-club-b6626-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wine-club-b6626",
  storageBucket: "wine-club-b6626.appspot.com",
  messagingSenderId: "517708796651",
  appId: "1:517708796651:web:e82a9a896b5f34609a64ae",
});

// Requisitar dados para enviar pro graphql do gatsby
exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const allCategories = await firebase
    .firestore()
    .collection("/categories")
    .get();
  const categoriesData = allCategories.docs.map((doc) => doc.data());

  const allWines = await firebase
    .firestore()
    .collection("/wines")
    .limit(1000)
    .get();
  const winesData = allWines.docs.map((doc) => doc.data());

  categoriesData.forEach((category) => {
    actions.createNode({
      ...category,
      categoryId: category.id,
      id: `firebase-categories-${category.id}`,
      parent: null,
      children: winesData
        .filter((wine) => wine.categoryId === category.id)
        .map((wine) => `firebase-wines-${category.id}-${wine.id}`),
      internal: {
        type: "FirebaseCategory",
        contentDigest: createContentDigest(category),
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
        type: "FirebaseWine",
        contentDigest: createContentDigest(wine),
      },
    });
  });
};

// Para criar as URLs dinamicamente
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
      allFirebaseCategory {
        nodes {
          categoryId
        }
      }
      allFirebaseWine {
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
    component: path.resolve("./src/templates/home-page.js"),
  });

  // Categories
  data.allFirebaseCategory.nodes.forEach((category) => {
    actions.createPage({
      path: `/categories/${category.categoryId}`,
      component: path.resolve("./src/templates/category-page.js"),
      context: {
        categoryId: category.categoryId,
      },
    });
  });

  // Wines
  data.allFirebaseWine.nodes.forEach((wine) => {
    actions.createPage({
      path: `/wines/${wine.categoryId}/${wine.wineId}`,
      component: path.resolve("./src/templates/wine-page.js"),
      context: {
        wineId: wine.wineId,
        categoryId: wine.categoryId,
      },
    });
  });
};
