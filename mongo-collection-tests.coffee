Tinytest.add 'Create multiple collections', (test) ->
  coll1 = new Meteor.Collection 'users'
  coll2 = new Meteor.Collection 'users'
  test.equal coll1.find().count(), coll2.find().count()

Tinytest.add 'Insert to collecton', (test) ->
  coll1 = new Meteor.Collection 'test'
  coll2 = new Meteor.Collection 'test'
  coll2Count = coll2.find().count()
  coll1.insert
    name: 'text'
  test.equal coll2.find().count(), coll2Count + 1

Tinytest.add 'Create multiple remote collections', (test) ->
  connect1 = DDP.connect 'localhost:4000'
  connect2 = DDP.connect 'localhost:4000'
  coll1 = new Meteor.Collection 'users', connection: connect1
  coll2 = new Meteor.Collection 'users', connection: connect2
  test.equal coll1.find().count(), coll2.find().count()
