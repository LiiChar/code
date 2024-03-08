#! /usr/bin/env node

import utils from "./utils/utils.js";
import help from "./command/help.js";
import uploadFile from './utils/upload.js';
import download from './utils/download.js';
import log from './utils/visualize.js'

if (utils.argvContainNode("--help")) {
  help();
} else if (utils.argvContainNode("-u")) {
  const path = process.argv[utils.findIndexArgv("-u")+1];
  const name = process.argv[utils.findIndexArgv("--name") + 1];
  uploadFile(path, name)
} else if (utils.argvContainNode("-d")) {
  const path = process.argv[utils.findIndexArgv("-d")+2] ? process.argv[utils.findIndexArgv("-d")+1] : '.';
  const name = process.argv[utils.findIndexArgv("-d")+1];
  download(name, path)
} else {
  log.error('Argument undefined', 'red', 305)
}

