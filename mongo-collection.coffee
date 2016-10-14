# Feature for create multiple Mongo.Collection instances

do ->
  #save original Mongo.Collection method
  MongoCollection = Mongo.Collection

  #replace method to our wrapper
  Meteor.Collection = Mongo.Collection = class extends MongoCollection
    instances: {
      users: Meteor.users
    }
    constructor: (name, options = {}) ->
      endPoint = options.connection?._lastSessionId or ''
      #get created collecton
      collectionName = "#{endPoint}_#{name}"
      collection = @instances[collectionName]
      #return collection if collection exist
      return collection if !!collection
      #create collection by super consctructor
      super name, options
      #save collection by name
      @instances[collectionName] = this
