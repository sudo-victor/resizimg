<h1 align="center">
<img src="./assets/logo.jpg" width="120" height="120"/>
<br/>
Resizimg
</h1>

<p align="center">
↕CLI de redimensionamento de imagem↔
</p>
<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Tecnologias usadas

-   ⚙ **Commander** - É uma estrutura de linha de comando leve, expressiva e poderosa para Node.js.
-   🛠 **Inquirer** - Uma coleção de interfaces de usuário de linha de comando interativas comuns.
-   💅 **Chalk** - Colore a saída do console do shell com JavaScript..
-  🖌 **Figlet** - Criar Arte ASCII a partir de texto.

## Começando

### Instalação

-   Clone este repositório `git clone https://github.com/sudo-victor/resizimg.git`
-   Entre na pasta `cd resizimg`
-   Intale as dependências `yarn`

### Inicialização

-   Rode `yarn link` ou `npm link` e a CLI já estará disponível no seu terminal para ser usada.

## Opções

### Caminho da imagem
Para passar o caminho da imagem por flag:
`--directory [caminho da imagem]` ou `-d [caminho da imagem]`

### Tamanho da imagem
A flag `--sizes` permitirá passar os tamanhos desejados, separados por vírgula, para serem redimensionados:
`--sizes [tamanhos,separados,por,vírgulas]` ou `-s [tamanhos,separados,por,vírgulas]`

### Nome da pasta
Poderá passar a flag `--folderName` para modificar a pasta que será criada com as imagens redimensionadas, por padrão é a `redimensionado`:
`--folderName [nome da pasta]` ou `-fn [nome da pasta]`

