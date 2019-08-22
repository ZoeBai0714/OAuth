const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");

//takes two args, one is your strategy, another one is a callback function
passport.use(new GoogleStrategy({
    //options for strategy. Created on google console developer
    clientID:keys.google.clientId,
    clientSecret:keys.google.clientSecret
}), ()=>{
    
 
});
