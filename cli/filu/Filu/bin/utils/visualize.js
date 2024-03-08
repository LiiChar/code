import { kill, pid } from "node:process";
import cliProgress from "cli-progress";

export const colorPic = {
  black: '\x1b[40m"',
  yellow: "\x1b[33m%s\x1b[0m",
  black: "\x1b[40m",
  green: "\x1b[42m",
  blue: "\x1b[44m",
  magenta: "\x1b[45m",
  cyan: "\x1b[46m",
  white: "\x1b[47m",
  gray: "\x1b[100m",
  red: "\x1b[41m",
};

function head(msg) {
  console.log(msg + ":");
  return this;
}
function option(arg, description, type) {
  let line = "";

  line += `\t${arg}\t${description}${
    description.length > 25 ? "" : "\t"
  }\t\t\t[${type}]`;

  console.log(line);
  return this;
}
function error(msg, color = "black", code = 200) {
  console.log(colorPic[color], `Error ${code}: ${msg}`, "\x1b[0m");
  kill(pid);
}
function message(msg, color = "black") {
  console.log(colorPic[color], msg, "\x1b[0m");
}

function progressBar(file, chanks = 100) {
  const bar = new cliProgress.SingleBar({
    format:
      `${file} |` +
      "{bar}" +
      "| {percentage}% || {value}/{total} Chunks",
    barCompleteChar: "\u2588",
    barIncompleteChar: "\u2591",
    hideCursor: true,
  });

  bar.start(chanks, 0, {
    chanks: chanks,
  });

  const update = (c) => {
    bar.update(chanks / 100 * c)
  }

  const stop = () => {
    bar.stop();
  }

  return {
    update, stop
  };
}

export default {
  head,
  option,
  error,
  message,
  progressBar,
};
