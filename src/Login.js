import React from "react";
import { Layout } from './components/Layout.js';
import { UncontrolledFormDom } from './components/Form.js';
import { Back } from './components/Back.js';

export default function Login() {
    return (
      <Layout title="Innskráning">
        <UncontrolledFormDom />
        <Back />
      </Layout>
    )
}