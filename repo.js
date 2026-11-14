/**
 * Crisp Suite / HandleVault — Shared Repository Helper (repo.js)
 */
(() => {
  'use strict';

  window.CrispRepo = {
    name: 'crisp-science-studio',
    suite: 'Crisp Suite',
    author: 'HandleVault',
    githubUrl: 'https://github.com/handlevault-official/crisp-science-studio',
    koFiUrl: 'https://ko-fi.com/handlevault',
    version: '1.0.0'
  };

  // Console branding para sa developer tools (Science emerald theme)
  console.log(`🔬 %cScienceStudio (${window.CrispRepo.suite}) loaded successfully.`, 'color: #10b981; font-weight: bold;');
})();
