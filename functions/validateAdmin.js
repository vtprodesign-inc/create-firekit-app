const functions = require('firebase-functions');
const admin = require('firebase-admin');

const validateAdmin = async (req, res, next) => {
  try {
    if (!res.locals.uid) { throw "No UID available to verify admin (did you validateFirebaseIdToken?)"; }
    req.user = decodedIdToken;
    const user = await admin.auth().getUser(res.locals.uid);
    if (!user.customClaims.admin) { throw "User custom claims does not include admin"; }
    next();
    return;
  } catch (error) {
    functions.logger.error('Error while verifying admin:', error);
    res.status(401).send('Unauthorized');
    return;
  }
};

module.exports = validateAdmin