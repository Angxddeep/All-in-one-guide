import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {type: 'doc', id: 'index', label: 'All in one guide'},
    {type: 'doc', id: 'Unlocking bootloader', label: 'Unlocking bootloader'},
    {type: 'doc', id: 'Root', label: 'Rooting your device'},
    {type: 'doc', id: 'ares-os', label: 'Recommended ROM — Ares OS'},
    {type: 'doc', id: 'Stock', label: 'Flashing stock ROM'},
    {type: 'doc', id: 'Unbrick', label: 'Flashing CFW on xaga and unbrick it'},
  ],
};

export default sidebars;
