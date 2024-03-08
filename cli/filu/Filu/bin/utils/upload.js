import fs from "fs";
import { join } from "path";
import utils from "./utils.js";
import log from "./visualize.js";
import axios from "axios";
import constants from '../const/index.js'
import axiosConfig from '../config/axios.config.js'

async function uploadFile(path, name) {
  const pathArray = utils.convertPathToArray(path);
  const thisPath = [process.cwd()].concat(pathArray);
  if (fs.existsSync(join(...thisPath))) {
    try {
      const data = fs.readFileSync(join(...thisPath));
      const body = {
        name: name,
        nameFile: pathArray.at(-1).split(".")[0],
        type: pathArray.at(-1).split(".")[1],
        content: data,
      };

      const bar = log.progressBar(pathArray.at(-1));
      
      await axios.post(`${constants.url_api}/upload`, body, axiosConfig.uploadProgressBar(bar));
      
      log.message("File successefuly upload", 'green');
    } catch (error) {
      log.error(error.response.data.error, "red", error.response.status);
    } 
  } else {
    log.error('File does`t exists', "red", 403);
  }
}

export default uploadFile;
