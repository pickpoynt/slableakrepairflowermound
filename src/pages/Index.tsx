import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import PantryMothInfo from "@/components/landing/PantryMothInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Broomfield CO Pantry Moth Experts";
  const phoneNumber = "(323) 880-1224";
  const location = "Broomfield, CO";
  const zipCodes = "80020, 80021, 80023, 80031, 80038";
  const fullKeyword = "Pantry Moth Exterminator Broomfield";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": firmName,
    "image": "/4.jpeg",
    "@id": "https://pantrymothexterminatorbroomfield.vercel.app/",
    "url": "https://pantrymothexterminatorbroomfield.vercel.app/",
    "telephone": "3238801224",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Broomfield",
      "addressLocality": "Broomfield",
      "addressRegion": "CO",
      "postalCode": "80020",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.9205,
      "longitude": -105.0867
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
      { "@type": "City", "name": "Broomfield" },
      { "@type": "PostalCode", "name": "80020" },
      { "@type": "PostalCode", "name": "80021" },
      { "@type": "PostalCode", "name": "80023" },
      { "@type": "PostalCode", "name": "80031" },
      { "@type": "PostalCode", "name": "80038" }
    ],
    "description": `Professional ${fullKeyword}. Specialized pheromone targeting, structural sanitation, and IGR protocols in ${location} ${zipCodes}. Expert 24/7 emergency dispatch for Indian Meal Moth infestations.`
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{`${fullKeyword} | ${firmName} | ${phoneNumber} | ZIP: ${zipCodes}`}</title>
        <meta name="description" content={`Expert ${fullKeyword}. Specialized pheromone cycle disruption, structural flushing, and organic growth regulators in ${location}. Call ${phoneNumber} now for immediate dispatch. Serving ${zipCodes}.`} />
        <meta name="keywords" content={`${fullKeyword}, pantry moth removal Broomfield CO, Indian Meal Moth exterminator Front Range, emergency insect control Colorado, 80020 moth service`} />
        <link rel="canonical" href="https://pantrymothexterminatorbroomfield.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Header />
      <main>
        <Hero
           title={
            <>
              Pantry Moth Exterminator <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Broomfield CO</span>
            </>
          }
          subtitle="Broomfield CO's specialized pantry moth elimination experts. We deploy advanced pheromone targeting, structural sanitation protocols, and biological growth regulators to completely eradicate infestations from your food storage — 24/7."
          image="/4.jpeg"
          overlayImage="/1.jpeg"
          badge="BROOMFIELD CO PANTRY MOTH EXPERTS"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <PantryMothInfo />
        <Contact />
      </main>
      <RandomLinks />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
