const express = require('express');
const cors = require('cors');
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const defaultEnv = require('./environment-defaults');
const busboyBodyParser = require('busboy-body-parser');
const sessionMiddleware = require('./session-middleware');
const nodemailer = require('nodemailer');
const session = require('express-session');
const os = require('os');
const customLogger = require('./utils/logger');
const crypto = require('crypto');
const compression = require('compression');
const request = require('request');

const app = express()

//ASC_APIs
app.use('/api/init', require('./routes/katsura-prototype-api'));
