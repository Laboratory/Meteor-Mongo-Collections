Tinytest.add('Create multiple collections', (test) => {
  let coll1 = new Meteor.Collection('users')
  let coll2 = new Meteor.Collection('users')
  test.equal(coll1.find().count(), coll2.find().count())
})

Tinytest.add('Insert to collecton', (test) => {
  let coll1 = new Meteor.Collection('test')
  let coll2 = new Meteor.Collection('test')
  let coll2Count = coll2.find().count()
  coll1.insert({
    name: 'text'
  })
  test.equal(coll2.find().count(), coll2Count + 1)
})

Tinytest.add('Create multiple remote collections', (test) => {
  let connect1 = DDP.connect('localhost:4000')
  let connect2 = DDP.connect('localhost:4000')
  let coll1 = new Meteor.Collection('users', {connection: connect1})
  let coll2 = new Meteor.Collection('users', {connection: connect2})
  test.equal(coll1.find().count(), coll2.find().count())
})
