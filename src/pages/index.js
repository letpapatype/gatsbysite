/** @format */

import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"; /* adding images */

// Step 2: Define your component. The top component is the main component.
const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by follwoing the Gatsby Tutorial.</p>
      <StaticImage
        alt="Jovan, in his element...circa 2015"
        src="../images/Wbj2wa3A.png"
      />
    </Layout>
  );
};
// Step 3: Export your component
export default IndexPage;
