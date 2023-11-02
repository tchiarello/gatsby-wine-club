import './src/styles/global.css';
import React from 'react';
import type {GatsbyBrowser} from 'gatsby';
import Layout from './src/components/Layout';

export const onInitialClientRender = () => {
  window.addEventListener(
    'popstate',
    () => (window.location.href = window.location.href),
  );
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
