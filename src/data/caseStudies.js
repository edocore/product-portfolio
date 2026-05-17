/**
 * Editorial case studies — impact metric leads, problem/solution as subhead.
 * `impact` is the headline number; `impactLabel` clarifies what it measures.
 */
export const CASE_STUDIES = [
  {
    id: 'delivery-platform',
    company: 'Amazon',
    role: 'Product Manager',
    title: 'AI-powered delivery performance for Sellers',
    impact: '+10k',
    impactLabel: 'unique users after a week of launch',
    impactDetail: 'Available in the US and EU upon invitation',
    problem:
      'Amazon Sellers lacked a unified way to monitor and optimize their delivery performance, relying on fragmented tools with no actionable guidance on how to speed up customer deliveries.',
    solution:
      'Launched a one-stop AI/ML platform that suggests tailored settings recommendations (e.g. switch carrier for a specific city) with predicted impacts, a performance dashboard, and a "what-if" simulation API that lets Sellers preview delivery date changes before committing. Hosted on AWS with Cloudscape design.',
    tags: ['AI/ML', 'AWS', 'Cloudscape', 'Simulation'],
  },
  {
    id: 'issue-chatbot',
    company: 'Amazon',
    role: 'Product Manager',
    title: 'Internal issue resolution chatbot for Seller support',
    impact: '+250',
    impactLabel: 'monthly active users on internal chatbot',
    impactDetail: '10+ topics scaling · 90% ticket resolution rate',
    problem:
      'Business teams handling Seller issue tickets (e.g. tracking ID mismatches) spent approximately 7 days per year clearing their backlog. Resolution was manual — searching internal resources and escalating to Partner teams.',
    solution:
      'Built an AI chatbot on AWS QuickSuite that replicates RAG/MCP metadata across topics — enabling seamless topic scaling while reducing hallucinations and load-time performance. Integrated with internal dashboards for inline resolution.',
    tags: ['GenAI', 'Automation', 'AWS', 'Internal Tools'],
  },
  {
    id: 'matching-algo',
    company: 'Vidi',
    role: 'Founder',
    title: 'AI-driven user matching & content recommendation',
    impact: '−80%',
    impactLabel: 'bounce rate in the first 15 minutes',
    impactDetail: 'Solved cold-start for new users from day one',
    problem:
      'New users faced a cold-start problem — insufficient behavioral data to recommend relevant content from users who share similar traits, leading to high early bounce rates.',
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
    problem:
      'Searching across millions of POIs, users, and curated lists required sub-500ms latency while delivering highly relevant, location-aware results — a challenge for a resource-constrained startup.',
    solution:
      'Designed a three-layer search system: first filtering by user matching algorithm score, then fuzzy matching on text, then location ranking with a dynamically expanding radius as the user scrolls.',
    tags: ['Search', 'Performance', 'Fuzzy Matching', '0→1'],
  },
]
