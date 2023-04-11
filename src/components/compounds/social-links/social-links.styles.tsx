import tw from 'tailwind-styled-components';

import { Link } from '@/components/core/link';

export const SocialLinksContainer = tw.ul`
  list-none
  flex
  items-center
  gap-6
  -ml-6
`;

export const SocialLinkItem = tw.li`
  block
  h-[30px]
  w-[30px]
`;

export const SocialLink = tw(Link)`
  p-0
  inline-flex
  items-center
  justify-center
  h-full
  w-full
  rounded-6
  text-tertiary-txt
  hocus:bg-accent-dark/[0.1]
  hocus:text-secondary-txt
  hocus:no-underline
`;

export const GitHubLink = tw(SocialLink)`
  hocus:text-[#333]
  hocus:dark:text-[#ebebeb]
`;

export const LinkedInLink = tw(SocialLink)`
  hocus:text-[#0077b5]
  hocus:dark:text-[#0077b5]
`;

export const TwitterLink = tw(SocialLink)`
  hocus:text-[#1da1f2]
  hocus:dark:text-[#1da1f2]
`;

export const InstagramLink = tw(SocialLink)`
  hocus:text-[#d6249f]
  hocus:dark:text-[#d6249f]
`;

export const PolyworkLink = tw(SocialLink)`
  hocus:text-[#6959fc]
  hocus:dark:text-[#6959fc]
`;

export const MastodonLink = tw(SocialLink)`
  hocus:text-[#563ACC]
  hocus:dark:text-[#6364FF]
`;
