'use strict';
const snoowrap = require('snoowrap');
const config = require("config")

async function getUserTest() {
    const r = new snoowrap({
        userAgent: config.get("user_agent"),
        clientId: config.get("clientId"),
        clientSecret: config.get("secret"),
        username: config.get("username"),
        password: config.get("password")
      });
    
    
    
      r.getHot().map(post => post.title).then(console.log);
}

getUserTest()
