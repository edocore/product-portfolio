export const PROFILE = {
  name: 'Edoardo Core',
  initials: 'EC',
  role: 'Product Manager · Amazon · Founder of Vidi · Co-founder of ASIO',
  email: 'core.edoardo@gmail.com',
  linkedin: 'https://linkedin.com/in/edocore',
  github: 'https://github.com/edocore',
  status: 'Open to opportunities',
  // Hero POV statement — the editorial anchor for the whole site
  povHeadline: 'Working backwards from',
  povHeadlineEm: 'real user pain points',
  povSubhead:
    'I build products by starting from customer problems, prototyping fast, and iterating based on real customer feedback. I live in the space between business and technical.',
  // Single hero metric — story-style anchor for a 0→1 founder/PM
  anchorMetric: '0 → 1 Mindset',
  anchorMetricLabel: '3 high-scale products taken from idea to launch as PM and founder in <1 year',
  // Hero "artifact metadata" card — rendered as a JSON code block, echoing the
  // way this portfolio is itself stored as a shared artifact.
  heroArtifact: {
    title: 'Product Portfolio',
    ownerAlias: 'Edoardo Core',
    role: 'Product Manager',
    products: ['YODA', 'Buy Shipping', 'MERLIN', 'NidEF Lab', 'Vidi', 'ASIO'],
    dataClassification: 'PUBLIC',
  },
  // Sections in display order — drives the navbar
  sections: [
    { id: 'work', label: 'Work' },
    { id: 'vidi', label: 'Vidi' },
    { id: 'asio', label: 'ASIO' },
    { id: 'craft', label: 'Craft' },
    { id: 'words', label: 'Words' },
    { id: 'questions', label: 'Q&A' },
    { id: 'contact', label: 'Contact' },
  ],
}
