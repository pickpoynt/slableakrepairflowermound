import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost for pest control to get rid of fleas?",
    a: "The cost of professional flea pest control in North Brooksville, FL typically ranges from $75 to $400 per treatment, depending on the size of your home and the severity of the infestation. Most homeowners will pay between $100 and $270 for a standard one-time treatment. If your infestation is severe or has spread to multiple rooms, the cost may be on the higher end. Some companies offer bundled packages that include a follow-up visit within 30 days, which can improve cost efficiency. Keep in mind that treating only the home without addressing your pets simultaneously is often ineffective — a fully coordinated strategy tackling indoor areas, pet bedding, and outdoor zones delivers the most value. When you call (323) 880-1224, our North Brooksville specialists will assess your specific situation and give you a clear, transparent breakdown before any work begins."
  },
  {
    q: "How much does pest control charge to get rid of fleas?",
    a: "Pest control companies in the North Brooksville area typically charge between $100 and $300 for initial flea treatments. Factors that influence pricing include the square footage treated, the type of chemical used (residual sprays vs. insect growth regulators), and whether outdoor spaces require treatment in addition to indoor areas. Some providers charge a flat rate for single-family homes, while others use a per-room or per-square-foot pricing model. Our North Brooksville flea control experts believe in transparent, upfront pricing — there are no hidden fees or 'estimates' that balloon after the service. We provide a thorough assessment before any work begins. Our goal is to make professional flea elimination accessible without sacrificing quality. Call (323) 880-1224 to speak directly with a licensed specialist who can give you an accurate quote based on your specific property and infestation severity."
  },
  {
    q: "What kills 100% of fleas?",
    a: "Achieving 100% flea elimination requires a multi-pronged strategy targeting all four life stages: eggs, larvae, pupae, and adults. Insect growth regulators (IGRs) like methoprene and pyriproxyfen prevent flea eggs and larvae from maturing into biting adults, while adulticides such as permethrin and pyrethrin kill existing adult fleas on contact. Professional-grade steam cleaning and vacuuming are also essential steps, as high heat kills eggs and larvae physically. No single product achieves 100% results on its own — combining IGRs with adulticides, thorough vacuuming, pet treatment, and a follow-up visit after 14 days is the accepted gold standard. This multi-step approach is what our North Brooksville flea control team deploys on every job, ensuring that even resistant flea populations are completely eradicated. Results typically improve dramatically after 48 hours, with near-total elimination within two weeks of the initial service."
  },
  {
    q: "Is an exterminator worth it for fleas?",
    a: "Absolutely — hiring a professional flea exterminator in North Brooksville is almost always worth the investment compared to the cycle of frustration with over-the-counter products. Store-bought flea sprays and bombs often provide only temporary relief, leaving eggs and pupae untouched in deep carpet fibers, furniture crevices, and under baseboards. These surviving life stages hatch days or weeks later, and the infestation restarts. Professionals use pharmaceutical-grade adulticides combined with insect growth regulators (IGRs) that disrupt the flea's reproductive cycle for months. More importantly, a trained exterminator can identify hidden hotspots that homeowners consistently miss, such as crawl spaces, pet crates, and areas under heavy furniture. The cost of one professional treatment is often less than the cumulative expense of repeated failed DIY attempts. For pet owners especially, the peace of mind and health protection justify every dollar."
  },
  {
    q: "What kills fleas in the house quickly?",
    a: "For immediate relief, professional-grade contact insecticides combined with thorough vacuuming deliver the fastest results. Vacuuming is crucial because it physically removes flea eggs, larvae, and adults from carpet fibers while the vibrations also trigger dormant pupae to hatch — making them vulnerable to insecticides applied right after. Hot steam cleaning carpets and upholstery kills fleas and their eggs on contact with temperatures above 100°F. Boric acid or diatomaceous earth can be dusted into carpets as a supplementary measure, disrupting the exoskeleton of flea larvae. However, the fastest and most comprehensive results come from a professional flea treatment that combines a pyrethrin-based contact spray with an IGR applied in a single visit. Our North Brooksville specialists can typically reduce visible flea activity within 24 to 48 hours of an initial treatment. Call (323) 880-1224 for immediate dispatch."
  },
  {
    q: "Do fleas go away after exterminator?",
    a: "Yes, but the timeline requires patience and proper expectations. After a professional flea treatment, you may still see fleas for up to 14-21 days. This is completely normal and does not mean the treatment has failed. Fleas in the pupal stage are encased in a cocoon-like casing that is highly resistant to insecticides — they simply cannot be killed chemically while in this stage. They will eventually emerge from their cocoons, contact the treated surfaces, and die within hours. The insect growth regulators (IGRs) applied by professional technicians prevent any surviving eggs and larvae from maturing into reproducing adults, steadily collapsing the flea population. Every generation that hatches will be unable to reproduce, so the colony dies out within weeks. Continuing to vacuum daily after treatment accelerates the process significantly by stimulating pupae to emerge sooner. A follow-up treatment is typically scheduled 14-21 days after the initial visit."
  },
  {
    q: "How long will fleas last in a house?",
    a: "Without treatment, fleas can persist in a home for many months — sometimes over a year. A single female flea can lay up to 50 eggs per day, and those eggs can hatch in as little as 2 days under warm, humid conditions like those found in North Brooksville, FL. The pupal stage is the most resilient and can remain dormant for up to 5 months, waiting for vibrations, heat, and CO2 that signal the presence of a host. This means a home that appears flea-free during a period of vacancy can quickly become reinfested when residents return. Fleas introduced by wildlife, like opossums and raccoons common to the North Brooksville area, can also re-establish colonies if outdoor treatment is ignored. Professional intervention combined with pet treatment is the only reliable way to permanently end an infestation, as no natural die-off reliably occurs without treating all life stages."
  },
  {
    q: "How much does Terminix charge for fleas?",
    a: "Terminix, one of the nation's largest pest control chains, typically charges between $150 and $300 for a flea treatment visit, though prices vary significantly by region and home size. Their pricing model usually involves a pest control plan rather than a one-time service, which means you may be enrolled into an annual contract starting around $400-$600 per year. While franchise-based companies like Terminix offer brand recognition, local and regional pest control specialists in North Brooksville often provide more personalized service at competitive rates without mandatory annual contracts. Our North Brooksville flea control team offers transparent, single-visit pricing with optional follow-up plans — not locked-in subscription models. We encourage homeowners to compare services on value delivered, not just brand name. Call us at (323) 880-1224 to learn more about our flea treatment packages for the North Brooksville, FL 34601 area."
  },
  {
    q: "How do professionals get rid of fleas in the house?",
    a: "Professional flea exterminators follow a systematic, multi-stage process designed to eliminate fleas at every life stage. First, a licensed technician conducts a thorough property inspection to identify infestation hotspots — high-traffic pet areas, bedding zones, carpeted rooms, and any outdoor areas where wildlife may have introduced fleas. Next, the technician applies a combination product containing a fast-acting adulticide (to kill existing adults immediately) and an insect growth regulator — IGR — that prevents immature fleas from developing into biting, breeding adults. This two-pronged formula provides immediate knockdown while delivering a residual effect that lasts for weeks. Furniture is moved where possible, and treatment extends under baseboards, along wall edges, and into carpet fibers. A follow-up visit 14-21 days later targets any pupae that have since hatched. Homeowners are also advised on pet treatment and post-service vacuuming protocols to maximize effectiveness."
  },
  {
    q: "How long does it take pest control to get rid of fleas?",
    a: "In most cases, a professional flea treatment will break the active infestation cycle within 2 to 6 weeks. After the first treatment, you should expect to see a dramatic reduction in visible adult flea activity within 24-48 hours — the adulticide knocks down the immediate population quickly. However, flea pupae encased in cocoons are chemically resistant and will continue to hatch for up to three weeks post-treatment. When they emerge, they contact treated surfaces and die within hours. A follow-up service at the 14-21 day mark targets the final wave of hatching pupae, effectively collapsing the remaining population. By the 4-6 week mark, the vast majority of infestations are fully resolved. Daily vacuuming after treatment significantly speeds up this process by triggering pupae to emerge sooner. Pet treatment performed in parallel with home treatment also dramatically shortens the total resolution time."
  },
  {
    q: "Do it yourself flea extermination?",
    a: "DIY flea extermination is possible for very mild, early-stage infestations but it is extremely difficult to achieve complete eradication without professional-grade products. Over-the-counter flea sprays typically contain lower concentrations of active ingredients and rarely include insect growth regulators, meaning they kill adult fleas without preventing the next generation from developing. Foggers and flea bombs are popular but have significant drawbacks — they do not penetrate into crevices and carpet bases where flea eggs and larvae actually live, and they can be hazardous if not used with strict safety precautions. Effective DIY flea elimination requires: thorough vacuuming of all surfaces including furniture; washing all pet bedding and fabrics in hot water; applying a combination spray with both adulticide and IGR from a licensed distributor; and coordinating pet treatment simultaneously. For moderate to severe infestations in the North Brooksville area, professional treatment is almost always more cost-effective in the long run than repeated failed DIY attempts."
  },
  {
    q: "Can I fumigate my house for fleas?",
    a: "Yes, whole-house fumigation — also known as 'tenting' — is an option for flea infestations, but it is generally considered an extreme measure that is rarely necessary for fleas alone. Traditional fumigation uses gas penetrants like sulfuryl fluoride that permeate entire structures and kill all stages of insects within enclosed spaces. While highly effective, fumigation requires residents and pets to vacate the property for 24-72 hours and involves significant preparation such as bagging all food and medications. The cost is substantially higher than standard flea treatments — often $1,000 to $3,000 or more for a standard home. For most flea infestations, even severe ones, a combination of professional spray treatments with IGRs and a follow-up service is sufficient and far less disruptive than fumigation. Our North Brooksville specialists recommend fumigation only as a last resort or when fleas are present alongside other targeted pests. Call (323) 880-1224 to discuss which approach best fits your situation."
  },
  {
    q: "How much does Orkin charge for fleas?",
    a: "Orkin, like Terminix, is a national franchise chain with pricing that varies significantly by location and service plan. Generally, Orkin charges between $175 and $350 for a standard flea treatment visit, with the cost depending on your home's square footage and the extent of the infestation. Orkin typically sells pest control as an ongoing plan — often ranging from $400 to $700 per year — rather than a standalone visit. Their model includes quarterly follow-up services for a variety of pests. For homeowners in North Brooksville, FL who specifically need flea control, paying for a broad annual pest plan may not offer the best value if fleas are the primary concern. Local flea control specialists often provide faster response times and more targeted, personalized service. Our North Brooksville team focuses exclusively on delivering the best outcomes for your specific flea issue, without locking you into unnecessary annual commitments. Call (323) 880-1224 for a direct assessment."
  },
  {
    q: "How much does it cost for someone to get rid of fleas?",
    a: "The cost to hire someone to get rid of fleas in a North Brooksville home depends on several variables: the size of the treated area, the severity of the infestation, and whether follow-up visits are needed. For a typical single-family home (1,000-2,000 sq ft), expect to pay between $100 and $300 for a one-time professional treatment. Larger homes or those with severe, multi-room infestations may run $300-$500. Some providers bundle the initial treatment and a mandatory 14-day follow-up at a package price, which is typically $150-$400. It is important to understand what is included in a quote — does it cover outdoor yard treatment, follow-up visits, and a guarantee? Companies that include IGRs in their treatment formula generally deliver better long-term value because they prevent re-infestation from eggs already present in the environment. Always ask specifically what products will be used and whether a return visit is included in the service price."
  },
  {
    q: "How many exterminator visits to get rid of fleas?",
    a: "Most professional flea treatment protocols require a minimum of two visits to achieve complete eradication. The first visit deploys the initial treatment — adulticides combined with insect growth regulators — and provides immediate knockdown of adult fleas. The second visit, typically scheduled 14-21 days later, targets the wave of pupae that emerged and hatched after the first treatment. These pupae were chemically protected in their cocoons during the initial visit, and targeting them after they emerge prevents any remaining population from re-establishing. For severe infestations, or in cases where there is ongoing wildlife pressure (common in North Brooksville due to local wildlife like opossums introducing fleas), a third visit may be warranted. Some homes with pets that frequently go outdoors or properties with significant yard flea pressure may benefit from ongoing monthly or quarterly perimeter treatments to prevent reinfestation. Our team recommends the minimum effective number of visits to achieve lasting results."
  },
  {
    q: "What will 100% get rid of fleas?",
    a: "Achieving 100% flea elimination requires simultaneously addressing every life stage and every potential flea habitat. This means treating the interior of your home with a combination adulticide-plus-IGR product, treating all pets with a veterinarian-recommended flea prevention product, washing all pet bedding and fabric on the hottest setting, treating outdoor areas where pets spend time, and committing to daily vacuuming for 14 days post-treatment to stimulate remaining pupae to hatch. No single product or action guarantees 100% results — it is the combination of these steps executed simultaneously that breaks the cycle completely. Professional pest control significantly increases the likelihood of full elimination because technicians use pharmaceutical-grade products not available to consumers, treat areas that homeowners typically miss, and schedule follow-up visits at the optimal time. Our North Brooksville team provides a systematic, proven elimination protocol designed to achieve exactly this result."
  },
  {
    q: "Is it worth hiring an exterminator for fleas?",
    a: "For any infestation beyond a few individual fleas noticed on a pet, hiring a professional flea exterminator is strongly worth the investment. The economics are compelling: a single professional treatment costs $100-$300 and typically delivers lasting results, while many homeowners spend that much or more on ineffective over-the-counter sprays, bombs, and powders that only provide temporary relief. Beyond the financial aspect, fleas pose real health risks — they are vectors for tapeworms in pets, can transmit murine typhus in humans, and their bites cause allergic dermatitis in sensitive individuals and animals. In Florida's warm, humid climate, flea populations can rebound explosively if not fully eradicated. The peace of mind and health protection that come from verified professional elimination, backed by a follow-up visit and a satisfaction guarantee, genuinely justify the service cost many times over. Call (323) 880-1224 for a direct consultation with our North Brooksville specialists."
  },
  {
    q: "How long do fleas live after fumigation?",
    a: "After professional fumigation or a thorough flea spray treatment, adult fleas that come into contact with treated surfaces typically die within minutes to hours, depending on the type of insecticide used. Pyrethroids, which are fast-acting contact killers, cause nervous system failure in adult fleas rapidly. However, flea pupae — protected inside their resilient cocoons — are not affected by chemical treatments while encased, even after fumigation. These pupae may survive for days to weeks in the environment, emerging after the gas or spray has dissipated. Once they hatch and contact treated surfaces or carpets residually, they die within hours. This is why professional treatments always include insect growth regulators — to ensure that even escaped pupae cannot survive to reproduce. The overall active infestation is typically resolved within 2-4 weeks following a professional treatment, with the final stragglers dying off after the last wave of pupae emerges and contacts the residual insecticide."
  },
  {
    q: "Is it worth getting pest control for fleas?",
    a: "Yes — getting professional pest control for fleas is genuinely worth it, particularly for pet-owning households in North Brooksville, FL where the warm, humid climate creates ideal conditions for year-round flea activity. Fleas breed with extraordinary speed; a single female can produce up to 2,000 offspring in her lifetime, meaning a small problem becomes a full infestation in weeks. Most over-the-counter products fail to address the egg and larval stages, which make up roughly 95% of the total flea population in an infested home. Professionals use combination formulas that attack all life stages simultaneously. From a health standpoint, fleas transmit tapeworms, cause anemia in small pets, and produce allergic reactions in both animals and humans. The cost of treating flea-borne illness or the ongoing misery of a persistent infestation far exceeds the cost of a professional treatment. Our North Brooksville team provides effective, lasting flea elimination — call (323) 880-1224 to get started."
  },
  {
    q: "How much does Terminix charge to spray for fleas?",
    a: "Terminix's pricing for a flea spray service in Florida typically falls between $150 and $350 per visit for a standard residential home, with pricing adjusted based on home size and the scope of the infestation. Unlike some local providers, Terminix generally structures its services as part of an ongoing annual pest control plan rather than standalone one-time visits. Their annual plans typically start at $400-$600 per year and include multiple service visits covering a broad range of pests. If you specifically need flea control, this approach can mean paying for services you don't need. Local flea specialists in North Brooksville often offer more targeted, single-service pricing with no mandatory ongoing contracts. We provide transparent, upfront pricing for flea treatments without pressuring homeowners into annual plan commitments. Our focus is exclusively on resolving your flea problem efficiently and permanently. Contact us at (323) 880-1224 for direct, no-pressure pricing on North Brooksville flea control services."
  },
  {
    q: "How will an exterminator get rid of fleas?",
    a: "A professional flea exterminator follows a structured, science-based protocol to eliminate fleas from your North Brooksville home. The process begins with a detailed inspection to map the infestation — identifying high-activity areas, pet zones, and overlooked harborage points like under furniture and along baseboard edges. The technician then applies a carefully selected combination of products: a fast-acting adulticide to knock down the living adult flea population immediately, and an insect growth regulator (IGR) that prevents immature fleas — eggs and larvae — from developing into reproducing adults. IGRs provide a residual protective effect that lasts for weeks, systematically cutting off the flea's reproductive pipeline. Outdoor perimeter treatments may also be applied to address flea pressure from the yard, especially important in North Brooksville where wildlife vectors are common. A follow-up visit 14-21 days later targets newly emerged pupae. Homeowners receive post-treatment guidance on vacuuming and pet care to maximize results."
  },
  {
    q: "How long does exterminator flea treatment last?",
    a: "Professional flea treatments provide immediate knockdown of adults, with residual effects lasting anywhere from 30 to 90 days depending on the products used. Adulticides like permethrin and bifenthrin leave a residual layer on treated surfaces that continues to kill adult fleas when they walk across it for 4-8 weeks after application. Insect growth regulators are even longer-lasting — products like methoprene remain active in the environment for up to 7 months, preventing any new eggs or larvae from developing during that period. Together, these residual effects create a long protective window that prevents re-infestation. However, a single treatment is rarely the end of the process — the 14-21 day follow-up visit is essential to target pupae that have emerged since the initial treatment. In areas with heavy wildlife flea pressure, quarterly perimeter maintenance can extend protection indefinitely. Our North Brooksville specialists design treatment plans based on your specific risk factors and pet ownership status for optimal, long-lasting results."
  },
  {
    q: "Do it yourself pest control fleas?",
    a: "DIY pest control for fleas can work for extremely minor infestations when executed correctly, but the odds of success are considerably lower than professional treatment for moderate-to-severe cases. The most important step homeowners consistently underestimate is treating every life stage at once — this requires both an adult-killing product (adulticide) and an insect growth regulator available from pest control supply stores, combined with exhaustive vacuuming, hot-water laundering of all fabrics, and simultaneous pet treatment with veterinarian-grade flea prevention. The biggest pitfall of DIY flea control is application — treating only visible areas and missing wall voids, crawl spaces, and deep carpet fibers where the majority of eggs and larvae actually reside. In North Brooksville's warm climate, missed eggs can hatch within days and restart the cycle. Flea foggers sold in stores are particularly unreliable — they distribute product horizontally across a room rather than penetrating into the deep carpet layers where fleas live. For reliable outcomes, professional treatment is strongly recommended."
  }
];

const FleaControlInfo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const half = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, half);
  const secondHalf = faqs.slice(half);

  const FaqItem = ({ item, index }: { item: typeof faqs[0]; index: number }) => (
    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors gap-4"
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
      >
        <h3 className="font-bold text-slate-800 text-base leading-snug m-0">{item.q}</h3>
        {openIndex === index ? (
          <ChevronUp className="w-5 h-5 text-amber-600 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
        )}
      </button>
      {openIndex === index && (
        <div className="px-6 pb-6 bg-white border-t border-slate-200">
          <p className="text-slate-700 leading-relaxed text-sm pt-4 font-medium">{item.a}</p>
        </div>
      )}
    </div>
  );

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.08),transparent_60%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6 font-bold uppercase tracking-widest text-xs">
            Expert Q&A
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
            Knowledge <span className="text-amber-500">Base</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium italic">
            Everything you need to know about flea control in North Brooksville, FL — answered by our licensed pest control specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-6 border-b border-amber-500/20 pb-4">Part 1 — Costs & Effectiveness</h3>
            {firstHalf.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-6 border-b border-amber-500/20 pb-4">Part 2 — Treatment Methods & Results</h3>
            {secondHalf.map((item, i) => (
              <FaqItem key={i + half} item={item} index={i + half} />
            ))}
          </div>
        </div>

        <div className="text-center p-10 bg-amber-600/10 border border-amber-500/20 rounded-[2rem]">
          <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Ready to End Your Flea Problem?</h3>
          <p className="text-slate-400 mb-6 font-medium italic">Our North Brooksville flea elimination specialists are available 24/7. Call now for rapid dispatch.</p>
          <a href="tel:3238801224" className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-bold px-10 py-4 rounded-2xl text-xl transition-all hover:scale-105 shadow-xl shadow-amber-900/30 uppercase tracking-widest">
            (323) 880-1224
          </a>
        </div>
      </div>
    </section>
  );
};

export default FleaControlInfo;
