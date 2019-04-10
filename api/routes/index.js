const express = require('express');
const path = require('path');
const glob = require('glob');

const router = express.Router();

router.get('/health-check', (req, res) =>
  res.send('OK')
);

/**
 * Load all routes from routes directory
 * **/
const routes = glob.sync(path.join(__dirname, "/*.route.js"));
routes.forEach(route => {
  let routeName = route.substring(route.lastIndexOf("/"), route.lastIndexOf(".route.js"));
  console.log("Loading route :: " + routeName);
  router.use("/v1"+routeName, require(route));
})

module.exports = router;
