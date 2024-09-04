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

### Conclusão

Embora sua biblioteca não dependa diretamente de React Native, seguir esses passos permitirá que você inclua fontes e forneça suporte para projetos React Native. Seus usuários finais poderão configurar e usar a fonte com os ícones em seus próprios aplicativos React Native, garantindo que a fonte e os ícones estejam disponíveis corretamente.
