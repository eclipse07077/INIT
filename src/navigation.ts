import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Mission',
      href: getPermalink('/#features'),
    },
    {
      text: 'Groups',
      href: getPermalink('/#groups'),
    },
    {
      text: 'Members',
      href: getPermalink('/#members'),
    },
    {
      text: 'Publication',
      href: getPermalink('/#publication'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/#faq'),
    },
    {
      text: 'Contact',
      href: getPermalink('/#contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © INIT. All rights reserved.
  `,
};
