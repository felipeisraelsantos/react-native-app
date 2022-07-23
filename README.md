# react-native-app

### Instação de pacotes para estilização

https://docs.nativebase.io/install-expo

npm install native-base
expo install react-native-svg
expo install react-native-safe-area-context

### Instalação de fontes

https://docs.expo.dev/guides/using-custom-fonts/

expo install expo-font @expo-google-fonts/[fonte a ser utilizada]

### Instalação de de biblioteca de conversão de svg

https://github.com/kristerkari/react-native-svg-transformer

npm i react-native-svg-transformer --save-dev

Mescle o conteúdo do metro.config.jsarquivo do seu projeto com esta configuração (crie o arquivo se ele ainda não existir).

metro.config.js:

const { getDefaultConfig } = require("expo/metro-config");

``` 
module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

#### Usando TypeScript
Se você estiver usando o TypeScript, você precisa adicionar isso ao seu declarations.d.tsarquivo (crie um se você ainda não tiver um, mas não coloque na pasta raiz do seu projeto):

```
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```
### Instalação de icones

https://phosphoricons.com/

npm install --save phosphor-react-native

### Instalando react navigation 

https://reactnavigation.org/docs/getting-started/

npm install @react-navigation/native

expo install react-native-screens

https://reactnavigation.org/docs/hello-react-navigation

npm install @react-navigation/native-stack

## Integração com Firebase

https://firebase.google.com/?hl=pt

vincular a conta do gmail
criar projeto

Criação
  Authentication 
    Vamos Começar
      Escolha " E-mail/Senha"

  No painel clique em "Users"
    clique em "Adicionar Usuários"
    Crie um e-mail(ficticio) exemplo: fulano@email.com e senha de 6 digitos

Criação
  Firestore Database
    Criar Banco de Dados
      Escolha "Iniciar no modo de teste"
        "Avançar" depois "Ativar"

### Instalando bibliotecas para utização do firebase

https://rnfirebase.io/

  ##### Getting Started

  Instale o módulo "app" React Native Firebase na raiz do seu projeto React Native com NPM

  ##### Usando npm
    npm install --save @react-native-firebase/app

```
  A integração com o Expo é possível tanto no fluxo de trabalho simples quanto no fluxo de trabalho gerenciado personalizado por meio de plug- ins de configuração .

   O React Native Firebase não pode ser usado no aplicativo "Expo Go", pois requer código nativo personalizado .
```
  https://docs.expo.dev/guides/config-plugins/


  ##### Adicionando o plug-in nativo do Firebase

  Para estar usando o Native Firebase com Expo, você começará a usar o plugin @react-native-firebase/app. Você pode consultar os documentos do React Native Firebase para obter mais detalhes, conforme necessário.

  Vá no arquivo app.json, e adicione o seguinte trecho

  ```"plugins": [
      "@react-native-firebase/app"
    ]
  ```
  Depois na tela do firebase adicione o dispositivo

  clique no dispositivo (ex: android)

  colocar nome no dispositivo

  no arquivo app.json adicione a a config

  ```"android": {
      "package": "nome da aplicação",
      "googleServicesFile": "./google-services.json"
    }
  ```
  Será necessário criar para o iOS também, adicione a linha ao app.json

  ```"ios": {
      "googleServicesFile": "./GoogleService-Info.plist"
    },
  ```
  Em seguida, você precisa usar o ***```expo prebuild --clean ```*** comando conforme descrito no guia "Adicionar código nativo personalizado" para reconstruir seu aplicativo com as alterações do plug-in. Se esse comando não for executado, você encontrará erros de conexão com o Firebase.

  ##### instalando firestore

  https://rnfirebase.io/firestore/usage

    npm i @react-native-firebase/firestore

  https://rnfirebase.io/auth/usage

    npm i @react-native-firebase/auth

  Após essas alterações será necessário executar o comando

  ***```expo run:android```***