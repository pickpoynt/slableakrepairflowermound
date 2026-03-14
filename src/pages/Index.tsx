import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CockroachInfo from "@/components/landing/CockroachInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Clarksdale MS Cockroach Exterminator Experts";
  const phoneNumber = "(323) 880-1224";
  const location = "Clarksdale, MS";
  const zipCodes = "38614, 38617, 38633, 38618, 38677, 38606";
  const fullKeyword = "cockroach exterminator Clarksdale MS 38614";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://fleacontrolnorthbrooksville.vercel.app/",
    "url": "https://fleacontrolnorthbrooksville.vercel.app/",
    "telephone": "3238801224",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Clarksdale",
      "addressLocality": "Clarksdale",
      "addressRegion": "MS",
      "postalCode": "38614",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.1998,
      "longitude": -90.5723
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": fullKeyword,
    "provider": {
      "@type": "LocalBusiness",
      "name": firmName
    },
    "areaServed": [
      { "@type": "City", "name": "Clarksdale, MS" },
      { "@type": "PostalCode", "name": "38614" },
      { "@type": "PostalCode", "name": "38617" },
      { "@type": "PostalCode", "name": "38633" },
      { "@type": "PostalCode", "name": "38618" },
      { "@type": "PostalCode", "name": "38677" },
      { "@type": "PostalCode", "name": "38606" }
    ],
    "description": `Professional ${fullKeyword}. Expert roach gel bait, IGR, and residual treatment in ${location} ${zipCodes}.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber} | ZIP: ${zipCodes}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. Certified cockroach gel bait, residual, and IGR elimination in ${location}. Call ${phoneNumber} now for 24/7 rapid dispatch. Serving ZIP codes ${zipCodes}.`} />
        <meta name="keywords" content={`${fullKeyword}, cockroach exterminator Coahoma County MS, roach control Clarksdale 38614, German roach exterminator Mississippi, pest control Clarksdale MS`} />
        <link rel="canonical" href="https://fleacontrolnorthbrooksville.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Cockroach Exterminator <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Clarksdale MS</span>
            </>
          }
          subtitle="Clarksdale MS's certified cockroach elimination specialists. We deploy gel bait, residual insecticides, and IGR protocols to completely eradicate infestations — protecting your family and your home — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="CLARKSDALE MS ROACH EXPERTS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <CockroachInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
