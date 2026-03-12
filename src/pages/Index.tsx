import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WaterproofingInfo from "@/components/landing/WaterproofingInfo";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const firmName = "Frazer PA Basement Waterproofing Pros";
  const phoneNumber = "(877) 792-1410";
  const location = "Frazer, PA";
  const zipCodes = "19355";
  const fullKeyword = "basement waterproofing near frazer pa";

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>{`${fullKeyword} - ${firmName} - ${phoneNumber} - ${zipCodes}`}</title>
        <meta name="description" content={`${fullKeyword} - Professional basement waterproofing in Frazer, PA. We offer expert foundation repair, sump pump installation, and moisture control. Serving ${zipCodes} and surrounding areas. Call ${phoneNumber} for expert help.`} />
        <meta name="keywords" content="basement waterproofing Frazer PA, foundation repair 19355, French drain installation Frazer, sump pump repair 19355, wet basement fix PA" />
        <link rel="canonical" href="https://basementwaterproofingnearfrazerpa.vercel.app/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": firmName,
            "image": "/1.jpeg",
            "@id": "https://basementwaterproofingnearfrazerpa.vercel.app/",
            "url": "https://basementwaterproofingnearfrazerpa.vercel.app/",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Frazer",
              "addressLocality": "Frazer",
              "addressRegion": "PA",
              "postalCode": "19355",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.0336",
              "longitude": "-75.5530"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Basement Waterproofing and Foundation Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": firmName
            },
            "areaServed": [
              { "@type": "City", "name": "Frazer, PA" },
              { "@type": "PostalCode", "name": "19355" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Waterproofing Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sump Pump Installation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Foundation Crack Repair" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Drainage Systems" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content={`${fullKeyword} - ${firmName}`} />
        <meta property="og:description" content="Professional basement waterproofing and foundation repair in Frazer, PA. Lifetime warranty and guaranteed results. Call (877) 792-1410." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://basementwaterproofingnearfrazerpa.vercel.app/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Basement Waterproofing <br />
              <span className="text-[#FFD700] drop-shadow-sm uppercase tracking-tighter">Near Frazer PA</span>
            </>
          }
          subtitle="Frazer's premier foundation specialists. We provide rapid-response diagnostics and professional waterproofing to secure your basement today — guaranteed."
          image="/2.jpeg"
          overlayImage="/4.jpeg"
          badge="FRAZER PA WATERPROOFER"
          phone="8777921410"
        />
        <Services />
        <WhyUs />
        <WaterproofingInfo />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
