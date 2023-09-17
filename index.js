const app = require("express")();
const admin = require('firebase-admin');
var serviceAccount = require("./app-sdk.json");
app.use(require("body-parser").json());

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
app.get("/setAdmin", async (req, res) => {
    admin
    .auth()
  .setCustomUserClaims(req.body.uid, { admin: true })
  .then(() => {
    console.log('done')
  });
   
})
app.listen(3000, () => console.log("Listening on port 3000"));