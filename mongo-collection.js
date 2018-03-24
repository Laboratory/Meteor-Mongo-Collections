// Feature for create multiple Mongo.Collection instances
(() => {
  // save original Mongo.Collection method
  const MongoCollection = Mongo.Collection
  let instances = {
    users: Meteor.users
  }
  //replace method to our wrapper
  Meteor.Collection = Mongo.Collection = class extends MongoCollection {

    constructor (name, options = {}) {
      let endPoint = options.connection && options.connection._lastSessionId || ''
      // get created collecton
      let collectionName = `${endPoint}_${name}`
      const collection = instances[collectionName]
      // return collection if collection exist
      if (!!collection) {
        return collection
      }
      //create collection by super consctructor
      super(...arguments)
      // save collection by name
      instances[collectionName] = this
    }

  }
})()
