# Front End Challange
Bibliotecas utilizadas:
- Axios
- Styled Components
## Como consumir a API da marvel?
Sera necessário criar uma conta no site: https://developer.marvel.com/
Ao criar, sera disponibilizado a chave publica, e a chave privada.

Para utilizar qualquer endpoint sera necessário criar um hash que contenha o timestamp, chave privada e a chave publica.

Eu utilizei este site para gerar o hash: [md5 hash generator](https://www.md5hashgenerator.com)
Então utilizei o postman para testar as requisições, e ver como seria o retorno.
#### Requisitos funcionais
- [x] Página de listagem de personagens (home):
  - [x]  Exibir os 20 primeiros resultados da API;
  - [x]  Permitir ordenação por nome do personagem;
  - [x]  Permitir filtrar por nome, pelo campo de busca;
  - [x]  Permitir mostrar apenas os personagens favoritos;
  - [x]  Permitir o usuário favoritar/desfavoritar até 5 personagens;
- [x] Página de detalhe do personagem:
  - [x]  Exibir dados do personagem;
  - [x]  Permitir o usuário favoritar/desfavoritar (dentro do limite de 5).
  - [x]  Exibir últimos 10 quadrinhos lançados deste personagem (onSaleDate);
___
## Código
Eu separei o código em pastas, que foram divididas em:
- Services
- Helpers
- Components
- Assets
Organizei assim para ficar mais fácil a organização e a leitura.
___
### Services
As services foram usadas para pegar os dados da api, como todos os herois, e os quadrinhos que certo heroi tem
___
### Helpers
A pasta Helpers, tem apenas um helper que é onde eu faço a requisição com o Axios:
```js
import axios from "axios"

const getRequest = async (url) => {
    try{
        const response = await axios.get(url)

        if(response.status === 200){
            return response.data.data.results
        }
    }catch(err){
        console.warn(err)
    }
    return false
}

export default getRequest
```
___
### Components
A pasta Components é a pasta mais utilizada em todo o projeto, entregando os componentes necessarios para cada ocasião.
___
### Assets
É a pasta de modelo enviada para o desafio
