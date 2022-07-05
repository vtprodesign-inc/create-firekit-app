const functions = require("firebase-functions");
const admin = require("firebase-admin");

const validateAdmin = async (req, res, next) => {
  try {
    if (!res.locals.uid) {
      throw new Error(
          `No UID available to verify
          admin (did you validateFirebaseIdToken?)`,
      );
    }

    const user = await admin.auth().getUser(res.locals.uid);
    if (!user.customClaims.admin) {
      throw new Error("User custom claims does not include admin");
    }
    next();
    return;
  } catch (error) {
    functions.logger.error("Error while verifying admin:", error.message);
    res.status(401).send("Unauthorized");
    return;
  }
};

module.exports = validateAdmin;
