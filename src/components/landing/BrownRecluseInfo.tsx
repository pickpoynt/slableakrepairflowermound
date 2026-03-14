import React from 'react';
import { BookOpen, HelpCircle, ShieldCheck, Phone } from "lucide-react";

/**
 * BrownRecluseInfo Component - "Expert Knowledge Base" section
 * Contains 24 deep-content Q&As (>150 words each) in a 2-column layout.
 * Questions are formatted as <h3> for SEO.
 * Answer backgrounds are solid white for readability.
 * Includes a nice-looking call button in every FAQ item.
 */

interface FAQItemProps {
  item: { q: string; a: string };
  index: number;
  key?: any;
}

const FAQItem = ({ item, index }: FAQItemProps) => (
  <div className="mb-8 p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-amber-500/30 transition-all duration-300">
    <div className="flex items-start gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
        <HelpCircle className="w-5 h-5 text-amber-600" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-amber-700 transition-colors uppercase tracking-tight">
        {item.q}
      </h3>
    </div>
    <div className="pl-14">
      <div className="text-slate-600 leading-relaxed font-normal text-sm whitespace-pre-line p-6 bg-slate-50/50 rounded-2xl italic border-l-4 border-amber-500 mb-6 font-sans">
        {item.a}
      </div>
      <a 
        href="tel:3238801224" 
        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-amber-900/20 uppercase tracking-tighter"
      >
        <Phone className="w-4 h-4" />
        CALL A BROOMFIELD SPIDER EXPERT NOW
      </a>
    </div>
  </div>
);

const BrownRecluseInfo = () => {
  const faqs = [
    {
      q: "How much is an exterminator for brown recluse spiders?",
      a: "The cost for professional brown recluse spider extermination in Broomfield typically ranges from $300 to $700 for an initial intensive treatment. This investment reflects the complexity of the task; brown recluse spiders are notoriously resistant to standard surface sprays and require a specialized structural approach. A comprehensive service usually includes a detailed attic and basement audit, precision void injections where spiders aggregate, and the installation of long-term residual barriers and monitoring hubs. \n\nIn the Broomfield area, costs can vary based on the level of infestation and the structural complexity of the home (such as finished versus unfinished basements). While general pest control may offer cheaper rates, they often fail to address the core of the recluse population which hides deep within wall cavities. Our specialized service provides a definitive resolution by targeting the spiders' biology and the home's architecture. Compared to the recurring costs and mental stress of failed DIY attempts, hiring a specialist ensures your home is cleared effectively and your family is protected from the risk of bites."
    },
    {
      q: "What time of year is worst for brown recluse spiders?",
      a: "In Broomfield, CO, the 'worst' time for brown recluse spider activity typically spans from late spring through early autumn, specifically between May and September. During these warmer months, the spiders are most active as they search for mates and expand their hunting nodes. This is also when most homeowners in the 80020 area report sightings, as the spiders are driven to move through the interior spaces of the home in search of food or hydration. \n\nHowever, it is a dangerous misconception to assume they disappear during the Colorado winter. While their activity levels drop as temperatures cool, brown recluse spiders are extremely hardy and will simply retreat deeper into the heated wall voids, attics, and crawlspaces of your home. They don't die off; they just become dormant until the sun warms the structure. This is why our Broomfield specialists recommend year-round monitoring and seasonal void flushes to ensure the population doesn't rebound when the temperatures rise. The 'worst' time is when they are active, but the most important time for treatment is before they have a chance to multiply."
    },
    {
      q: "Can an exterminator get rid of brown recluse spiders?",
      a: "Yes, a specialized exterminator can definitely get rid of brown recluse spiders, but it requires much more than a standard 'baseboard spray.' Our Broomfield team utilizes a methodology known as 'Integrated Structural Abatement.' This involves more than just chemicals; it is a tactical approach that includes structural modification (mechanical exclusion), habitat disruption, and the use of laboratory-grade micro-encapsulated residuals that stick to the spiders' legs and are groomed into their system. \n\nGeneralist pest control companies often struggle with brown recluse spiders because they don't address the hidden reservoirs in wall voids and attic insulation. We use high-pressure dusters and specialized aerosols that 'fog' into the spaces where spiders hide. By treating the *structure* rather than just the *surfaces*, we break the population's core nodes. In Broomfield, we have handled some of the most persistent recluse infestations by identifying the exact structural weaknesses allowing them to thrive. When you hire our specialists, you aren't just getting a spray; you are getting a comprehensive engineering solution to a biological problem."
    },
    {
      q: "Does one brown recluse mean an infestation?",
      a: "Finding a single brown recluse spider in your Broomfield home does not always mean you have a full-blown infestation, but it is a major 'red flag' that should never be ignored. Because these spiders are reclusive by nature and avoid light and human activity, seeing one in the open often suggests that the hidden 'prime real estate' in your walls and attic may already be occupied. Spiders don't usually travel long distances; if there is one, there is likely a source node nearby. \n\nIn the Colorado Front Range environment, a single adult female can produce several hundred eggs over her lifespan, which can quickly turn a few 'scout' spiders into a entrenched population. Furthermore, brown recluse spiders are often transported into homes via boxes, firewood, or furniture. Our Broomfield technicians provide a 'Node Mapping' service to determine if the spider you found was a solitary hitchhiker or the tip of a much larger iceberg. We use specialized sticky traps and thermal scanning to identify hidden congregation points, giving you the clarity needed to decide if a full architectural treatment is necessary."
    },
    {
      q: "How to get rid of brown recluse spiders fast?",
      a: "To get rid of brown recluse spiders as fast as possible in a Broomfield emergency, you need two concurrent actions. Action One: Immediate 'Mechanical Extraction.' We use specialized HEPA-filtered vacuums to physically remove the spiders currently in your living areas, closets, and basements. Action Two: 'Direct Node Flushing.' This involves injecting high-velocity, non-repellent aerosols into the light fixtures, electrical plates, and baseboard gaps where the spiders are currently nesting. \n\nThis two-pronged attack stops the immediate movement of spiders and kills the visible population instantly. While hardware store traps might take weeks to catch five spiders, our 'Structural Reset' protocols target the core of the colony in a single visit. In Broomfield, where we provide 24/7 dispatch, we can often have a specialist at your door within hours. We understand that finding a recluse in your bedroom is causing extreme distress, and we treat it with the appropriate urgency. Speed in spider control comes from addressing the hidden 'nodes' directly—not just chasing them on the walls. We provide 'Instant-Knockdown' results that allow you to feel secure in your home the very same night."
    },
    {
      q: "What is the hardest pest to get rid of?",
      a: "In the context of 'Structural Resilience' in Broomfield, the brown recluse spider is frequently ranked as the hardest pest to eliminate. Unlike ants or roaches that are attracted to bait, brown recluse spiders are predators that only eat live or freshly dead insects, making 'baiting' them completely impossible. Furthermore, their long legs allow them to walk over many liquid sprays without their bodies ever touching the poison, rendering standard pesticides ineffective. \n\nThey also have a unique biological resilience—they can survive for nearly a year without food or water by entering a state of semi-dormancy. This 'zero-margin-for-error' requirement is why so many Broomfield residents struggle with them for decades. Our professional team provides the 'Arachnological Advantage'—using micro-encapsulated particles that are specifically engineered to stick to the spider's hydrophobic exoskeleton. We take the difficulty out of the equation for you, transforming a high-risk infestation into a managed, safe environment. We specialize in the 'hard' jobs that make general pest control look like a temporary fix."
    },
    {
      q: "What is the natural enemy of the brown recluse spider?",
      a: "In the natural world outside your Broomfield home, several predators target the brown recluse spider, including centipedes, large wolf spiders, and even certain types of wasps. However, it is a bad idea to rely on these 'natural enemies' to solve a structural infestation. Introducing or tolerating other pests just to manage a spider problem is simply replacing one nuisance with another, and research has shown that these predators can never keep up with the explosive reproductive rates of an established recluse colony. \n\nInside a home, the brown recluse has virtually no natural enemies that can meaningfully reduce its numbers. In fact, their preference for dry, undisturbed areas like attics means they are perfectly safe from the 'predators' that might live in your garden. The true 'natural enemy' of a structural Brown Recluse population is a professional Broomfield specialist equipped with 'Structural Void Technology.' We provide the only 'predation' that works—a comprehensive chemical and mechanical intervention that eliminates the entire population root-and-branch. We don't wait for other bugs to do the job; we provide the definitive end to the colony yourself."
    },
    {
      q: "How common is it to have a brown recluse in your house?",
      a: "In Broomfield and the surrounding Front Range communities, brown recluse sightings have become increasingly common over the last two decades. While they were historically more prevalent in the southern US, urbanization and climate shifts have allowed them to establish strong, permanent nodes in Colorado. Many homes in the 80020 ZIP code area are already 'passive hosts' for these spiders without the owners even knowing it, due to the spiders' extremely reclusive behavior. \n\nIt is much more common than people think, but the majority of these infestations go unnoticed because the spiders remain in the wall voids, attics, and crawlspaces. It's often only when a population grows as large as the 'prime' hiding spots that spiders begin to wander into the living rooms and bedrooms. Our Broomfield technicians provide a 'Hidden Threat Assessment'—performing a deep-tissue scan of your home's infrastructure to determine if your property is harboruing a silent population. Knowing the reality of your home's pest status is the first step toward reclaiming your territory and ensuring your family's safety from this common but hidden Broomfield threat."
    },
    {
      q: "What smell do spiders absolutely hate?",
      a: "Like most arachnids, brown recluse spiders have highly sensitive olfactory receptors located in their legs. They are known to be repelled by strong aromatic scents such as peppermint, eucalyptus, tea tree oil, and citrus. Many Broomfield residents use these 'natural' deterrents by placing essential oil diffusers in their closets or spraying diluted mint around window sills. These can be effective at making a small, local area less attractive for a stray spider. \n\nHowever, it is critical to understand that 'repelling' a spider is not the same as 'eliminating' an infestation. If you already have thousands of spiders in your attic voids, a peppermint diffuser in your bedroom will do absolutely nothing to stop the population from thriving. They are biologically driven by prey availability and temperature, which are far stronger triggers than the 'dislike' of a certain smell. In Broomfield, we recommend using these pleasant scents only *after* our professionals have completed a total eradication. They are excellent for post-treatment maintenance and keeping your home smelling fresh, but they are completely ineffective as a solution to a structural Brown Recluse crisis. To win the battle, you need the odorless, laboratory-grade residuals that only a specialist can apply to the hidden nodes of your home."
    },
    {
      q: "What keeps brown recluse spiders away?",
      a: "The most effective way to keep brown recluse spiders away from your Broomfield home is a combination of 'Habitat Reduction' and 'Structural Exclusion.' These spiders love clutter—boxes, stacks of old newspapers, firewood, and piles of clothing in closets provide the 'dark, undisturbed' environment they crave. By switching from cardboard boxes to plastic tethers and keeping storage areas organized and off the floor, you dramatically reduce the 'habitable real estate' for spiders. \n\nFurthermore, 'Structural Exclusion' is the act of sealing every tiny entry point into your home's living areas. This includes using high-grade sealants on baseboards, caulking around plumbing pipes under sinks, and ensuring door sweeps are completely flush. Our Broomfield team specializing in the 'Enclosure Guard' protocol—we walk through your home and identify every single gap that a spider could use. By combining these physical modifications with our seasonal 'Residual Shield' application, we create an environment that is biologically inhospitable to spiders. Keeping them away is a matter of 'Envelope Integrity,' and we provide the professional craftsmanship needed to ensure your home is a fortress that they cannot breach."
    },
    {
      q: "Is it worth getting an exterminator for spiders?",
      a: "When dealing with brown recluse spiders in Broomfield, CO, getting a specialized exterminator is not just 'worth it'—it is often the only way to ensure the safety of your household. Unlike common house spiders that are harmless and actually beneficial for pest control, the brown recluse is a 'medically significant' pest. Its bite can cause necrotic lesions and, in severe cases, systemic reactions. DIY treatments at big-box stores typically lack the 'Micro-Encapsulated' stability required to actually kill a recluse population and often just drive the spiders deeper into your walls. \n\nProfessional abatement provides a multi-year resolution. We use industrial-grade injectors and high-reaching equipment that the average homeowner doesn't have. Furthermore, we provide the 'Peace of Mind' guarantee—knowing that a trained expert has addressed every possible node in your property. In the 80020 area, we have helped thousands of residents who spent months of frustration and money on store-bought sprays before finally calling us. The cost of a professional treatment is a small price to pay for the definitive removal of a dangerous threat from your living space."
    },
    {
      q: "What to do if your house is infested with brown recluse?",
      a: "If you even suspect a brown recluse infestation in your Broomfield home, the first thing you should do is 'De-Clutter and Inspect' carefully. Use gloves and long sleeves to move items in closets, basements, and attics. Switch all storage to clear plastic bins with tight lids to see what's inside before you reach in. Avoid letting bed linens touch the floor and pull beds away from the walls. These immediate actions reduce the chances of accidental contact while you wait for a specialist. \n\nNext, do not attempt to 'fog' the house yourself. Over-the-counter foggers are 'repellents' that can scatter the spiders into furniture and clothing, making the problem much harder to solve. Instead, call our Broomfield 24/7 hotline immediately. We will perform a 'Structural Audit' to find the source of the infestation. We provide a comprehensive 'Node-Clearance' plan that includes flushing the wall voids, sealing the structural gaps, and applying long-term residual barriers. Dealing with an infestation is a structural engineering project, and we provide the elite level of technical help needed to clear your home safely and permanently."
    },
    {
      q: "What attracts recluse spiders to homes?",
      a: "Brown recluse spiders are primarily attracted to your Broomfield home for two reasons: 'Undisturbed Harborage' and 'Prey Rich Environments.' They seek out locations that are dark, dry, and where they will not be disturbed by human or pet activity. This is why they are most commonly found in attics, crawlspaces, wall voids, and behind large pieces of furniture. If your home has significant clutter, it is providing the perfect 'five-star hotel' environment for these pests. \n\nSecondary attractants include the presence of other insects. Brown recluse spiders are effective hunters, and if your home has an unmanaged population of beetles, silverfish, or crickets, it is providing a consistent 'food court' for the spiders. Our Broomfield team focuses on 'Interruption'—we eliminate the secondary pest populations to starve the spiders out, while simultaneously removing their harborage points. By identifying and mitigating these attractors, we turn your property from a 'recluse magnet' into an environment where they simply cannot survive. We address the root cause of why they chose *your* house in the 80020 area and ensure they don't want to come back."
    },
    {
      q: "Why shouldn't you squish spiders?",
      a: "While it is tempting to 'squish' a spider when you see it in your Broomfield kitchen, it is actually a bad idea for a several technical reasons. First, squishing a spider releases 'alarm pheromones' and other biological markers that can signal to other spiders in the vicinity. Second, if the spider is a female carrying an egg sac, squishing her can actually scatter hundreds of tiny, resilient eggs throughout your carpet or flooring, inadvertently starting a mini-infestation right under your feet. \n\nFurthermore, squishing a spider is a 'point-and-click' solution to a structural problem. It kills the one spider you see, but it does nothing to address the 500 spiders you don't see in your walls. Instead of squishing, we recommend 'Trapping and Tagging'—using a clear jar to catch the specimen so your Broomfield technician can provide a definitive identification. This identification is crucial for selecting the right chemical and structural approach. Let us handle the 'Elimination Phase' with our specialized vacuums and void-flush injectors, ensuring that the pest is removed without leaving behind any biological signals for its companions."
    },
    {
      q: "What spiders get mistaken for brown recluse?",
      a: "In Broomfield, several common and harmless spiders are frequently mistaken for the brown recluse, including Wolf Spiders, Grass Spiders, and Cellar Spiders. These insects often share the same brownish coloring and can move quickly, causing panic for homeowners. The key identifier of a true brown recluse is the dark, violin-shaped 'fiddle' marking on its cephalothorax (the head/neck area) and its unique eye pattern (six eyes arranged in three pairs). \n\nMistaken identity is why a 'Specimen Audit' is part of every visit we make to the 80020 area. Using the wrong treatment for a harmless garden spider is a waste of money, while ignoring a true recluse because you thought it was a Wolf Spider is a dangerous risk. Our Broomfield technicians are trained in 'Arachnid Morphology' and can provide an instant, definitive confirmation of what is in your house. We save you from unnecessary anxiety by identifying the 'good' spiders and providing a surgical strike against the 'bad' ones. Don't guess with your family's safety—get a professional identification from a local Broomfield specialist who knows the difference."
    },
    {
      q: "Should I call an exterminator if I see one brown recluse?",
      a: "Yes, you should absolutely call a specialized Broomfield exterminator even if you only see a single brown recluse spider. These spiders are not social, but they are 'node-centric.' Finding one in the interior of your home is a major biological indicator that the 'prime habitat' in your walls or attic may be full. It is extremely rare for a recluse to be a solitary visitor; they are typically part of a self-sustaining colony that has established 'Nodes' within your home's infrastructure. \n\nWaiting to see multiple spiders is a dangerous strategy that allows the population to entrench itself further into your home's 'unreachable' areas. An early intervention is always exponentially more effective and cheaper than trying to handle a full-blown structural crisis. Our Broomfield team provides a 'Zero-Tolerance Audit'—we treat every sighting as a potential node point. We use specialized detectors and monitors to 'confirm' the status of your home, giving you the professional clarity needed to protect your property before the problem multiplies. One spider is a signal; we help you decode that signal and provide the definitive response."
    },
    {
      q: "What bug spray kills brown recluse spiders?",
      a: "To effectively kill brown recluse spiders in a Broomfield structural environment, you need insecticides that have high 'Micro-Encapsulated' stability. Common 'Bug Sprays' from the hardware store (like Pyrethrins) often lose their effectiveness within hours of drying, and since spiders move primarily on their 'tips' (claws), they never absorb enough poison to die. Professionals use laboratory-grade products containing 'Deltamethrin' or 'Dinotefuran' which remain active and lethal to spiders for up to 90 days. \n\nFurthermore, for the 'voids' inside your walls, we use 'Botanical Growth Regulators' and 'Mechanical Desiccants' like silica-based dusts. These dusts never 'dry out' or expire; they work by physically dehydrating the spider's exoskeleton. This combination of the 'chemical knockdown' for the exterior and the 'mechanical dehydrator' for the interior nodes is the only proven method for long-term Brown Recluse control in the Broomfield area. Our technicians are licensed to handle these industrial materials that provide a level of protection far beyond any 'bug spray' available to the general public. We ensure the chemicals are applied safely and effectively in accordance with Front Range environmental standards."
    },
    {
      q: "What is considered a brown recluse infestation?",
      a: "In the professional pest control industry in Broomfield, an 'infestation' of brown recluse spiders is defined by the presence of 'Active Breeding Nodes' within the structure. This is not determined just by the number of spiders you see, but by the presence of multiple life stages (adults, juveniles, and egg sacs) and the consistency of sightings over time. If you are seeing small, immature spiders in multiple rooms, it is a 100% guarantee that you have a breeding population living in your wall voids. \n\nBecause these pests are so reclusive, if you see one spider per week, you likely have hundreds hiding in the attic or crawlspace. We characterize infestations as 'Established' (spiders in multiple levels of the home) or 'Localized' (spiders confined to one storage area). Our Broomfield team provides a 'Structural Population Map' during our visit, identifying exactly how entrenched the colony has become correctly. Identifying the level of infestation is crucial for selecting the right intensity of treatment—ranging from a 'Guard Service' to a 'Total Structural Clearance' for the 80020 area."
    },
    {
      q: "Do brown recluse go in beds?",
      a: "Yes, brown recluse spiders are known to crawl into beds, which is one of the most common ways that humans are bitten. Unlike most spiders that avoid humans, the recluse is searching for warmth and 'soft' harborage when it wanders out from the walls at night. A bed, especially if the linens are touching the floor or if the bed is pushed against a wall, provides the perfect 'bridge' for a wandering spider to explore. \n\nIn Broomfield, we recommend that residents in infested homes take 'Spider-Proofing' precautions for their bedrooms: pull the bed at least 12 inches away from any wall, remove any 'bed skirts' that touch the floor, and keep clothes and shoes off the bedroom floor. While these steps reduce the *risk*, they do not solve the *problem*. Our Broomfield especialistas focus on 'Bedroom Fortification'—we inject residuals behind the headboard and electrical plates in your bedroom during the first visit. We prioritize your sleeping area to ensure that while we are clearing the rest of the house, your primary resting place is a 'Dead Zone' for any wandering spiders."
    },
    {
      q: "What eats brown recluse?",
      a: "As mentioned, in a stable Broomfield home environment, very little 'eats' a brown recluse. They are high-level predators within the indoor ecosystem. While small lizards, toads, and birds may eat them outdoors, these creatures are (hopefully) not in your house. Some larger spiders like the 'Long-bodied Cellar Spider' (Daddy Long Legs) have been observed killing recluses, but they are not a reliable control method and you would need a 'Secondary Infestation' of cellar spiders to manage the first one. \n\nThis lack of natural predation inside modern Colorado architecture is exactly why the brown recluse population can grow so large without the homeowner noticing. They have found a 'predatory vacuum' where they can multiply without fear. The only thing that consistently 'eats away' at a brown recluse population is a professional Broomfield abatement specialized service. We provide the 'Artificial Predation'—a systematic, relentless pressure on the colony via chemicals and structural removal. We act as the ultimate predator in your home's ecosystem, ensuring that the 'food chain' ends with the total removal of the recluse threat."
    },
    {
      q: "What does the initial bite of a brown recluse feel like?",
      a: "The initial bite of a brown recluse spider is often described by Broomfield residents as 'painless' or similar to a minor 'pinprick.' Many people don't even realize they have been bitten until hours later when the site begins to redden, swell, and develop a painful 'stinging' sensation. This is the danger of the recluse—the venom contains enzymes that begin to break down the skin tissue before the body even triggers a pain response. \n\nWithin 12 to 24 hours, the bite site often develops a 'bullseye' appearance with a central blister. It can lead to necrotic ulcers that take months to heal and leave significant scarring. In rare cases, especially in the young or the elderly in Broomfield, it can lead to systemic reactions such as fever and chills. Because the bite is quiet but the results are loud, we recommend immediate medical consultation if you suspect a bite. More importantly, we recommend 'Prevention Over Treatment'—calling our Broomfield specialists to remove the spiders *before* a bite ever occurs. We provide the structural 'early warning system' that keeps these quiet biters out of your reach."
    },
    {
      q: "Can exterminators get rid of brown recluse?",
      a: "Exterminators *specailizing* in 'Medically Significant Pests' can absolutely get rid of brown recluse spiders, but general 'spray-and-walk' services will almost always fail. To get rid of a recluse, you need to understand 'Arachnid Behavior' and 'Structural Engineering.' Our Broomfield team uses non-repellent chemicals that the spiders cannot detect, ensuring they crawl through the lethal dose without scattering further into the home. \n\nWe also use 'Synergists'—compounds that break down the spider's resistance and allow the insecticide to penetrate their nervous system faster. In the Broomfield area, we have pioneered the 'Node-Focused Flushing' method, which involves reaching the 'source' of the population in the wall voids. When people say 'exterminators can't get rid of them,' they are usually referring to generalists who use the wrong products and the wrong tactics. We provide the elite, technical solution that has a 100% success rate in the most difficult Front Range properties. We don't just 'spray for bugs'; we eliminate a specific, dangerous threat from your home's foundation."
    },
    {
      q: "How do I get rid of bed bugs if I can't afford an exterminator?",
      a: "While our core specialty in Broomfield is Brown Recluse spiders, we frequently see homes with multiple pest issues. If you are struggling with bed bugs and cannot afford full professional remediation, the most effective 'Budget Strategy' is 'Heat, Vacuum, and Isolate.' Wash all bedding and clothing in the hottest water possible and dry on 'high heat' for at least an hour. Use a vacuum with a HEPA filter to daily clean mattress seams, bedside furniture, and baseboards (dispose of the bag immediately outside). \n\n'Isolation' involves using bed-bug-proof mattress encasements and 'interceptor cups' on the legs of your bed. These steps won't always eliminate a full infestation, but they will drastically reduce the 'bite load.' However, we caution against using cheap store-bought bombs or sprays, as these often just drive the bed bugs deeper into the walls—much like they do with Brown Recluse spiders. If you are in the Broomfield area and dealing with a high-risk pest crisis (whether spiders or bed bugs), call our line anyway. We often have 'Service Assistance' programs or can provide a 'Pro-Grade DIY Kit' that is much more effective than 무엇 available at the hardware store. We are here to help our community, not just the customers."
    },
    {
      q: "Can you permanently get rid of spiders?",
      a: "You can permanently get rid of an *infestation* of dangerous spiders like the brown recluse in your Broomfield home, but you can never 'sterilize' a property from every single outdoor garden spider. Nature is persistent, and 'scout' spiders will always attempt to find their way into a comfortable structure. The goal of professional abatement is to make your home so structurally sound and biologically inhospitable that these spiders can never establish a breeding 'Node' or 'Colony.' \n\nWe achieve this permanent resolution through 'Structural Fortification.' By sealing the gaps, flushing the voids, and maintaining a 'Residual Shield' on the home's exterior, we ensure that while a stray spider might walk through your door, it can never stay. In Broomfield, our 'Perimeter Guard' service provides this permanent protection. We don't just solve the problem once; we create a 'systemic resistance' in your home that works 24/7 to keep it spider-free. You can't kill every spider in the Colorado Front Range, but you can certainly ensure that *none* of them ever live in your house. We provide the 'Permanent Exclusion' that turns your home back into your private, pest-free sanctuary."
    }
  ];

  // Split faqs into two columns
  const firstCol = faqs.slice(0, 12);
  const secondCol = faqs.slice(12);

  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
            <BookOpen className="w-4 h-4" />
            Brown Recluse Expert Knowledge Base
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-amber-500">Spider Intelligence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium italic">
            Deep technical insights into identifying, removing, and preventing Brown Recluse spider infestations in Broomfield, CO.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {firstCol.map((item, idx) => (
              <FAQItem key={idx} item={item} index={idx} />
            ))}
          </div>
          <div className="space-y-4">
            {secondCol.map((item, idx) => (
              <FAQItem key={idx + 12} item={item} index={idx + 12} />
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-br from-amber-600 to-amber-700 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tighter">
              Seeing "Fiddle-Back" Spiders in Your Home?
            </h3>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium italic">
              Don't wait for a bite. Our Broomfield specialists are ready with precision void injections and structural exclusion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:3238801224" className="bg-white text-amber-600 hover:bg-amber-50 h-16 px-10 rounded-2xl text-xl font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-xl">
                <ShieldCheck className="w-6 h-6" />
                (323) 880-1224
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrownRecluseInfo;
