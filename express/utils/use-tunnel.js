// check if need to use SOCKS tunnel for accessing DC/OS from local
// tunnel need to be setup using Putty for example
var defaultEnv = require('../environment-defaults');


exports.initTunnel = function () {
    var useTunnel = ((process.env.USE_TUNNELING || defaultEnv.USE_TUNNELING) == 'true');
    if (useTunnel) {
        this.tunnelAgent = require('socks5-http-client/lib/Agent');
        this.tunnelAgentOption = {
            socksHost: '127.0.0.1',
            socksPort: process.env.SOCKS_PORT || defaultEnv.SOCKS_PORT
        }
        //global.logger.info('tunnelAgentOption:' + this.tunnelAgentOption);
    }

};
