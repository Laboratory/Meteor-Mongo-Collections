Package.describe({
    name: 'laboratory:mongo-collection',
    summary: 'Mongo.Collections instances by Collection name',
    version: '1.2.0',
    git: 'https://github.com/Laboratory/Meteor-Mongo-Collections.git'
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@1.2');
    api.addFiles('mongo-collection.coffee');
    api.use('coffeescript', ['client', 'server']);
    api.use('mongo');
});

Package.on_test(function (api) {
    api.use(['tinytest', 'test-helpers', 'ddp']);
    api.use('coffeescript', ['client', 'server']);
    api.use('laboratory:mongo-collection');
    api.addFiles('mongo-collection-tests.coffee');
});
