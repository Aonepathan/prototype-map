const express = require('express');
const router = express.Router();
let request = require('request');
let defaultEnv = require('../environment-defaults');
let http = require('http');
const tls = require('tls');
const fs = require('fs');
const path = require('path');
let appExports = require('../index');

router.get('/api/init', function(req, res)
{
  let app_host = process.env.API_HOST || defaultEnv.API_HOST;
  let app_port = process.env.API_PORT || defaultEnv.API_PORT;

  if(req.query.after == undefined){
        req.query.after = "";
    }

  let options =
  {
    url: 'http://' + kat_host + ':' + kat_port,
    method: 'GET',
  };

  request.get(options, function(err, response, body)
  {
    if (err) {
            global.logger.error(err, cn);
        } else {
            global.logger.info(body, cn);
            res.send(body);
        }
  });

});
module.exports = router;
