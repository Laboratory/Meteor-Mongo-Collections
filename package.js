Package.describe({
  name: 'laboratory:mongo-collection',
  summary: 'Mongo.Collections instances by Collection name',
  version: '1.0.1',
  git: 'https://github.com/Laboratory/Meteor-Mongo-Collections.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.addFiles('mongo-collection.coffee');
  api.use('coffeescript', ['client', 'server']);
  api.use('mongo');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('laboratory:mongo-collection');
  api.use('coffeescript', ['client', 'server']);
  api.addFiles('mongo-collection-tests.coffee');
});
