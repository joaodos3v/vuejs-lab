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

### 16. Evitando Re-Renderização com v-once

- A diretiva `v-once` indica que o valor lido (interpolado) será interpretado apenas uma vez e inserido diretamente na tag. Depois disso, o VueJS não ficará mais monitorando para saber se precisa alterar determinado valor.
  - Essa estratégia só deve ser utilizada quando deseja-se exibir apenas o valor inicial da propriedade. Seu principal benefício é a economia de recurso.

### 17. Como Imprimir HTML Puro

- Nas raras vezes em que for necessário criar um elemento HTML completo dentro da instância do VueJS e, então, posteriormente, renderizá-lo, a tag ideal para fazer isso é a `v-html` (que irá interpretar o componente).
  - Esse tipo de situação é citado como perigoso em virtude de ataques de injeção de script que podem ser feitos, como o XSS.

### 20. Escutando Eventos

- A diretiva `v-on` intercepta eventos. Ou seja, no evento "X", faça "Y".
  - Ex: `<button v-on:click="somar">Somar 1</button>`

### 21. Passando Nossos Próprios Argumentos com Eventos

- Como citado anteriormente, qualquer evento JavaScript que for interpretado vai, automaticamente, enviar o próprio evento como parâmetro para seu método. No entanto, caso você deseje enviar parâmetros customizados na mesma chamada, você deve usar a palavra reservada `$event` para sinalizar essa intenção.
  - Ex: `<button v-on:click="somar(5, $event)">Somar 5</button>`
- Inclusive, usar `$` na frente de algumas palavras reservadas é um padrão dentro do framework VueJ.

### 23. Modificadores de Eventos

- Esses modificadores são muito úteis para alterar o comportamento natural de um evento JavaScript.
  - O exemplo mais clássico é o `preventDefault` de um elemento `<a>`, por exemplo. Caso fosse necessário "impedir" seu comportamento natural, ao invés de criar um método que fosse disparado no click e dentro do click chamasse o prevent, basta criar um elemento desta forma:
    - `<a v-on:click.prevent="" href="http://google.com">Google</a>`
  - Além desses, o VueJS apresenta vários outros modificadores convenientes nas aplicações do dia a dia.
    - Veja a [documentação de modificadores de eventos](https://vuejs.org/v2/guide/events.html#Event-Modifiers).
