import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`studio`, `legale`, `monica`, `barzon`,`avvocato`, 'belluno','penale','civile']}
        title="Avvocato Monica Barzon"
        description="Avvocato Monica Barzon"
      />
        <div className="w-full max-w-3xl">
            <div className="leading-loose">
              <div className="max-w-6xl m-4 p-10">
                  <h1 className="text-black font-medium font-serif text-center text-3xl
                  font-bold mb-4">
                  Studio Legale Avvocato Monica Barzon
                </h1>
                <p className="font-serif text-lg text-justify py-2">
                Lo Studio Legale dell&apos;Avvocato Monica Barzon, con sede a Belluno, è specializzato in ogni area del diritto penale, incluso il diritto penale dell&apos;economia ed il diritto penale tributario.
                </p>
                <p className="font-serif text-lg text-justify py-2">
L&apos;Avvocato Monica Barzon offre quindi assistenza legale in ipotesi di contestazione di ogni fattispecie di reato comune, societario e fiscale.
                </p>
                <p className="font-serif text-lg text-justify py-2">
Lo Studio Legale si occupa anche di diritto civile, di diritto di famiglia e di diritto dell&apos;impresa, avvalendosi della collaborazione di una rete consolidata di professionisti, ciascuno esperto in ogni singolo settore del diritto.
                </p>
                <div className="py-4">
                  <div className="text-center py-2 font-serif">
                  <span className="font-bold">Recapiti</span>
                  <div>
                    Email: avvocato.barzon@gmail.com
                  </div>
                  <div>
                    Pec: monica.barzon@ordineavvocatibellunopec.it
                  </div>
                  <div>
                    Tel.: 0437090503   
                  </div>
                  <div>
                    Fax: 04371830108
                  </div>
                  </div>
                  <div className="text-center py-2 font-serif">
                  </div>
                </div>
              </div>
            </div>
          </div>
    </Layout>
  );
}

export default IndexPage;

/* const contact = ({label,value}) => {
  return (
    <div className="inline-block mr-4">
      <label className="font-bold">{label}</label>
      <span>{value}</span>
    </div>
  );
} */