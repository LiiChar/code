import log from "./visualize.js";
import utils from "./utils.js";
import { join } from "path";
import axios from "axios";
import fs from "fs";
import constants from "../const/index.js";
import axiosConfig from '../config/axios.config.js'

const Donwload = async (name, path) => {
  try {
    const pathArray = utils.convertPathToArray(path);
    const bar = log.progressBar(name);

    const content = (
      await axios.get(`${constants.url_api}/content/${name}`, axiosConfig.downloadProgressBar(bar))
    ).data;

    const fileName = `${content.data.nameFile}.${content.data.type}`;
    const { type, data } = JSON.parse(content.data.content);
    const thisPath = [process.cwd()].concat(pathArray).concat([fileName]);

    if (!fs.existsSync(join(...thisPath))) {
      fs.writeFileSync(join(...thisPath), Buffer.from(data), { flag: "a+" });
      log.message(`File successefuly download to ${path} as ${name}`, "green");
    } else {
      log.error("File is exists", "yellow", 304);
    }
  } catch (error) {
    log.error(error.response.data.error, "red", error.response.status);
  }
};

export default Donwload;
