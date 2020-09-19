import { IConfiguration } from '@valencia/configuration';

export const AppConfig: IConfiguration = {
  contentful: {
    spaceId: '1234',
    token: '12341234',
  },
  loggingConfig: {
    applicationName: 'quicken-contacts',
    isProduction: false,
  },
  errorHandlingConfig: {
    applicationName: 'quicken-contacts',
    includeDefaultErrorHandling: true,
  },
  logglyConfig: {
    applicationName: 'quicken-contacts',
    apiKey: '86b52c28-e0f2-4e97-b338-c2f4dba7def0',
    sendConsoleErrors: true,
  },
  webConfig: {
    applicationName: 'quicken-contacts',
    companyEffectiveDate: new Date(2020, 4, 1),
    version: '1.0.0',
    social: {
      github: { name: 'Quicken: Brand Marketing Code Test', URL: 'https://github.com/buildmotion/quicken-loans' },
      instagram: { name: 'AngularArchitecture', URL: 'https://www.instagram.com/AngularArchitecture/' },
      twitter: { name: '@AngularArch', URL: 'https://twitter.com/AngularArch' },
    },
    email: 'quicken-test@buildmotion.com',
    website: 'Quicken Contacts',
    blogURL: 'https://www.medium.com/@angularlicious',
  },
};
