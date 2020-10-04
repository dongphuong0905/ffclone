var passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });
// passport.use(new GoogleStrategy({
//     clientID: "556144615408-o83svl47cjfquee5k03ocbor0p9bmkfj.apps.googleusercontent.com",
//     clientSecret: "oIRxijtA2YUS-B2JNGhgv1aj",
//     callbackURL: "http://localhost:3000/google/callback"
// },

//     function (accessToken, refreshToken, profile, done) {
//         // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         console.log("access token: ", accessToken);
//         return done(null, profile, accessToken, refreshToken);
//         // });
//     }
// ));
