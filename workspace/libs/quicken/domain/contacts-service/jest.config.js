module.exports = {
  name: 'quicken-domain-contacts-service',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/quicken/domain/contacts-service',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
