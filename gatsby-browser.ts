import './src/styles/global.css';

export const onInitialClientRender = () => {
  window.addEventListener(
    'popstate',
    () => (window.location.href = window.location.href),
  );
};
