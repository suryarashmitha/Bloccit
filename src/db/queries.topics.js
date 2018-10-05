const Topic = require("./models").Topic;

module.exports = {

//#1We define a function called getAllTopics with a parameter called callback. In  getAllTopics, return the result of calling all on the Sequelize model which will return all records in the topics table
  getAllTopics(callback){
    return Topic.all()

//#2
    .then((topics) => {
      callback(null, topics);
    })
    .catch((err) => {
      callback(err);
    })
  },

  addTopic(newTopic, callback){
      return Topic.create({
        title: newTopic.title,
        description: newTopic.description
      })
      .then((topic) => {
        callback(null, topic);
      })
      .catch((err) => {
        callback(err);
      })
    }
}
