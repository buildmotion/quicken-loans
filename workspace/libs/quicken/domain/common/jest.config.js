module.exports = {
  name: 'quicken-domain-common',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/quicken/domain/common',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
