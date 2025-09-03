
# Prefeitura App (Expo)
App móvel simples para consumir a API da prefeitura.

## Rodar localmente
```bash
cd prefeitura-app
npm install
npx expo start
```
- Instale o app "Expo Go" no celular e leia o QR Code, **ou** execute no emulador Android/iOS.

### Configurar URL da API
Se o backend estiver rodando no **mesmo computador**, coloque o IP da sua máquina (na mesma rede do celular).
Edite `src/api.js`:
```js
const API_BASE = 'http://SEU_IP_LOCAL:3000';
```
Em ambiente Expo, você também pode definir a variável `EXPO_PUBLIC_API_BASE`:
```bash
EXPO_PUBLIC_API_BASE=http://SEU_IP_LOCAL:3000 npx expo start
```
