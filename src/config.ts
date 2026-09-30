import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  // SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
  site: {
    website: 'https://mathewgaluszka.ca/',
    title: 'Mathew Galuszka',
    author: 'Mathew Galuszka',
    description: 'Mechatronics/Biomedical Engineering Student',
    language: 'en-US'
  },

  // GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
  general: {
    contentWidth: '42rem',
    centeredLayout: true,
    themeToggle: false,
    postListDottedDivider: false,
    footer: true,
    fadeAnimation: true
  },

  // DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  date: {
    dateFormat: 'YYYY-MM-DD',
    dateSeparator: '.',
    dateOnRight: true
  },

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  post: {
    readingTime: false,
    toc: true,
    imageViewer: true,
    copyCode: true,
    linkCard: false,
    katex: true
  }
}
