const admin = require('firebase-admin');
const argv = require('minimist')(process.argv.slice(2));

if (!argv.uid) {
  console.error(`Argument -uid required`);
  return;
}

admin.auth().setCustomUserClaims(argv.uid, {admin: true});