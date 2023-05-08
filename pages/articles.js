import Link from "next/link";
import React from "react";

const articles = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Articles regarding to the Diseases
              </h1>
              <div className="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              have not heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <Link href="https://www.ncbi.nlm.nih.gov/books/NBK538209/">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://images.ctfassets.net/4f3rgqwzdznj/vwHTLNForj31KuFsw4VUs/e4ffae5a4f28c13fd0d7db0bd351e338/scratching_eczema_on_arm-1314008576.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                    Disease
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Eczema - StatPearls - NCBI Bookshelf - NIH
                  </h2>
                  <p className="leading-relaxed text-base">
                    Eczema, also known as atopic dermatitis, is a common chronic
                    skin condition that can lead to recurrent infections and
                    poor quality of life ...
                  </p>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2585707/">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2017/1/Acne_skin_because_the_disorders_of_sebaceous_glands_productions-Ocskay_Bence-1000_53addb4e6bf942338911d9441094b582-620x480.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                    Disease
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Acne: more than skin deep - PMC - NCBI
                  </h2>
                  <p className="leading-relaxed text-base">
                    Acne is one of the most prevalent skin conditions affecting
                    teenagers. ... Articles from Postgraduate Medical Journal
                    are provided here courtesy of BMJ ...
                  </p>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <Link href="https://www.cdc.gov/fungal/diseases/ringworm/symptoms.html">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://www.cdc.gov/fungal/diseases/ringworm/images/318301-A_WEB_FungalLandingPages_Ringworm_Symptoms.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                    Disease
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Ringworm | Types of Diseases | Fungal Diseases | CDC
                  </h2>
                  <p className="leading-relaxed text-base">
                    Ringworm is a common skin infection that is caused by a
                    fungus. It’s called “ringworm” because it can cause a
                    circular rash...
                  </p>
                </div>
              </Link>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://tse3.mm.bing.net/th?id=OIP.qKpfx85ucZB1HaBpDvASgwHaEK&pid=Api&P=0"
                  alt="content"
                />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                  Disease
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Melanoma: epidemiology, risk factors, pathogenesis, diagnosis
                  and classification
                </h2>
                <p className="leading-relaxed text-base">
                  This article reviews epidemiology, risk factors, pathogenesis
                  and diagnosis of melanoma...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default articles;
