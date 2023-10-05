const clerk = require('@clerk/clerk-sdk-node');

exports.setAdmin = (req, res) => {
  const users = clerk.users.getUserList();
  users.then(u => {
    res.send({ users: u});
  })
  .catch(error => {
    res.status(500).send({ message: error });
  })
};