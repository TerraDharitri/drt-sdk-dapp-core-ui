import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import nodePolyfills from 'rollup-plugin-node-polyfills';

const excludeComponents = [
  'drt-sign-transactions-panel',
  'drt-transaction-fee-component',
  'drt-pending-transactions-panel',
  'drt-ledger-connect-panel',
  'drt-ledger-connect',
  'drt-ledger-account-screen',
  'drt-ledger-connect-screen',
  'drt-ledger-confirm-screen',
  'drt-toast-list',
  'drt-generic-toast',
  'drt-custom-toast',
  'drt-simple-toast',
  'drt-transaction-toast-details-body',
  'drt-transaction-toast-details',
  'drt-transaction-toast-content',
  'drt-transaction-toast',
  'drt-transaction-toast-wrapper',
  'drt-sign-transaction-component',
  'drt-wallet-connect',
  'drt-wallet-connect-panel',
  'drt-transaction-toast-progress',
  'drt-token-component',
  'drt-fungible-component',
  'drt-balance-component',
];

export const config: Config = {
  namespace: 'sdk-dapp-core-ui',
  globalStyle: 'dist/output.css',
  outputTargets: [
    reactOutputTarget({
      outDir: './dist/react',
      stencilPackageName: '../../dist/types',
      customElementsDir: '../web-components',
      excludeComponents,
    }),
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
      dir: './dist/web-components',
    },
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },
    // this is only for testing purposes
    // {
    //   type: 'www',
    //   serviceWorker: null,
    // },
  ],
  rollupPlugins: {
    after: [nodePolyfills()],
  },
  extras: {
    enableImportInjection: true,
  },
};
