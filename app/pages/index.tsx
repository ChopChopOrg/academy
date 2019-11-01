import React from "react";
import Head from "next/head";

import { ToDo } from "../src/components/ToDo";
import { PageLayout } from "../src/components/PageLayout";

const Index = () => (
  <PageLayout>
    <Head>Todo App</Head>
    <ToDo />
  </PageLayout>
);

// eslint-disable-next-line import/no-default-export
export default Index;
