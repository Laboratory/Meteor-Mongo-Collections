Meteor-Mongo-Collections
========================
Get the existing Mongo.Collection instance by name, or create it if doesn't exist.

For a more sophisticated approach, see [dburles:mongo-collection-instances](https://atmospherejs.com/dburles/mongo-collection-instances).

# Installation

Install the package [from Atmosphere](https://atmospherejs.com/laboratory/mongo-collection):

```sh
meteor add laboratory:mongo-collection
```

# Usage Example

```js
collection = new Mongo.Collection 'users'
nextCollection = new Mongo.Collection 'users'
```
