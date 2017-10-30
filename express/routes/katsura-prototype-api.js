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
  let kat_host = process.env.KATSURA_PROTOTYPE_API_HOST || defaultEnv.KATSURA_PROTOTYPE_API_HOST;
  let kat_port = process.env.KATSURA_PROTOTYPE_API_PORT || defaultEnv.KATSURA_PROTOTYPE_API_PORT;

  if(req.query.after == undefined){
        req.query.after = "";
    }

  let options =
  {
    url: 'http://' + kat_host + ':' + kat_port + '/asc/rest/drools/init',
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
