const { authSecret } = require("../.env")
const passport = require("passport")
const passportJWT = require("passport-jwt")
const { Strategy, ExtractJwt } = passportJWT

module.exports = app => {
  const params = {
    secretOrKey: authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  };

  const strategy = new Strategy(params, (payload, done) => {
    app.db("users")
      .where({ id: payload.id })
      .first()
      .then(user => done(null, user ? { ...payload } : false))
      .catch(err => done(err, false));
  });

  passport.use(strategy);

  return {
    authenticate: () => passport.authenticate("jwt", { session: false })
  }
};
