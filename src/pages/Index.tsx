import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BedBugInfo from "@/components/landing/BedBugInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Zebulon NC Bed Bug Exterminator Experts";
  const phoneNumber = "(323) 880-1224";
  const location = "Zebulon, NC";
  const zipCodes = "27597, 27562, 27502, 27587, 27529, 27603";
  const fullKeyword = "Bed bug exterminator Zebulon NC";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://bedbugexterminatorzebulonnc.vercel.app/",
    "url": "https://bedbugexterminatorzebulonnc.vercel.app/",
    "telephone": "3238801224",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zebulon",
      "addressLocality": "Zebulon",
      "addressRegion": "NC",
      "postalCode": "27597",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.8257,
      "longitude": -78.3244
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
      { "@type": "City", "name": "Zebulon, NC" },
      { "@type": "PostalCode", "name": "27597" },
      { "@type": "PostalCode", "name": "27562" },
      { "@type": "PostalCode", "name": "27502" },
      { "@type": "PostalCode", "name": "27587" },
      { "@type": "PostalCode", "name": "27529" },
      { "@type": "PostalCode", "name": "27603" }
    ],
    "description": `Professional ${fullKeyword}. Expert bed bug heat treatment and elimination in ${location} ${zipCodes}.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber} | ZIP: ${zipCodes}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. Certified bed bug heat treatment and total elimination in ${location}. Call ${phoneNumber} now for 24/7 rapid dispatch. Serving ZIP codes ${zipCodes}.`} />
        <meta name="keywords" content={`${fullKeyword}, bed bug heat treatment Zebulon NC, bed bug exterminator Wake County, pest control 27597, bed bug removal Johnston County NC`} />
        <link rel="canonical" href="https://bedbugexterminatorzebulonnc.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Bed Bug Exterminator <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Zebulon NC</span>
            </>
          }
          subtitle="Zebulon NC's certified bed bug elimination specialists. We deploy heat treatment and residual chemical protocols to completely eradicate infestations — protecting your family and your sleep — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="ZEBULON NC BED BUG EXPERTS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <BedBugInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
