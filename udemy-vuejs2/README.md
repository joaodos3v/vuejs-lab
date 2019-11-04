# [Udemy] Curso Vue JS 2 - O Guia Completo (incl. Vue Router & Vuex)

- [Documentação Oficial - Instalação](https://br.vuejs.org/v2/guide/installation.html)

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
    - Veja a [documentação de modificadores de teclado](https://vuejs.org/v2/guide/events.html#Key-Modifiers).

### 28. Usando Two-Way-Binding

- Essa técnica funciona como o binding em "duas direções" e engloba as técnicas do `v-bind` e do `v-on` numa única diretiva (`v-model`), pois o HTML atualiza os dados Javascript que são controlados pela VueInstance e o que for atualizado no Vue, gera impacto no HTML.
  - Quando realiza `v-bind`, ocorre o bind de uma única direção (do Javascript pro HTML).
  - Enquanto que usando o `v-on`, captura-se um evento que aconteceu no template e altera algo na VueInstance (do HTML pro Javascript).

### 30. Monitorando as mudanças

- Propriedades computadas (`computed: {}`) são síncronas, ou seja, **devem** retornar um valor quando são chamadas.
  - Já com o `watch: {}`, que é assíncrono, você não terá uma propriedade computada e sim estará monitorando os valores de uma propriedade.
    - Em resumo, `watch` deve ser usado quando você deseja monitorar mudanças em determinada variável e fazer alguma ação em resposta à essas mudanças.
    - É útil nas situação de combobox Estado-Cidade (ao mudar o estado, recarrega a lista de cidades).
    - Ex. de uso:

    ```vuejs
    <!-- Template -->
    <div id="app">
        <button v-on:click="aumentar">Aumentar</button>
        <button v-on:click="diminuir">Diminuir</button>
        <p>Contador: {{ contador }}</p>
    </div>

    <!-- Script -->
    new Vue({
        el: '#app',
        data: {
            contador: 0,
        },
        watch: {
            contador(novo, antigo) { // O nome do método deve ser EXATAMENTE igual ao nome da propriedade monitorada
                setTimeout(() => {
                    this.contador = 0;
                }, 2000);
            }
        },
        methods: {
            aumentar() {
                this.contador++;
            },
            diminuir() {
                this.contador--;
            }
        }
    });
    ```

### 31. SIntaxe Reduzida

- Em projetos maiores, é interessante usar a escrita mais reduzida. Então:
  - `v-on:` pode ser substituído por: `@`
    - Ex.: `<button @click="somar">Somar</button>`
  - `v-bind:` pode ser substituído por: `:`
    - Ex.: `<input type="text" :value="contador">`

### ENCERRAMENTO - SEÇÃO 2

- Documentação Oficial - Introdução: https://br.vuejs.org/v2/guide/

- Documentação Oficial - Sintaxe de Template: https://br.vuejs.org/v2/guide/syntax.html

- Documentação Oficial - Manipulação de Eventos: https://br.vuejs.org/v2/guide/events.html

- Documentação Oficial - Dados Computados & Observadores: https://br.vuejs.org/v2/guide/computed.html

- Documentação Oficial - Interligações de Classe e Estilo: https://br.vuejs.org/v2/guide/class-and-style.html