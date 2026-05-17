/**
 * Vidi spotlight content. Numbered points walk a newcomer through the
 * three core jobs of the app: settle in, become a local, browse events.
 */
export const VIDI = {
  tagline: 'Find belonging in any city.',
  description:
    'A Flutter mobile app that helps newcomers find belonging through personalized, community-driven recommendations. Built on GenAI and Agentic AI to maximize the value of community content for each user.',
  launch: 'Official UK & QA launch in September 2026',
  landingUrl: '',
  appStoreUrl: 'https://apps.apple.com',
  playStoreUrl: 'https://play.google.com/store',
  appStoreBadge: 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg',
  playStoreBadge:
    'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
  screens: [
    { src: '/vidi-home.png', alt: 'Vidi Home Screen', label: 'Home' },
    { src: '/vidi-events.png', alt: 'Vidi Events Screen', label: 'Events' },
  ],
  callouts: [
    {
      id: 'settle',
      label: 'Settle in through personalized recommendations',
      detail:
        'Onboarding signals + a propensity-matching algorithm solve the cold-start problem from minute one — community-driven recs are tailored to each newcomer’s tastes, habits, and location.',
      caseStudyId: 'matching-algo',
    },
    {
      id: 'local',
      label: 'Become a local through profile-driven interactions',
      detail:
        'Each user has a profile with their own placelists. Send friend requests, browse other locals’ placelists, and use them as a roadmap to settle into the city.',
    },
    {
      id: 'events',
      label: 'Browse events directly tailored to you',
      detail:
        'Affiliate partners post deals, discounts, and events on the platform — redeem them in person via QR code. In Qatar, Vidi works alongside ',
      linkLabel: 'ILoveQatar',
      linkUrl: 'https://www.iloveqatar.net/',
    },
  ],
  universityLaunch: {
    headline: 'Launching with university support.',
    body: 'Vidi was born at the London School of Economics and built for newcomers — especially university students. We are actively collaborating with:',
    partners: [
      'London School of Economics',
      'University of Doha for Science & Technology (UDST)',
      'Carnegie Mellon University in Qatar',
      'Northwestern University in Qatar',
      'and many others',
    ],
  },
}
