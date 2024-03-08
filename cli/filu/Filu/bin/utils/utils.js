function argvContainNode(node) {
  // let index = false;
  // process.argv.contain
  // for (arg of process.argv) {
  //     if (arg === node) {
  //         index = true;
  //     }
  // }
  return process.argv.includes(node);
}
function findIndexArgv(node) {
  let index = -1;
  for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === node) {
      index = i;
    }
  }
  return index;
}
function convertPathToArray(path) {
  if (path.includes("/")) {
    return path.split("/");
  } else if (path.includes("\\")) {
    return path.split("\\");
  } else {
    return [path];
  }
}

export default {
    argvContainNode,
    findIndexArgv,
    convertPathToArray
};
