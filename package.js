Package.describe({
  name: 'laboratory:mongo-collection',
  summary: 'Mongo.Collections instances by Collection name',
  version: '1.3.0',
  git: 'https://github.com/Laboratory/Meteor-Mongo-Collections.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2');
  api.addFiles('mongo-collection.js');
  api.use('mongo');
});

Package.onTest(function (api) {
  api.use(['tinytest', 'test-helpers', 'ddp']);
  api.use('laboratory:mongo-collection');
  api.addFiles('mongo-collection-tests.js');
});
