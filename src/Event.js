import React from "react";
import { AnEvent } from './components/AnEvent.js';
import { Layout } from './components/Layout.js';

export default function Event() {
    return (
        <Layout title="Viðburður">
            <AnEvent />
        </Layout>
    )
}