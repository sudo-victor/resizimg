#!/usr/bin/env node

const program = require("commander")
const inquirer = require("inquirer")
const figlet= require("figlet")
const chalk = require("chalk")
const fs = require("fs")
const path = require("path")
const package = require("./package.json")
const { option } = require("commander")
const sharp = require("sharp")

program.version(package.version)

console.log(chalk.green(figlet.textSync("RESIZIMG")))

program  
   .command("run")
   .description("Redimensiona uma imagem")
   .option("-d, --directory [directory]", "O caminho da imagem")
   .option("-s, --sizes [sizes]", "Os tamanhos que a imagem será redimensionada")
   .option("-fn, --folderName [folderName]", "O nome da pasta onde será incluida as imagens", "redimensionado")
   .action(async (options) => {
      let answers;
      let dir;

      // Se não passou o cminho da imagem no console, o sistema fará a pergunta do caminho
      if(!options.directory) {

         dir = await inquirer.prompt([
            {
               type: "input",
               name: "directory",
               message: "Qual é o caminho da imagem?",
               validate: value => value ? true : "Não é permitido o caminho ser vazio"
            }
         ])
      }

      // Captura os tamanhos desejado para redimensionar
      if(!options.sizes) {
         answers = await inquirer.prompt([
            {
               type: "input",
               name: "sizes",
               message: "Quais são os tamanhos que deseja redimensionar? (separados por vírgulas)",
               validate: value => value ? true : "Não é permitido os tamanhos serem vazio"
            }
         ])
      }
      
      const sizes = options.sizes? options.sizes.split(",") : answers.sizes.split(",")
      const directory = options.directory || dir.directory 
      const dirname = path.dirname(directory)
      const [filename, extension] = path.basename(directory).split(".")
      const destination = `${dirname}/${options.folderName}`

      // Cria a pasta que será incluida as imagens se não existir
      if(!fs.existsSync(destination)) {
         fs.mkdirSync(destination)
      }

      // Redimensiona as imagens
      sizes.forEach(size => {
         sharp(directory)
            .clone()
            .resize({width: Number(size)})
            .toFile(`${destination}/${filename}-${size}.${extension}`)
            .then(info => {
               console.log(chalk.green(`Imagem redimensionada para o tamanho ${size}`))
            })
            .catch(err => {
               console.log(chalk.red(`Não foi possível redimensionar para o tamanho ${size}`))
            })
      })

   })

program.parse(process.argv)
