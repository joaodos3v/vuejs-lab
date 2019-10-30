# [Udemy] Curso Vue JS 2 - O Guia Completo (incl. Vue Router & Vuex)

## Seção 1: Introdução

### 3. Extendendo Nossa Aplicação VueJS

- Sempre que associa-se um método que foi criado dentro da instância do Vue.js com um evento dentro de determinado componente HTML, por padrão, o evento é passado como parâmetro (embora seja possível passar parâmetros customizados).
  - > **Ver:** primeira-app-v2.html

## Seção 2: Usando VueJS para Interagir com a DOM

### 10. Introdução do Módulo

- Este módulo abordará a base do Vue.js:
  - Template
  - Eventos
  - Dados customizados e do JavaScript
  - Propriedades reativas do Vue.js
  - Two-way data-binding
  - Como aplicar estilo nas nossas tags

### 13. Acessando Dados na Instância VueJS

- Vale lembrar que uma propriedade e um método, por exemplo, não poderão ter o mesmo nome, pois os atributos são colocados "na raiz" da instância do objeto Vue. Com isso, os nomes não podem ser duplicados!

### 14. Binding de Atributos

- O `v-bind` serve para fazer uma ligação entre algo que está na VueInstance e um atributo da tag dentro do template. Exemplo de uso:
  - `<a v-bind:href="link">Google</a>`
  - `link` = '<http://google.com.br'>

### 15. Entendendo e Usando Diretivas

- Uma diretiva é uma propriedade personalizada, que não é nativa do HTML (mas o HTML5 permite que propriedades customizadas sejam criadas).
  - Essas propriedades são interpretadas pelo VueJS. No VueJS, também é possível criar diretivas próprias (além das do framework).
