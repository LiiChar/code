import log from '../utils/visualize.js';

export default () => {
    log
    .head("Upload\t\t | -u [path] [name] |")
    .option("-u", "Argument for uploading file", "char")
    .option("name", "Name download file", "null || string")
    .head("Download\t | -d [name] [path] |")
    .option("-d", "Argument for donwloading file", "char")
    .option("name", "Name download file" , "string|require")
    .option("path", "Path to download file ", "null || string");
}

