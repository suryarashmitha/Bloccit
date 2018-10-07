const topicQueries = require("../db/queries.topics.js");

module.exports = {
  index(req, res, next) {
    topicQueries.getAllTopics((err, topics) => {
      if(err) {
        res.redirect(500, "static/index", {title: "Welcome to Bloccit"});
      } else {
        res.render("topics/index", {topics: topics, title: "List of topics"});
      }
    });
  },
  new(req, res, next){
    res.render("topics/new", {title: "View Topic"});
  },
  create(req, res, next){
    let newTopic = {
      title: req.body.title,
      description: req.body.description
    };
    console.log("1****************");
    topicQueries.addTopic(newTopic, (err, topic) => {
      console.log(err);
      if(err){
        res.redirect(500, '/topics/new');
      } else {
        res.redirect(303, `/topics/${topic.id}`)
      }
    });
  },
  show(req, res, next){
    topicQueries.getTopic(req.params.id, (err, topic) => {
      if(err || topic == null){
        res.redirect(404, "/");
        } else {
          res.render("topics/show", {topic: topic, title: "View Topic"});
        }
    });
  },
  destroy(req, res, next){
    topicQueries.deleteTopic(req.params.id, (err, topic) => {
      if(err) {
        console.log(err);
        res.redirect(500, `/topics/${topic.id}`)
      } else {
          res.redirect(303, "/topics")
        }
    });
  },
  edit(req, res, next){
    topicQueries.getTopic(req.params.id, (err, topic) => {
      if(err || topic == null){
        res.redirect(404, "/");
      } else {
        res.render("topics/edit", {topic:topic, title: "Edit Topic"});
      }
    });
  },
  update(req, res, next) {
    topicQueries.updateTopic(req.params.id, req.body, (err, topic) => {
      if(err || topic == null) {
        res.redirect(404, `/topics/${req.params.id}/edit`);
      } else {
        res.redirect(`/topics/${topic.id}`);
      }
    });
  }

}
