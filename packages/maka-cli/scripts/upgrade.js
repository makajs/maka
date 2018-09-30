'use strict';

const paths = require('../config/paths');
const utils = require('./utils');

utils.yarn(['upgrade', '--registry', 'https://registry.npm.taobao.org/', '--exact' ], paths.appSrc)
