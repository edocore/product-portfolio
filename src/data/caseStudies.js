/**
 * Editorial case studies — impact metric leads, problem/solution as subhead.
 * `impact` is the headline number; `impactLabel` clarifies what it measures.
 */
export const CASE_STUDIES = [
  {
    id: 'delivery-platform',
    company: 'Amazon',
    role: 'Product Manager',
    title: 'YODA — AI delivery-performance assistant for Sellers',
    impact: '6 → 1',
    impactLabel: 'delivery metrics unified into one assistant',
    impactDetail: 'Internal AM tool across EU → integrating into Seller Central',
    image: { src: '/case-yoda.png', alt: 'YODA delivery recommendations surfaced inside the Seller Assistant' },
    problem:
      'External-fulfilment sellers faced a fragmented delivery experience — dozens of help pages, overlapping automations, and separate dashboards, with no single source of truth connecting a seller\'s metrics, their settings, and the predicted outcome of changing them. Sellers could see a number was bad without knowing why, or what to do about it.',
    solution:
      'Built YODA, an AI assistant that puts delivery metrics (OTDR, VTR, LSR and the promise / handling-time / transit-time gaps) in one view, diagnoses root causes at carrier and lane level, and produces ranked recommendations — with predicted uplift and time-to-effect — for activating the right automations. Shipped into the Seller Assistant as an MCP server: ~37 candidate stories collapse into a handful of evaluate-in-code domain tools, with live metrics and model-based cohort benchmarks deliberately split by provenance.',
    tags: ['AI/ML', 'MCP', 'Seller Assistant', 'Recommendations'],
  },
  {
    id: 'buy-shipping',
    company: 'Amazon',
    role: 'PM-T · Single-Threaded Owner',
    title: 'Carrier integrations into Amazon Buy Shipping',
    impact: '3',
    impactLabel: 'carriers owned end-to-end (DE · ES · IT)',
    impactDetail: 'GLS DE · SEUR ES · BRT IT, plus DPD FR / Chronopost FR',
    image: { src: '/case-buyshipping.png', alt: 'Amazon Buy Shipping label-purchase flow' },
    problem:
      'Amazon Buy Shipping lets Merchant-Fulfilled sellers buy labels and link carrier accounts inside Seller Central. Every new carrier requires a full integration — account linking, label generation, ship-method eligibility, transit-time and delivery-promise logic, and returns — before a seller can use it.',
    solution:
      'Own the end-to-end PM-T scope for API/EDI carrier integrations: authoring carrier BRDs, driving technical design with the SDE team, and mapping each carrier onto a thin per-carrier adapter that rides on Buy Shipping\'s fixed infrastructure. The carriers span both supported patterns — a standalone direct REST integration and a shared multi-BU gateway. Also re-worked the BRD and requirements process itself with an AI carrier-integration playbook (a retrieval-grounded knowledge base) to speed up future integrations.',
    tags: ['Carrier Integration', 'API/EDI', 'BRD', 'Buy Shipping'],
  },
  {
    id: 'issue-chatbot',
    company: 'Amazon',
    role: 'Product Manager',
    title: 'MERLIN — AI resolution agent for EU EF business requests',
    impact: '92.5%',
    impactLabel: 'self-service resolution rate',
    impactDetail: 'Live · grounded strictly in curated PM/SME knowledge',
    image: { src: '/case-chatbot.png', alt: 'RAG / agentic architecture the resolution agent is built on' },
    problem:
      'EU External Fulfilment ran on a persistent gap: business escalations that could have been self-resolved if the requester had the right knowledge at the right time. Knowledge lived in two disconnected places — live Seller Central content and ad-hoc docs held by domain PMs and SMEs — so people escalated instead of self-serving.',
    solution:
      'Built MERLIN, a centralized AI entry point that runs a four-step loop per request: route to the right domain → ground (scoped retrieval over that domain\'s curated knowledge) → guide (a deterministic escalation decision tree) → hand off (a pre-populated Slack request on an SLA when a human is genuinely needed). Answers are grounded strictly in curated content rather than a frontier model\'s general knowledge; each domain goes live only after UAT clears ≥90% accuracy, with quality monitored by an LLM-judged evaluation.',
    tags: ['GenAI', 'RAG', 'Agentic', 'LLM-eval'],
  },
  {
    id: 'nidef-lab',
    company: 'Amazon',
    role: 'Co-creator',
    title: 'NidEF Lab — turning prototypes into roadmap bets',
    impact: '5',
    impactLabel: 'Lab intakes reached VP-level visibility',
    impactDetail: 'A structured path from validated prototype to funded roadmap',
    image: { src: '/case-nidef.png', alt: 'Free Shipping Optimizer — a regional AI-hackathon-winning Lab intake' },
    problem:
      'Non-technical employees across EU Seller Services — PMs, program managers, account managers — were validating real problems and building AI prototypes, but had no structured path to scale them into production or influence roadmaps. Good ideas stalled after the demo.',
    solution:
      'Co-created NidEF Lab with an SDE manager: seven operating tenets governing how engineering support flows to innovation projects, plus a structured intake that requires a validated problem, a measurable value proposal, and prototype-testing results before any engineering bandwidth is committed. The model protects delivery commitments by construction — funded work is allocated first at sprint planning; only remaining capacity goes to Lab projects.',
    tags: ['0→1', 'Operating Model', 'Innovation', 'Prototyping'],
  },
  {
    id: 'matching-algo',
    company: 'Vidi',
    role: 'Founder',
    title: 'AI-driven user matching & content recommendation',
    impact: '−80%',
    impactLabel: 'bounce rate in the first 15 minutes',
    impactDetail: 'Solved cold-start for new users from day one',
    image: { src: '/case-matching.png', alt: 'Vidi onboarding and personalized home recommendations' },
    problem:
      'New users faced a cold-start problem: insufficient behavioral data to recommend relevant content from users who share similar traits, leading to high early bounce rates.',
    solution:
      'Built a propensity-score matching algorithm combined with collaborative filtering (clicks, views, shares, likes) and location signals. Designed an onboarding questionnaire capturing tastes, habits, and personal traits to bootstrap recommendations for Home content and user discovery.',
    tags: ['AI/ML', 'Cold Start', 'Recommendation', '0→1'],
  },
  {
    id: 'search-engine',
    company: 'Vidi',
    role: 'Founder',
    title: 'Low-latency search engine for POIs and users',
    impact: '+110%',
    impactLabel: 'time spent on search screens',
    impactDetail: 'Sub-500ms latency across millions of records',
    image: { src: '/case-search.png', alt: 'Vidi low-latency place and user search results' },
    problem:
      'Searching across millions of POIs, users, and curated lists required sub-500ms latency while delivering highly relevant, location-aware results: a challenge for a resource-constrained startup.',
    solution:
      'Designed a three-layer search system: first filtering by user matching algorithm score, then fuzzy matching on text, then location ranking with a dynamically expanding radius as the user scrolls.',
    tags: ['Search', 'Performance', 'Fuzzy Matching', '0→1'],
  },
]
