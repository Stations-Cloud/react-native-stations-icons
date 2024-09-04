### Usando Icones com React Native

1. **Adicione a Fonte ao Seu Projeto**:

   - Copie a pasta `assets/fonts` da sua biblioteca para a raiz do seu projeto React Native.

2. **Configure o React Native para Carregar a Fonte**:

   - Adicione o seguinte código ao seu `react-native.config.js`:

   ```javascript
   module.exports = {
     assets: ["./assets/fonts"],
   };
   ```
