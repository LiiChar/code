const fs = require("fs");
const path = require("path");

const nameFile = process.argv[2];

if (isValidParametre(nameFile)) {
  return;
}
if (!fs.existsSync(path.join(__dirname, "..", "..", "..", "src"))) {
  console.log("Добавте в node_module данную библиотеку");
  return;
}
if (
  !fs.existsSync(
    path.join(__dirname, "..", "..", "..", "src", "app", "context")
  )
) {
  fs.mkdir(path.join(__dirname, "..", "..", "src", "app", "context"));
}
if (
  fs.existsSync(
    path.join(
      __dirname,
      "..",
      "..",
      "..",
      "src",
      "app",
      "context",
      `use${nameFile}.tsx`
    )
  )
) {
  console.log("Такой файл уже существует");
  return;
}

const stream = fs.createWriteStream(
  path.join(
    __dirname,
    "..",
    "..",
    "..",
    "src",
    "app",
    "context",
    `use${nameFile}.tsx`
  )
);

const content = [
  '"use client"\n\n',

  'import React, { FC } from "react";\n\n',
  `//describe your methods and state\n`,
  `interface IDefaultValue${nameFile}Context {};\n\n`,
  `const DefaultValue${nameFile}Context: IDefaultValue${nameFile}Context = {};\n\n`,
  `const ${nameFile}Context = React.createContext<IDefaultValue${nameFile}Context>(DefaultValue${nameFile}Context);\n\n`,
  `export const use${nameFile} = () => {\n`,
  `    return React.useContext(${nameFile}Context)\n`,
  `}\n\n`,
  `interface IPropsProvider {\n`,
  `    children: React.ReactNode\n`,
  `}\n\n`,

  `const ${nameFile}Provider: FC<IPropsProvider> = ({children}) => {\n`,
  `   //your state and metonds\n\n`,
  `   //insert your state and methods the same as interface default value\n`,
  `    const value = {}\n`,
  `  return (\n`,
  `    <${nameFile}Context.Provider value={value}>\n`,
  `        {children}\n`,
  `    </${nameFile}Context.Provider>\n`,
  `  )\n`,
  `}\n\n`,
  `export default ${nameFile}Provider`,
];

try {
  for (const stringLine of content) {
    stream.write(stringLine);
  }
  stream.end();
  console.log(
    `Контекст ${nameFile} создан под именем use${nameFile} в папке context`
  );
} catch (error) {
  console.log("Контекст не удалось создать(");
}
function isValidParametre(parametre) {
  if (!parametre) {
    console.log("Передайте аргумент имени контекста");

    return true;
  }

  if (parametre[0] !== parametre[0].toUpperCase()) {
    console.log("Агрумент должен начинаться с большой буквы");

    return true;
  }

  if (parametre.charCodeAt(0) < 61 || parametre.charCodeAt(0) > 122) {
    console.log("Агрумент должен начинаться с латинской буквы");

    return true;
  }

  return false;
}
