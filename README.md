# Wine Club App

## The Application

The app shows a list of wines, separated by category where each item shows the origin and the rating of the selected wine.

---

### Installation

To install the dependencies:

```bash
$ npm install
```

To start the development server:

```bash
$ npm start
```

To visit the app running locally:

```
http://localhost:3000
```

<!-- To run tests: -->

<!-- ```bash
$ npm run test
``` -->

---

### Technologies used:

- [React](https://reactjs.org/): a component-based JavaScript library for building user interfaces that uses declarative and functional concepts.

- [TypeScript](https://www.typescriptlang.org/): as a strongly typed programming language that builds on JavaScript.

- [GraphQL](https://graphql.org/): a query language for APIs and a runtime for fulfilling those queries with your existing data.

- [Cloud Firestore](https://firebase.google.com/docs/firestore): a NoSQL cloud database to store and sync data for client-side and server-side development.

- [Styled Components](https://styled-components.com/): utilising tagged template literals and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct.

<!-- - [clsx](https://github.com/lukeed/clsx#readme): a utility for constructing className strings conditionally. -->

<!-- - [Testing Library](https://testing-library.com/): a simple and complete testing utilities that encourage good testing practices. -->

---

### Folders organization

- `components`: contains sub-components of pages. They either break down the functionality of such pages, or are extracted for code reuse between different pages.

- `pages`: contains the app's pages. Components inside this file become pages automatically with paths based on their file name.

- `templates`: contains templates for programmatically creating pages with dynamic URLs.

---

### Firebase

The firebase data integration happens on the file `gatsby-node.ts`. Code in the this file is run once in the process of building the site. You can use its APIs to create pages dynamically, add data into GraphQL, or respond to events during the build lifecycle.

1. `graphql`: query GraphQL API.

2. `actions`: Gatsby uses Redux internally to manage state. This object contains the functions and these can be individually extracted by using ES6 object destructuring.

- `createNode`: create a new node to generate queries in graphql.

  - `id`: the node’s ID. Must be globally unique.
  - `parent`: the ID of the parent’s node. If the node is derived from another node, set that node as the parent. Otherwise it can just be null.
  - `children`: an array of children node IDs. It creates `childrenFirebaseWine` on graphql application.
  - `internal`: [object]
    - `type`: create a type on graphql.
    - `contentDigest`: the digest for the content of this node. Helps Gatsby avoid doing extra work on data that hasn’t changed.

<br/>

- `createPages`: create pages dynamically.
  - `path`: any valid URL. Must start with a forward slash.
  - `component`: the absolute path to the component for this page.
  - `context`: context data for this page. Passed as props to the component `this.props.pageContext` as well as to the graphql query as graphql arguments.

---

<!-- ### Tests

My main idea was to do E2E tests with Cypress, however, I was running out of time and I focused on testing isolated components instead.

I wrote a few component tests using vitest and react testing library. I tried to use jest but it seems it has some issues and limitations with vite. They seems to have pretty much the same syntax.

I wrote tests for:

- `Button`
- `TextField`
- `StockCard` -->
