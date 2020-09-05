module.exports = {
  name: 'quicken-contacts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/quicken-contacts',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
