# NameGator

> Curso FREE disponibilizado pelo [Rodrigo Branas](https://www.linkedin.com/in/rodrigobranas/?originalSubdomain=br) no seu canal do YouTube: [Playlist Completa](https://www.youtube.com/playlist?list=PLQCmSnNFVYnTiC-pPY0SySbf-ZNGBwnaG).
>> **Observação:** sim, todo projeto está dentro da pasta 'aula1' HEUHEUHEU

## Aula #1

- Tecnologias que serão uilizadas:
  - Vue.js
  - Bootstrap
  - FontAwesome
  - GraphQL
  - Node.js
- Instalar o Vue CLI: `npm install -g @vue/cli`
- Para criar o projeto: `vue create <diretorio>`
  - Se já estiver dentro do diretório desejado: `vue create .`
- Sobre a estrutura de pastas:
  - Em `public` está o entrypoint da aplicação, ou seja, o template inicial.
  - Em `src` está o fica o nosso código, propriamente dito.
- Para instalar o Bootstrap: `npm install bootstrap --save`
- Para instalar o font-awesome: `npm install font-awesome --save`
- Assim como no React, o Vue exige que cada componente possua **apenas um elemento *root***.

## Aula #2

- Para fazer com que o lint não corrija automaticamente alguns problemas do seu código, abra o `package.json` e transforme a seguinte linha:
  - `"lint": "vue-cli-service lint"` **<- DEVE FICAR ASSIM ->** `"lint": "vue-cli-service lint --no-fix"`
- Para definir regras do `ESLint`, vá até a chave `esLintConfig` do seu **package.json**:
  - `"quotes": ["error", "double"]` = *Se alguma coisa estiver com aspas simples, um erro será lançado*
  - `"indent": ["error", "tab"]` = *Define que o tab deve ser usado para identação*
  - `"semi": ["error", "always"]` = *Define que o ponto e vírgula deve ser utilizado sempre*
- Dois *plugins* fundamentais para desenvolver com Vue.js são: **ESLint** e **Vetur** (trazem funcionalidades interessantes e praticidades).
- As [diretivas](https://br.vuejs.org/v2/api/index.html#Diretivas) são responsáveis por fazer a interação com a DOM (como *v-for, v-if, v-show*).
  - O *v-bind* serve para que, dado um elemento, seja possível definir atributos desse elemento. Por ex: em uma `img`, definir seu `src`; em um `a`, definir seu `href`.
  - o `v-` é um prefixo que serve para diferenciar as diretivas do Vue de outras diretivas que poderemos criar.
- Para detectar eventos no Vue.js, utiliza-se a diretiva `v-on`. Após usar essa diretiva, informa-se qual é o evento que deve ser "ouvido".
  - Ex.: `v-on:click`
