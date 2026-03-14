import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How much is bed bug exterminating?",
    a: "Professional bed bug extermination in Zebulon, NC typically costs between $200 and $1,500 depending on the treatment method chosen and the extent of the infestation. A single-room chemical treatment is on the lower end, while whole-home heat treatments can run $1,000 or more for larger properties. Most homeowners with a moderate infestation in a standard 3-bedroom home can expect to pay $400 to $700 for a professional chemical spray service with a mandatory follow-up visit. Heat treatments, while more expensive upfront, often resolve the infestation in a single visit and may cost less overall when you factor in the elimination of the need for multiple follow-up service calls. Always request a detailed quote that specifies what is included — inspection, treatment area, product types, and follow-up visits. Our Zebulon specialists offer transparent pricing with no hidden fees. Call (323) 880-1224 for a direct assessment."
  },
  {
    q: "Do bed bugs stay on your skin after a shower?",
    a: "No — bed bugs do not remain on your skin after showering. Unlike lice or ticks, bed bugs are not parasites that attach to or live on the human body. They feed quickly, typically for 3 to 10 minutes, and then retreat to their hiding places in mattresses, box springs, baseboards, and wall crevices. A shower with hot water will wash off any bed bug that may have temporarily been on your body, and the hot temperature of shower water is lethal to them on contact. However, showering will not resolve a bed bug infestation — the bugs will still be living in your bedroom environment and will continue to bite on subsequent nights. The only effective solution is treating the infested areas of your home with professional extermination methods. If you wake up with unexplained bites in Zebulon, NC, call (323) 880-1224 for a professional bed bug inspection."
  },
  {
    q: "What kills bedbugs instantly?",
    a: "Heat is the most reliable instant killer of bed bugs at all life stages. Temperatures above 113°F kill bed bugs within 90 minutes, while temperatures above 120°F achieve lethal effect within minutes. Professional heat treatments pump heated air throughout an infested room to reach these temperatures in every nook and crevice — including inside mattresses, behind baseboards, and within electrical outlets where bed bugs hide. Steam cleaners operating above 130°F also kill bed bugs instantly on contact and are useful for spot-treating seams of mattresses and box springs. Certain EPA-registered insecticides such as pyrethrin-based contact sprays also cause rapid knockdown of adult bed bugs, though they have limited effect on eggs. Chemical treatments alone are rarely instant — they work over hours to days as bed bugs contact treated surfaces. For the absolute fastest results in Zebulon, NC, combined heat and chemical treatment from a professional is the gold standard."
  },
  {
    q: "What is the hardest pest to get rid of?",
    a: "Bed bugs are widely regarded by pest control professionals as the hardest household pest to eliminate — even harder than cockroaches or termites in many cases. This is because bed bugs have developed significant resistance to many common pesticides over decades of exposure, they hide in extremely small and inaccessible spaces that chemical sprays cannot penetrate, and their eggs are notoriously resistant to most insecticides. A single surviving pregnant female bed bug can restart an entire infestation. Additionally, unlike many pests, bed bugs do not consume bait — making bait-based elimination strategies ineffective. Their flattened body shape allows them to hide behind outlet covers, inside picture frames, and deep within furniture joints. Treatment almost always requires multiple visits and a combination of methods. In Zebulon, NC's mixed climate, bed bug populations can remain active year-round, making professional intervention with a multi-method protocol essentially the only reliable path to full eradication."
  },
  {
    q: "Will homeowners insurance cover bed bug removal?",
    a: "In the vast majority of cases, standard homeowners insurance policies do not cover bed bug extermination. Insurance companies classify bed bug infestations as a maintenance issue — something that results from the homeowner's failure to maintain a pest-free home — rather than a sudden and accidental event covered under standard policy language. This means the cost of inspection, treatment, and any damaged property is typically borne entirely by the homeowner. Some travel insurance policies include limited coverage for hotel or short-term rental bed bug incidents, but home policies almost universally exclude it. Renters insurance also generally does not cover bed bug treatment, though landlord-tenant law in North Carolina may impose responsibilities on landlords to address infestations in rental properties. If you are renting in the Zebulon, NC area and have discovered bed bugs, contact your landlord in writing to establish the timeline of discovery. For homeowners, budgeting for professional treatment is the most practical approach — call (323) 880-1224."
  },
  {
    q: "Can I exterminate bed bugs myself?",
    a: "DIY bed bug extermination is possible but has an extremely high failure rate, particularly for moderate to severe infestations. Consumer-grade sprays available at hardware stores use lower concentrations of permethrin or pyrethrin and almost never include insect growth regulators, meaning they kill adults on contact but leave eggs completely untouched. Flea bombs and foggers are widely misused for bed bugs — they have nearly zero effectiveness because the active chemicals settle on open surfaces while bed bugs hide in deep crevices, seams, and voids entirely out of range. Diatomaceous earth is a safer option and can be effective when applied correctly in thin layers over infested areas, but it requires weeks to show results and must make direct contact with bed bugs. Even the most diligent DIY treatment protocol has a much lower success rate than professional heat treatment. If you have attempted DIY treatment in your Zebulon home and are still seeing bed bugs, call (323) 880-1224 immediately — the longer you wait, the more the population spreads."
  },
  {
    q: "Is it worth getting an exterminator for bed bugs?",
    a: "Absolutely — getting a professional exterminator for bed bugs is not just worth it, it is almost always the only truly effective solution for anything beyond a very early single-room discovery. The financial math is compelling: the average homeowner spends $100-$300 on ineffective over-the-counter products before finally calling a professional, paying for a service that could have been done from the start. The health and mental health toll of living with a bed bug infestation — sleep deprivation, anxiety, and embarrassment — far exceeds the cost of professional treatment. Bed bug bites can cause allergic reactions and secondary skin infections in sensitive individuals. From a practical standpoint, professional exterminators use equipment and chemical formulations not available to consumers, treat in the correct sequence, and schedule follow-up inspections to verify complete eradication. In Zebulon, NC, where bed bug transfer occurs frequently through travel and used furniture, early professional intervention prevents a small problem from becoming a home-wide infestation."
  },
  {
    q: "How many treatments does it usually take to get rid of bed bugs?",
    a: "Most chemical bed bug treatment protocols require a minimum of two to three treatments to achieve complete eradication. The first treatment kills the vast majority of adult bed bugs and nymphs present on contact. However, bed bug eggs are resistant to virtually all chemical insecticides and typically require 7 to 10 days to hatch. A second treatment, scheduled 10 to 14 days after the initial visit, targets the newly hatched nymphs before they can mature and reproduce. For severe infestations, a third visit at the 21-28 day mark is often warranted. Heat treatment, by contrast, often achieves near-complete eradication in a single visit because high temperatures kill eggs, nymphs, and adults simultaneously. The number of treatments also depends on whether the infestation has spread to multiple rooms and whether the homeowner has followed post-treatment instructions, such as encasing mattresses and avoiding bringing untreated items back into the home. Our Zebulon team schedules the minimum number of visits needed for verified clearance."
  },
  {
    q: "How much does Terminix charge to get rid of bed bugs?",
    a: "Terminix, one of the largest national pest control chains, typically charges between $300 and $1,400 for bed bug extermination depending on the property size and treatment method selected. Their standard chemical treatments for a single room may start around $300-$400, while whole-home heat treatments or heavily infested multi-room homes can reach $1,000 to $2,000 or more. Terminix generally bundles bed bug services into an ongoing pest control plan structure, which may include follow-up visits as part of a broader annual contract. Pricing can vary significantly by region and by the specific Terminix franchise. Local bed bug specialists in Zebulon, NC often offer more competitive pricing for targeted service without locking you into broad annual pest control contracts. Our Zebulon bed bug team focuses exclusively on achieving the best outcome for your specific situation with upfront, transparent pricing — no upselling to services you don't need. Call (323) 880-1224 for a direct comparison."
  },
  {
    q: "Can you sleep in your bed after bed bug treatment?",
    a: "After a professional chemical spray bed bug treatment, most homeowners are advised to stay out of the treated room for 4 to 8 hours while surfaces dry and the chemical settles. Once dry, the room is generally considered safe to re-enter, and sleeping in the treated bed is typically acceptable. In fact, many pest control professionals encourage you to continue sleeping in the treated room after the required dry time — because your body heat and carbon dioxide attract surviving bed bugs out of hiding and into contact with the treated surfaces, increasing the effectiveness of the residual insecticide. A mattress encasement should be installed as soon as treatment is complete to trap any remaining bed bugs on or in the mattress. After heat treatment, the room can generally be re-entered immediately once it cools to a safe temperature. Your Zebulon exterminator will provide specific post-treatment instructions that supersede these general guidelines. Always follow the technician's directions for your specific treatment type."
  },
  {
    q: "How much does Orkin charge for bed bugs?",
    a: "Orkin's pricing for bed bug extermination varies by location, property size, and infestation severity, but typically ranges from $400 to $1,500 for standard residential properties. Like Terminix, Orkin usually structures bed bug service as part of a broader pest management plan rather than a standalone one-time service. They offer multiple treatment options including chemical treatments, heat treatments, and combination approaches, each priced differently. Orkin's pricing model often involves an initial inspection fee, treatment cost, and ongoing monitoring visits bundled into a package. For homeowners in Zebulon, NC who specifically need bed bug elimination rather than broad pest management, working with a local specialist focused exclusively on the problem can provide better value and faster response times. Our Zebulon team offers transparent, targeted bed bug extermination pricing without mandatory annual commitments. Call (323) 880-1224 to discuss your specific situation and get an honest assessment of what your case requires."
  },
  {
    q: "Where do bed bugs hide during the day?",
    a: "During daylight hours, bed bugs retreat to tight, dark harborage areas close to where they feed at night — typically within 8 feet of the bed. The most common daytime hiding spots include the seams, tufts, and tags of mattresses and box springs; inside the joints and hollow legs of bed frames; behind headboards mounted to walls; inside nightstand drawers and their joints; behind electrical outlet covers; along the edges of carpeting at baseboards; inside picture frames on bedroom walls; within cracks in wooden furniture; and inside or behind wall-mounted televisions. In severe infestations, bed bugs spread beyond the bedroom into couches, recliners, curtain rods, and even inside books or electronic devices on shelves. They are attracted to warmth and carbon dioxide, which is why furniture and areas close to where humans rest and sleep are their primary harborage zones. Professional inspection in Zebulon, NC identifies all of these hotspots using trained detection methodology. Call (323) 880-1224 for a thorough inspection."
  },
  {
    q: "Do bed bugs come back after extermination?",
    a: "Re-infestation after professional bed bug extermination is possible but is distinct from treatment failure. If bed bugs return after a verified successful treatment, they are almost always being re-introduced from an external source — a visitor's belongings, travel, purchased used furniture, or shared walls in multi-unit housing. Treatment failure — bed bugs returning because the initial treatment did not achieve full eradication — is a different issue and is typically the result of missed hiding spots, incomplete follow-up visits, or prematurely re-introducing untreated items. To prevent re-infestation after treatment in your Zebulon home, use mattress and box spring encasements permanently, inspect luggage after travel, avoid buying used upholstered furniture, and be cautious about items brought in by guests or contractors. In multi-family housing, adjacent unit treatment may be necessary to prevent re-migration through shared walls. Our Zebulon team provides post-treatment guidance and a warranty period to monitor and address any signs of activity promptly."
  },
  {
    q: "Do bed bugs live in pillows and duvets?",
    a: "Yes — bed bugs can and do hide in pillows and duvets, particularly in the seams, zipper areas, and inside the filling if the fabric allows entry. Pillows without protective encasements are particularly vulnerable, as the warmth from your body heat during sleep makes them an attractive harborage site. Down and synthetic duvets both potentially harbor bed bugs in the fabric layers and fill. However, bed bugs in pillows and duvets can be effectively addressed: Washing these items in hot water (above 120°F) and then drying them on the highest heat setting for at least 30 minutes kills all life stages, including eggs. For items that cannot be washed, placing them in a sealed bag and running them through a hot dryer cycle is also effective. After professional treatment, all pillows and duvets should be either laundered at high heat or placed in certified bed bug proof encasements. Do not take pillows and bedding to a laundromat during an active infestation without sealing them in bags first to avoid spreading bed bugs."
  },
  {
    q: "What smells do bed bugs hate?",
    a: "Bed bugs are repelled by several strong odors, including tea tree oil, lavender, peppermint, eucalyptus, and certain nut-based oils like cold-pressed neem oil. Research has also shown that they are deterred by the scent of certain pyrethrin derivatives found in natural insect-repelling plants. However, it is critically important to understand that while these scents may have some mild repellent effect, they are not a reliable treatment method for an active bed bug infestation. Repellent scents may cause bed bugs to scatter to other areas of your home, potentially spreading the infestation rather than eliminating it. They will not kill bed bugs and offer no protection against re-infestation once the scent fades. Some homeowners use lavender sachets or essential oil sprays as a post-treatment precautionary measure, which may have minor preventive benefits. For any active infestation in the Zebulon, NC area, professional extermination using proven insecticides or heat treatment is the only reliable solution. Natural repellents should never be used as a primary or sole treatment strategy."
  },
  {
    q: "Can bed bugs live in your hair?",
    a: "Bed bugs cannot live in human hair. Unlike head lice or crabs, bed bugs are not adapted to navigate through hair, hold on to hair shafts, or survive in the conditions found on the human scalp. They do not have the claw structures needed to grip hair, and the warmth and movement of a scalp make it an inhospitable environment for them to remain. Bed bugs feed at night while their host is stationary and sleeping, then retreat immediately afterward to stationary hiding places nearby. They spend the vast majority of their lives — over 90% — hiding in cracks, crevices, and fabric seams rather than on a host. However, it is possible for a bed bug to crawl through hair during feeding if biting occurs on the scalp or neck area, which can cause the sensation of bugs in the hair. If you feel crawling sensations in your hair, lice are a more likely culprit and should be investigated by a healthcare provider. For suspected bed bug infestations in your Zebulon, NC home, call (323) 880-1224 for a professional inspection."
  },
  {
    q: "What is the fastest way to get rid of bed bugs?",
    a: "The fastest way to get rid of bed bugs is professional whole-room heat treatment, which can eliminate an infestation in a single treatment session of 6 to 8 hours. By raising the temperature of the entire treated space to above 120°F for several hours, heat treatment kills all bed bugs and eggs simultaneously regardless of where they are hiding — inside mattresses, behind baseboards, within furniture joints, and even inside wall voids and electrical outlets. No other method achieves this level of penetration in a single visit. Chemical treatments typically require at least two visits spaced 10 to 14 days apart to address the egg-hatching cycle, making them a slower overall process. For the fastest resolution in Zebulon, NC, contact a licensed heat treatment specialist as soon as you confirm an infestation — the sooner treatment begins, the smaller the population to eliminate. Delaying treatment by weeks while attempting DIY solutions almost always results in a larger, more expensive infestation to address professionally. Call (323) 880-1224 for rapid dispatch."
  },
  {
    q: "What attracts bed bugs to a home?",
    a: "Bed bugs are attracted to homes primarily by the presence of warm-blooded hosts — specifically humans. They detect their hosts through body heat, carbon dioxide exhaled during breathing, and chemical compounds in human skin. They do not distinguish between clean and dirty homes — bed bugs are equally happy in spotless hotel rooms and cluttered apartments. Common entry points that 'attract' bed bugs in the sense of providing access include travel luggage and bags brought back from infested hotels, used furniture especially mattresses and upholstered chairs brought in from outside, clothing and bags carried by visitors who have infestations at their own homes, shared laundry facilities in apartment buildings, and moving boxes that spent time in storage facilities. In Zebulon, NC, proximity to the Research Triangle area means frequent travel and hotel stays raise risk levels for residents. The best prevention is inspecting all items entering your home and using mattress encasements on all beds. If you discover bed bugs, call (323) 880-1224 immediately."
  },
  {
    q: "Is an exterminator worth it for bed bugs?",
    a: "Yes — unequivocally. An exterminator for bed bugs is not merely worth it in financial terms; for most infestations, it is the only approach that reliably works. Bed bugs are resistant to many consumer-grade pesticides, hide in locations that household products cannot reach, and reproduce fast enough to overcome any treatment that doesn't eliminate the eggs. A single untreated female can lay 250-500 eggs in her lifetime, meaning even a 90% successful DIY treatment can result in a population rebound within weeks. Professional exterminators in North Carolina are licensed, carry EPA-registered products at concentrations unavailable to consumers, and deploy field-tested protocols refined through hundreds of jobs. The total life cost of managing a worsening untreated infestation — including sleep loss, medical visits for bite reactions, replacing compromised furnishings, and the eventual professional treatment you will need anyway — far exceeds the upfront cost of early professional intervention. Our Zebulon team provides comprehensive bed bug elimination with verified follow-up. Call (323) 880-1224."
  },
  {
    q: "What are the first signs that you have bed bugs?",
    a: "The earliest warning signs of a bed bug infestation include small, rusty reddish-brown stains on your mattress, box spring, and sheets — these are bed bug fecal spots, which are clusters of digested blood. You may also notice tiny white eggs (about 1mm, the size of a poppy seed) or shed exoskeletons in mattress seams. Bites are another early indicator — bed bugs typically leave groups of small, red, itchy bites on exposed skin, often appearing in a line or cluster on the arms, legs, neck, or shoulders. However, bite responses vary dramatically between people; some individuals show no visible reaction to bed bug bites, making physical inspection of the bedroom more reliable than relying on bite patterns alone. A sweet, musty odor in the bedroom — often described as similar to coriander or almonds — can indicate a larger infestation. Seeing a live bed bug is definitive — they are flat, oval, and reddish-brown, roughly the size of an apple seed. Contact our Zebulon inspection team at (323) 880-1224 for professional confirmation."
  },
  {
    q: "How long does bed bug extermination last?",
    a: "A professional bed bug extermination treatment — when executed correctly with proper follow-up — should deliver permanent results with no bed bug activity returning from the treated population. Chemical treatments with residual insecticides continue to kill newly hatching bed bugs for 4 to 8 weeks after application, and insect growth regulators extend this protective window further by preventing egg development. Heat treatments have an immediate effect with no residual chemical protection, so mattress encasements and vigilance are important post-treatment precautions. The duration of effective protection depends heavily on whether re-infestation from external sources is possible. In single-family homes in Zebulon, NC, a successfully treated infestation should not return unless new bed bugs are introduced. In multi-unit housing, ongoing protection may require periodic monitoring and potential re-treatment of neighboring units. Using mattress and box spring encasements, inspecting luggage after travel, and educating household members about recognition of early signs extends the protection indefinitely. Our Zebulon team offers post-treatment warranty monitoring."
  },
  {
    q: "How fast do bed bugs multiply?",
    a: "Bed bugs multiply with alarming speed under favorable conditions. A single fertilized female bed bug lays between 1 and 5 eggs per day, and up to 250-500 eggs over her lifetime. At room temperature, eggs hatch in 6 to 10 days, and newly hatched nymphs (baby bed bugs) must feed within the first few days to progress through their development. They undergo five nymph stages before reaching adulthood, which can take as little as 5 to 6 weeks under warm conditions. Once adult, they begin mating and the cycle restarts. In a typical home environment, a small initial introduction of just a few bed bugs can grow to hundreds within 3 to 6 months if untreated. In Zebulon, NC's temperate climate, bed bugs remain active and reproductive throughout much of the year. Early detection and treatment is critical — a single-room infestation of 10-20 bugs is far easier and less expensive to eliminate than a whole-home infestation of hundreds. Do not wait for symptoms to worsen; call (323) 880-1224 at the first sign of bed bugs."
  },
  {
    q: "Where do bed bugs hide besides beds?",
    a: "While beds are the most common harborage site, bed bugs hide throughout the bedroom and, in severe infestations, spread to all rooms of the home. Beyond the mattress and box spring, bed bugs commonly hide inside the wooden joints of bed frames and headboards; in and behind nightstands and dressers; behind electrical outlet covers and switch plates; under loose wallpaper or peeling paint; along carpet edges at baseboards; inside curtain rods and folds of drapes; within books and magazines stacked on bedside tables; inside or behind televisions and electronic devices; in sofa and chair cushion seams and underneath furniture in the living room; behind picture frames and wall art; inside clocks; and in clothing left on the floor near sleeping areas. In severe infestations, every room of a home may be affected. Bed bugs also hide in vehicles, particularly in seat cushion seams and under floor mats. Professional inspection in Zebulon, NC uses systematic methods to identify all harborage sites regardless of location. Call (323) 880-1224 for a full-property inspection."
  },
  {
    q: "How many times do you need an exterminator for bed bugs?",
    a: "For chemical treatment protocols, most exterminators in North Carolina recommend a minimum of two to three visits for complete bed bug eradication. The initial treatment addresses existing adults and nymphs. A second visit scheduled 10 to 14 days later targets the new generation of nymphs hatching from eggs that survived the first chemical treatment, as bed bug eggs are chemically resistant. A third optional visit 21 to 28 days after the initial treatment serves as a final verification and addresses any remaining survivors in severe infestation cases. Heat treatment, which reaches temperatures lethal to all life stages including eggs, often resolves an infestation in a single visit, though a follow-up inspection is still recommended. The exact number of required visits depends on the severity of the infestation, whether the infestation is confined to one room or spread throughout the home, and whether post-treatment protocols (encasements, vacuuming, avoidance of untreated items) are followed correctly by the homeowner. Our Zebulon team tailors the service plan to your specific situation."
  },
  {
    q: "Why is it so expensive to get rid of bed bugs?",
    a: "Bed bug extermination is expensive for several legitimate reasons that reflect the real cost of effective elimination. First, bed bugs are among the most labor-intensive pests to treat — thorough treatment requires meticulous inspection and application in dozens of hiding spots in each room, often including moving furniture and treating inside walls. Second, heat treatment equipment, including professional-grade heaters, fans, and monitoring sensors, represents a significant capital investment for pest control companies. Third, two to three service visits are typically required, multiplying labor costs. Fourth, bed bug-specific insecticides, particularly combination products with insect growth regulators, are among the more expensive pesticide formulations available. Fifth, the licensing and continuing education required for bed bug specialists represents an ongoing cost for companies. The consequence of inadequate treatment — a rebound infestation — costs more to address than the original problem, so responsible companies do not cut corners. Our Zebulon team prices fairly relative to the scope of work required to achieve a verified, permanent result. Call (323) 880-1224 for transparent pricing."
  },
  {
    q: "How long can bed bugs live?",
    a: "Adult bed bugs can live remarkably long lives — typically 6 to 12 months under normal conditions, with some studies documenting survival of up to 18 months in optimal environments. In the absence of a host (after a vacation or prolonged absence from a home), adult bed bugs can survive without feeding for 2 to 6 months at room temperature, and some research suggests up to 12 months in cooler conditions. This survival ability is one of the key reasons why simply vacating an infested property does not work as an elimination strategy. Bed bug nymphs require more frequent feeding to progress through their developmental stages but can also survive weeks without a blood meal. Eggs hatch in 6 to 10 days at room temperature. The combination of long adult lifespan, resistance to starvation, and rapid reproductive rate makes bed bugs an extraordinarily persistent pest. In Zebulon, NC homes, this means an untreated infestation does not resolve on its own — it persists and grows. Professional treatment targeting all life stages is the only reliable path to elimination. Call (323) 880-1224."
  },
  {
    q: "What is the success rate of bed bug extermination?",
    a: "The success rate of professional bed bug extermination varies significantly by treatment method. Heat treatment by a licensed professional, when executed correctly with proper monitoring and preparation, achieves success rates of 90 to 100% in a single treatment session. The key variables that affect heat treatment success are whether all items in the room are properly positioned to allow heat penetration and whether the treated space achieves and maintains the required temperature throughout. Chemical treatment protocols achieve success rates of 70 to 90% across two to three visits when using combination products with insect growth regulators, with the remaining cases requiring additional visits. DIY chemical treatments have significantly lower success rates — often below 50% — due to incomplete coverage, improper products, and missing the egg stage. In Zebulon, NC, our licensed technicians use verified protocols with a track record of high first-cycle success. A follow-up inspection at 21 days post-treatment verifies clearance. Cases that require a third visit are addressed within the quoted service scope. Call (323) 880-1224 for a consultation."
  },
  {
    q: "What kills bed bug eggs instantly?",
    a: "Heat is the most reliable instant killer of bed bug eggs. Temperatures above 113°F kill bed bug eggs within 90 minutes; temperatures above 118°F achieve death within 20 minutes; and professional heat treatment temperatures of 120-130°F kill eggs essentially instantly. This is why heat treatment is considered the gold standard — it is the only method that reliably destroys eggs in a single pass. Steam cleaning at temperatures above 130°F also kills eggs on direct contact and is highly effective for spot-treating mattress seams and upholstered furniture. Chemical insecticides are generally ineffective against bed bug eggs — this is one of the most significant limitations of chemical-only treatment protocols and the primary reason multiple visits are required. A notable exception is certain neuropesticides and insect growth regulators (IGRs) like methoprene that, while not killing eggs outright, prevent hatched nymphs from developing into reproducing adults, effectively cutting off the reproductive pipeline. Our Zebulon professionals use the combination of methods best suited to your infestation scope. Call (323) 880-1224 for a professional assessment."
  }
];

const BedBugInfo = () => {
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
            Everything you need to know about bed bug extermination in Zebulon, NC — answered by our licensed pest control specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-6 border-b border-amber-500/20 pb-4">Part 1 — Costs & Common Questions</h3>
            {firstHalf.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-6 border-b border-amber-500/20 pb-4">Part 2 — Treatment, Biology & Results</h3>
            {secondHalf.map((item, i) => (
              <FaqItem key={i + half} item={item} index={i + half} />
            ))}
          </div>
        </div>

        <div className="text-center p-10 bg-amber-600/10 border border-amber-500/20 rounded-[2rem]">
          <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Ready to End Your Bed Bug Problem?</h3>
          <p className="text-slate-400 mb-6 font-medium italic">Our Zebulon NC bed bug elimination specialists are available 24/7. Call now for rapid dispatch.</p>
          <a href="tel:3238801224" className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-bold px-10 py-4 rounded-2xl text-xl transition-all hover:scale-105 shadow-xl shadow-amber-900/30 uppercase tracking-widest">
            (323) 880-1224
          </a>
        </div>
      </div>
    </section>
  );
};

export default BedBugInfo;
