import * as React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Services from "../components/services";
import Qualities from "../components/qualities";
import Portfolio from "../components/portfolio";
import About from "../components/about";
import Rework from "../components/rework";
import Reviews from "../components/reviews";
import Clients from "../components/clients";
import Footer from "../components/footer";


// import SEO from "../components/seo"

const IndexPage = () => {
      
  return(
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Веб-дизайн и разработка для бизнеса | Дмитрий Бородин</title>
      </Helmet>
      <Services />
      <Qualities />
      <Portfolio />
      <About />
      <Rework />
      <Reviews />
      <Clients />
      <Footer />
    </Layout>
  );
}

export default IndexPage