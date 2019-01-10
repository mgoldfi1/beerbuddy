const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../../models/user')
const passport = require('passport')

module.exports = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
            console.log(email)
            User.findOne({ where: {email: email}})
                .then( user => {
                    if (!user) {
                        return done(null, false, { message: 'Could not find a user with that email'})
                    }
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            console.log("hit")
                            return done(null, user);
                        } else {
                            return done(null, false, { message: "Incorrect Password"})
                        }
                    });
                })
                .catch(err => console.log(err))
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
      });
      
      passport.deserializeUser( (id, done) => {
        User.findById(id, (err, user)  => {
          done(err, user);
        });
      });
}