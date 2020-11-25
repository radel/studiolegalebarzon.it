import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`studio`, `legale`, `monica`, `barzon`,`avvocato`]}
        title="Avvocato Monica Barzon"
        description="Avvocato Monica Barzon"
      />
        <div className="w-full max-w-lg">
            <div className="leading-loose">
              <div className="max-w-4xl m-4 p-10">
                  <p className="text-black font-medium font-serif text-center text-3xl
                  font-bold">
                  Avvocato Monica Barzon
                </p>
                <p className="font-serif text-lg text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eligendi perspiciatis dolores consequatur officia, magni cumque iure enim, id alias corrupti aut animi architecto obcaecati reiciendis at eaque fugit voluptate!</p>
              </div>
            </div>
          </div>
    </Layout>
  );
}

export default IndexPage;
