Tinytest.add 'create multiple collections', (test) ->
  coll1 = new Mongo.Collection 'users'
  coll2 = new Meteor.Collection 'users'
  test.equal coll1.find().count(), coll2.find().count()

Tinytest.add 'insert to collecton', (test) ->
  coll1 = new Mongo.Collection 'test'
  coll2 = new Meteor.Collection 'test'
  coll2Count = coll2.find().count()
  coll1.insert
    name: 'text'
  test.equal coll2.find().count(), coll2Count + 1
