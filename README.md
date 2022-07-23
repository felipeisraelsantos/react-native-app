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