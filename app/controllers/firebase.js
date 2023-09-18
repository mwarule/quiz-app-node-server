const admin = require('firebase-admin');
exports.setAdmin = (req, res) => {
    admin
    .auth()
  .setCustomUserClaims(req.body.uid, { admin: true })
  .then(() => {
    res.send({ message: "success" });
  })
  .catch(error => {
    res.status(500).send({ message: error });
  });
};