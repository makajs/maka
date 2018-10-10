'use strict';

const paths = require('../config/paths');
const utils = require('./utils');
const consts = require('../config/consts')

utils.npm([`adduser`, '--registry', consts.makaServerUrl, '--exact'], paths.appSrc)
