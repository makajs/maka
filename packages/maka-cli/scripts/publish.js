'use strict';

const paths = require('../config/paths');
const utils = require('./utils');

utils.yarn(['upgrade', '--registry', consts.makaServerUrl, '--exact' ], paths.appSrc)


