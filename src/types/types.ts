export interface DataQuery {
  allFirebaseCategory: {
    nodes: {
      categoryId: String;
    }[];
  };
  allFirebaseWine: {
    nodes: {
      wineId: String;
      categoryId: String;
    }[];
  };
}
