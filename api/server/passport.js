const LocalStrategy = require('passport-local').LocalStrategy
const bcrypt = require('bcrypt')
const User = require('../../models/user')


module.exports = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: 'email'}, (email, password, done) => {
            User.findOne({ where: {email: email}})
                .then( user => {
                    if (!user) {
                        return done(null, false, { message: 'Could not find a user with that email'})
                    }
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: "Incorrect Password"})
                        }
                    });
                })
                .catch(err => console.log(err))
        })
    );
}