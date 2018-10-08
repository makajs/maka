'use strict';

const paths = require('../config/paths');
const utils = require('./utils');
const consts = require('../config/consts')
utils.yarn([ `login`, '--registry', consts.makaServerUrl, '--exact'], paths.appSrc)
