require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const firebase = require("firebase");
require("firebase/firestore");
const path = require("path");

// inicializa o banco de dados do firebase
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

// Os plug-ins de origem “fornecem” dados de locais remotos ou locais para o que Gatsby chama de nodes.
// Os plug-ins de origem convertem dados de qualquer origem em um formato que Gatsby pode processar.
// Requisitar dados externos de apis diferentes para enviar pro graphql do gatsby
exports.sourceNodes = async ({ actions, createContentDigest }) => {
  const allCategories = await firebase
    .firestore()
    .collection("/categories")
    .get();
  const categoriesData = allCategories.docs.map((doc) => doc.data()); // .data() retorna o json()

  const allWines = await firebase
    .firestore()
    .collection("/wines")
    .limit(1000)
    .get();
  const winesData = allWines.docs.map((doc) => doc.data());

  // cria nodes gatsby para gerar queries no graphql
  categoriesData.forEach((category) => {
    actions.createNode({
      ...category,
      categoryId: category.id,
      id: `firebase-categories-${category.id}`,
      parent: null,
      // cria o childrenFirebaseWine no graphql
      children: winesData // vem todos os vinhos
        .filter((wine) => wine.categoryId === category.id) // filtra os vinhos da mesma categoria
        .map((wine) => `firebase-wines-${category.id}-${wine.id}`), // retorna a array de strings - esse id é igual ao id do winesData
      internal: {
        type: "FirebaseCategory", // cria um tipo no graphql
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

  // Pq a url muda nao podia ser criado na pasta Pages.
  // Ela é reservada para o gatsby que irá criar as paginas automaticamente com base no nome dos arquivos

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
        categoryId: category.categoryId, // para resgatar o valor e fazer a query na pagina. Vem como parametro na query do graphql
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
