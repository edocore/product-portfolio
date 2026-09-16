/**
 * ASIO (All Services In One) – early-stage side project.
 * Problem statement / metrics are intentionally TBD while building locally.
 */
export const ASIO = {
  name: 'ASIO',
  expansion: 'All Services In One',
  tagline: 'Make sense of Italian services, in one place.',
  description:
    'A RAG-based AI product for the Italian services space. It grounds itself in a corpus of prior documents to turn whatever a user uploads into a clear, personalized overview, then benchmarks that user against similar users to surface tailored recommendations.',
  status: 'In development',
  // Placeholder – swap for the live web app URL when ready.
  webAppUrl: '#',
  // ASIO web-app screenshots – files not yet provided. Flip to true once the
  // three /public/asio-{1,2,3}.png files are added.
  screensReady: true,
  screens: [
    { src: '/asio-1.png', alt: 'ASIO: all your services in one portal' },
    { src: '/asio-2.png', alt: 'ASIO: upload documents and get them explained' },
    { src: '/asio-3.png', alt: 'ASIO: AI benchmarking against similar users' },
  ],
  pillars: [
    {
      id: 'overview',
      label: 'Personalized document overview',
      detail:
        'A RAG pipeline retrieves over a corpus of previous Italian-services documents to generate a plain-language, personalized overview of the current docs a user uploads, surfacing what matters for their specific situation.',
    },
    {
      id: 'benchmarking',
      label: 'Comparative recommendations & benchmarking',
      detail:
        'An AI chatbot uses the user\'s own data and compares it against other users to give personalized recommendations and benchmarking: where they stand, and what similar users did next.',
    },
    {
      id: 'metrics',
      label: 'Impact & metrics',
      detail: 'TBD: success metrics, target users, and validation plan to be defined.',
    },
  ],
  tags: ['RAG', 'GenAI', 'Personalization', 'Benchmarking', '0→1'],
}
