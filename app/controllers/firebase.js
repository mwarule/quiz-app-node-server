const pkg  = require('@clerk/clerk-sdk-node');
const clerk = pkg.default;
exports.setAdmin = (req, res) => {
  const users = clerk.users.getUserList();
  users.then(u => {
    res.send({ users: u});
  })
  .catch(error => {
    res.status(500).send({ message: error });
  })
};