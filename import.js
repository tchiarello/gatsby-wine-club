// cria valores iniciais para o firestore e deve ser rodado apenas uma vez

const admin = require("firebase-admin");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const serviceAccount = {
  type: "service_account",
  project_id: "wine-club-b6626",
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY,
  client_email:
    "firebase-adminsdk-a9ihb@wine-club-b6626.iam.gserviceaccount.com",
  client_id: "101064308884283380596",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-a9ihb%40wine-club-b6626.iam.gserviceaccount.com",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore(); // retorna um objeto com métodos do firestore

const dessert = require("./data/dessert.json");
const port = require("./data/port.json");
const reds = require("./data/reds.json");
const rose = require("./data/rose.json");
const sparkling = require("./data/sparkling.json");
const whites = require("./data/whites.json");

// slice: Error: 3 INVALID_ARGUMENT: maximum 500 writes allowed per request
const wines = [
  ...dessert.map((wine) => ({ ...wine, categoryId: "dessert" })).slice(0, 30), //doc
  ...port.map((wine) => ({ ...wine, categoryId: "port" })).slice(0, 30),
  ...reds.map((wine) => ({ ...wine, categoryId: "reds" })).slice(0, 30),
  ...rose.map((wine) => ({ ...wine, categoryId: "rose" })).slice(0, 30),
  ...sparkling
    .map((wine) => ({ ...wine, categoryId: "sparkling" }))
    .slice(0, 30),
  ...whites.map((wine) => ({ ...wine, categoryId: "whites" })).slice(0, 30),
];

const categories = [
  { id: "dessert", title: "Dessert Wines" }, // doc
  { id: "port", title: "Port Wines" },
  { id: "reds", title: "Red Wines" },
  { id: "rose", title: "Rose Wines" },
  { id: "sparkling", title: "Spakling Wines" },
  { id: "whites", title: "White Wines" },
];

const collections = {
  wines, // key
  categories,
};

// Adiciona dados em massa
const batch = db.batch();

// retorna as keys de um objeto como array de string
// ['wines', 'categories']
Object.keys(collections).forEach((key) => {
  const collection = collections[key];

  collection.forEach((doc) => {
    const docRef = db.collection(key).doc();
    batch.set(docRef, doc);
  });
});

batch.commit();
