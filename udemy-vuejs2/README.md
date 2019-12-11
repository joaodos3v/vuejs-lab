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

### 31. Sintaxe Reduzida

- Em projetos maiores, é interessante usar a escrita mais reduzida. Então:
  - `v-on:` pode ser substituído por: `@`
    - Ex.: `<button @click="somar">Somar</button>`
  - `v-bind:` pode ser substituído por: `:`
    - Ex.: `<input type="text" :value="contador">`

### ENCERRAMENTO - SEÇÃO 2

- Documentação Oficial - [Introdução](https://br.vuejs.org/v2/guide/)

- Documentação Oficial - [Sintaxe de Template](https://br.vuejs.org/v2/guide/syntax.html)

- Documentação Oficial - [Manipulação de Eventos](https://br.vuejs.org/v2/guide/events.html)

- Documentação Oficial - [Dados Computados & Observadores](https://br.vuejs.org/v2/guide/computed.html)

- Documentação Oficial - [Interligações de Classe e Estilo](https://br.vuejs.org/v2/guide/class-and-style.html)

## Seção 3 - Usando Condicionais & Renderização de Listas

### 43. Renderização Condicional com v-if/v-else

- A diretiva `v-else` só funcionará se o elemento exatamente anterior ao elemento com essa diretiva possuir um `v-if` ou um `v-else-if`.
- Quando o `v-if` é utilizado, o elemento será (ou não) **removido** da página.
  - Diferentemente do `v-show`, que apenas "esconde" aquele trecho de HTML.
    - O `v-show` deve ser usado quando o trecho de HTML é muito grande, pois ele será **menos custoso** para que o framework renderize.
      - Vale ressaltar que isso é levado em conta quando o elemento não tem "níveis de segurança". Isto é, você não vai esconder o menu dos administradores com `v-show`. Nesse caso, é melhor mesmo realizar um *dettach* com `v-if`.

### 44. Usando v-if com Template

- Uma dica bastante interessante para quando não for desejado incrementar nenhuma tag no HTML, mas é necessário englobar algum controle Vue em vários componentes de uma vez, é usar a tag `<template>` (disponível com HTML5). Isso permitirá que você aplique o controle que desejar e não criará nenhuma `<div>` extra, por exemplo.
  - Ex.:

```html
<!-- Antes -->
<div v-if="logado">
    <p>Usuário Logado: {{ nome }}</p>
    <p>Perfil: Admin</p>
</div>

<!-- Depois -->
<template v-if="logado">
    <p>Usuário Logado: {{ nome }}</p>
    <p>Perfil: Admin</p>
</template>
```

### 48. Acessando o índice atual

- Em um `v-for`, para iterar sobre chave e valor, a ordem **sempre é**: VALOR, CHAVE.
  - Ex.: `<li v-for="(cor, i) in cores">{{ cor }}</li>`

### 52. Identificando os Elementos no v-for

- É muito interessante que ao usar um `v-for`, a propriedade `key` seja utilizada (principalmente quando a iteração renderiza elementos muito complexos). Isso "ajudará" o Vue a rastrear o elemento que deve ser atualizado.
  - Veja mais na [documentação](https://br.vuejs.org/v2/guide/list.html#Maintaining-State).

### ENCERRAMENTO - SEÇÃO 3

- Documentação Oficial - [Renderização Condicional](https://br.vuejs.org/v2/guide/conditional.html)

- Documentação Oficial - [Renderização de Listas](https://br.vuejs.org/v2/guide/list.html)

## Seção 5 - Entendendo a Instância Vue

### 70. Noções básicas sobre a Instância Vue

- [Documentação Completa sobre a Instância Vue](https://br.vuejs.org/v2/guide/instance.html)
- Duas perguntas importantes que serão respondidas na próxima aula:
  - *É possível utilizar duas instâncias do Vue.js, operando juntas, na mesma página?*
  - *É possível acessar os dados do Vue.js externamente?*

### 71. Usando Múltiplas Instância Vue

> É possível utilizar duas instâncias do Vue.js, operando juntas, na mesma página?

- **Sim**, é possível.
  - No entanto, exceto em raras situações, isso não vai acontecer (não é indicado).
  - Quais são essas situações?
    - Em situações que uma página foi construída com outro framework;
    - Ou usando outra tecnologia (PHP, Python, Java.. | Server-Side)
  - Porém, em aplicações criadas com Vue.js desde o início, o ideal é utilizar componentes!

### 72. Acessando a Instância Vue Externamente

> É possível acessar ou modificar os dados de uma instância Vue.js externamente (seja a partir do Vanilla JS ou de outra instância do Vue.js)?

- **Sim**, é possível.
  - Porém, não existe nenhuma situação em que essa seja a melhor solução.
  - Esse tipo de acesso externo só é interessante para acessar os dados com outra tecnologia/framework, onde seja necessário capturar os dados da instância do Vue.js.
    - Além disso, caso isso seja necessário, deve-se tomar cuidado para não alterar uma propriedade que está sob o controle do Vue.js e modificar seu comportamento.

### 75. Uma Análise Mais Detalhada de $el e $data

- `$el` = *toda a estruta HTML definida a partir do template (a versão que realmente está sendo usada na DOM)*
- `$data` = *todos os dados que você passou na construção da sua instância e que são "observados" pelo Vue*

### 82. O Ciclo de Vida da Instância Vue #01

- Os principais métodos do *life cycle Vue* são:
  - `beforeCreate()`
  - `created()`
  - `beforeMount()`
  - `mounted()`
    - **Aqui o ciclo de vida de ínicio da instância/componente foi encerrado**
  - `beforeUpdate()`
  - `updated()`
    - **Esses dois métodos são chamados toda vez que existe diferença entre a VirtualDOM e a DOM**
  - `beforeDestroy()`
  - `destroyed()`
    - **Métodos chamados apenas se a instância de Vue for "destruída"**

## Seção 6 - Fluxo de Desenvolvimento "Real" usando Vue CLI

### 87. Por que Precisamos de um Servidor Web?

- Porque VueJS executa no cliente, só que sendo servido por um servidor (`file://` não é o protocolo `http://`)
- Para testar a aplicação em um cenário mais realista
- Porque requisições assíncronas (AJAX) precisam de um servidor
- A boa notícia é: **o próprio Vue CLI tem um servidor embutido baseado em Node**

### 89. Usando o Vue CLI para criar Projetos

- Uma estruta básica do fluxo de desenvolvimento com o Vue CLI é:
  - `vue create`
    - **Usar Preset** ou
    - **Configuração Customizada**
      - Adicionar Plugin (PWA, ESLint, SASS...)
      - Salvar como novo Preset?
  - **Desenvolvimento & Build**
  - **Adicionar Plugins** 
    - `vue add @vue/nome-plugin` ou
    - Adicionar plugins de terceiros (o comando muda um pouco)

### 93. Como Construir sua APP para Produção

- O comando para criar a pasta `dist/` é: `npm run build`
  - Feito isso, basta pegar essa pasta e colocar no servidor de produção desejado (Apache, nginx, Amazon, Heroku)

### 95. Adicionando Plugins ao Projeto

- A nomenclatura de plugins oficiais suportados pelo Vue CLI começa com: `@vue/cli-plugin-<NOME>`
  - Já plugins de terceiros, possivelmente terão sua nomenclatura como: `vue-cli-plugin-<NOME>`
  - Por isso, para adicionar um plugin ao Vue, geralmente utiliza-se apenas o sufixo final (pois o prefixo é padrão):
    - Ex.: `vue add electron-builder` **resultará em =>** `vue add vue-cli-plugin-electron-builder`

### 96. Mais sobre Arquivos ".vue" e o CLI

- É possível aprender mais sobre o arquivo ".vue" [nesse artigo da documentação oficial](https://br.vuejs.org/v2/guide/single-file-components.html)

- É possível aprender mais sobre o método `render()` [nesse outro artigo na documentação oficial](https://br.vuejs.org/v2/guide/single-file-components.html)

- Aqui está [tudo sobre o Vue CLI](https://cli.vuejs.org/)

## Seção 7 - Introdução aos Componentes

### 106. Usando CSS com Escopo de Componente

- A propriedade `scoped` que pode ser adicionada à tag `<style>` em um componente é bastante útil, pois impedirá que esse estilo seja aplicado aos demais componentes.
  - Quando um `<style>` em um componente-pai é marcado com `scoped`, ele não irá transmitir seu estilo indefinidamente para os componentes-filhos do seu componente-filho direto.
    - *No entanto*, ele aplicará seu estilo para o elemento root do seu componente-filho direto (uma div, por exemplo).

### 109. Oranizando os Componentes em Pastas

- Para organizar o projeto, muito vai depender da opinião do desenvolvedor. Mas, como via de regra, geralmente cria-se a pasta `components` dentro da pasta `src` para armazenar os **componentes**.
  - Com isso, dentro dessa pasta, podem ser criados subdiretórios que armazenarão os componentes com base em sua responsabilidade dentro do sistema.
    - Ex.: a pasta `template` pode ser criada para armazenar componentes que são pertinentes ao layout da aplicação;
    - Ex2.: já a pasta `user` pode ser criada para armazenar componentes que se referem somente às páginas que possuem o conteúdo vinculado à entidade usuário.
  - Também dentro da pasta `src`, costuma-se criar a pasta `views`, que *também é* populada por componentes, mas que possuem um nível de granularidade menor (geralmente representarão páginas completas do sistema, ou seja, um conjunto de componentes).
- Uma dica pertinente à inclusão de arquivos (caminhos **absolutos** e **relativos**) é que, para evitar usar o caminho relativo ao arquivo atual, pode-se referenciar o caminho a partir da pasta `src` utilizando o prefixo `@`.
  - Ex.: **caminho relativo =>** import Footer from "./components/template/Footer";
  - Ex2.: **caminho absoluto =>** import Footer from "@/components/template/Footer";

### ENCERRAMENTO - SEÇÃO 7

- Documentação Oficial - [Componentização VueJS](https://br.vuejs.org/v2/guide/components.html)

- Documentação Oficial - [Registro de Componentes](https://br.vuejs.org/v2/guide/components-registration.html)

## Seção 8 - Comunicação Entre Componentes

### 115. Comunicação Direta com Props #01

- Basicamente, `props` é o jeito mais fácil e rápido para trocar informações entre componentes.
  - Utilizando essa tática, basta informar no componente-filho (que vai **receber** as props) quais propriedades ele espera e no componente-pai (que vai **enviar** as props) quais são as propriedades que ele enviará, juntamente com os valores.

### 117. Nome das Propriedades são Case-Sensitive

- Vale lembrar que o uso das props (diferentemente da DOM, que é **case-insensitive**) respeita o **case-sensitive**.
  - Então, ao criar um componente e enviar  `<componente :nomePropriedade="exemplo" />`, será necessário indicar no componente que espera essa property que o valor esperado é `nomePropriedade`.

### ENCERRAMENTO - SEÇÃO 8

- Documentação Oficial - [Props](https://br.vuejs.org/v2/guide/components.html#Passando-Dados-aos-Filhos-com-Props)

- Documentação Oficial - [Eventos Personalizados](https://br.vuejs.org/v2/guide/components.html#Enviando-Mensagens-ao-Pai-com-Eventos)

## Seção 9 - Uso Avançado de Componentes

### 134. Configurando Projeto do Módulo

- Um bom site para criar gradientes é o [uiGradients](https://uigradients.com/).

### 137. Como o Conteúdo do Slot é Estilizado

- Ao utilizar o componente do Vue `<slot>`, apesar de usar um `<style scoped>`, por exemplo, tanto o componente-pai (que está "enviando o HTML") como o compnente-filho (que irá "receber e renderizar o HTML") terão "direito" de aplicar classes de estilos no elemento.
  - Isso quer dizer que deve-se tomar cuidado, pois conflitos de estilização podem ocorrer nessas situações.

### 144. Método de Ciclo de Vida de um Componente Dinâmico

- Além dos slots, é possível utilizar a tag `<component>`.
  - Essa tag permite criar os chamados **componentes dinâmicos**, que possibilitam renderizar um componente definido dinamicamente através da instância VueJS.
  - Esse tipo de componente é bastante utilizado em conjunto com seus métodos de ciclo de vida (os principais são `created`, `destroyed`, `activated`, `deactivated`).
    - Vale ressaltar que `activated` e `deactivated` só serão chamados quando o componente dinâmico estiver circundado por uma tag `<keep-alive>`.

### ENCERRAMENTO - SEÇÃO 9

- Documentação Oficial - [Slots](https://br.vuejs.org/v2/guide/components.html#Distribuicao-de-Conteudo-com-Slots)

- Documentação Oficial - [Componentes Dinâmicos](https://br.vuejs.org/v2/guide/components.html#Componentes-Dinamicos)

## Seção 10 - Projeto #02 - Tarefas (TODO)

### 159. Usando Local Storage

- A propriedade `watch`, por **default**, observa apenas "superficialmente" os dados.
  - Por exemplo, ao *observar* um array, ela irá registrar apenas mudanças na quantia de elementos (remover, adicionar) ou na sua ordem. No entanto, se o dado com o qual se está trabalhando for um array de objetos, possivelmente você irá desejar observar alterações nas propriedades dos objetos também.
    - Para que isso seja possível, o Vue.js traz por padrão uma forma: enviar uma configuração a mais no momento de criação do `watch`.

> Exemplo Normal (superficial):

```javascript
watch: {
  dado() {
    // esse método só seria invocado quando mudanças "principais" fossem detectadas no array (adicionar, excluir)
    // aqui você poderia escrever qualquer código
  }
}
```

> Exemplo Citado (observando com "profundidade"):

```javascript
watch: {
  dado: {
    deep: true,
    handler() {
      // esse método será invocado quando QUALQUER mudança for detectada no array (adicionar, excluir, modificar objetos)
      // aqui você poderia escrever qualquer código
    }
  }
}
```

## Seção 11 - Manipulando Entrada de Usuário com Formulários

### 166. Modificar Entrada de Usuário com Modificadores de Input

- Existem **3** modificadores de input que podem ser utilizados junto com a diretiva `v-model`:
  - `lazy` - é utilizado para evitar que o Vue.js faça o *two-way data binding* à cada tecla que o usuário digitar
    - Com isso, ele se preocupará em atualizar tanto o dado da instância Vue quando da view apenas quando o usuário **"sair do input"** (tiver finalizado sua interação)
  - `trim` - remove todos os espaços em branco no início e no fim do campo
  - `number` - o Vue.js se encarrega de converter o valor digitado no campo para número (através do `parseFloat()`) antes de "disponibilizar" o valor para ser utilizado
    - Ele, por si só, não faz validação nenhuma; apenas converte para número caso a string do campo referenciado possua um valor válido

### 168. Usando Checkboxes e Salvando os Dados em um Array

- Com Vue.js, é muito fácil utilizar a estrutura de um checkbox, por exemplo.
- Basta criar um array na sua estrutura de dados e atribuir esse array no v-model de cada input do tipo checkbox.
  - Automaticamente o Vue irá tratar essa situação e adicionar o valor armazenado no atributo `value` para o seu array.

### 170. Manipulando Combobox com `<select>` e `<option>`

- Uma observação importante é que, caso você possa usar o valor que está sendo exibido ao usuário como o valor do select, o atributo `value` não é necessário.
  - Automaticamente o que estava sendo exibido e foi selecionado pelo usuário, será setado como o valor do `<select>`

### 174. Hora de Praticar - Formulários (Resposta)

- Para implementar um `v-model` customizado em componentes próprios, ou seja, fazer com que o componente que você criou suporte a diretiva `v-model`, a base é:
  - Tratar o valor recebido através da `prop "value()"`;
  - Emitir (`$emit`) eventos do tipo `input` quando as `props` forem alteradas.

### ENCERRAMENTO - SEÇÃO 11

- Documentação Oficial - [Formulário](https://br.vuejs.org/v2/guide/forms.html)

## Seção 12 - Usando e Criando Diretivas

### 178. Entendendo Diretivas

- Como já citado neste documento, a diretiva `v-html` disponível no Vue.js deve ser usada com bastante cuidado!
  - Isso porque ela é perfeita para ataques de [Cross Site Scripting (XSS)](https://pt.wikipedia.org/wiki/Cross-site_scripting).

### 179. Como a Diretiva Funciona - Funções Gatilho (Hooks)

- Os "métodos gatilho" (ou métodos de ciclo de vida de uma diretiva - *hooks*) são 5:
  - **bind(el, binding, vnode):** quando a diretiva é interligada com o elemento.
    - É chamado uma única vez
    - O único valor que deve ser alterado é o `el`. Os demais devem ser *readonly*.
  - **inserted(el, binding, vnode):** elemento inserido no nó pai
  - **update(el, binding, vnode, oldVNode):** quando o componente é atualizado (antes filhos)
  - **componentUpdated(el, binding, vnode, oldVNode):** quando o componente é atualizado (depois filhos)
    - A principal diferença para o anterior é que este garante que os nós-filhos já foram atualizados.
  - **unbind(el, binding, vnode):** quando a diretiva é desvinculada do elemento
- Leia mais sobre [diretivas aqui](https://br.vuejs.org/v2/guide/custom-directive.html).

### 181. Passando Argumento para Diretiva personalizada

- A **anatomia** (sintaxe) de uma diretiva é a seguinte:
  - `v-<nomeDaDiretiva>:argumento.modificador1.modificador2="valor"`
- Ou seja:
  - É possível passar **um único argumento**;
  - É possível passar **vários modificadores**;
  - É possível passar **um único valor** (mas que pode ser um objeto com várias propriedades).

## Seção 13 - Melhorando sua App com Filtros e Mixins

### 192. Introdução do Módulo

- **Filtros são:** são transformações que podemos fazer sob os valores (assim como as `computed properties`).
  - Em algumas situações, os filtros são mais práticas que as propriedades computadas. Mas, geralmente, serão menos performáticos.
- **Mixins são:** formas e técnicas de reuso baseadas em composição.
  - Basicamente, você consegue reutilizar código sem, necessariamente, repetí-lo.

### 195. Filtro & v-bind

- Os dois locais onde é possível utilizar filtros são dentro da renderização (`Double Mustache -> {{}}`) ou dentro do `v-bind -> :`.
  - Geralmente, esse tipo de estratégia que é muito fácil e prática é utilizada para conversões e mudanças em textos simples, onde não há uma carga muito grande de processamento.
  - Caso seja necessário um filtro mais robusto, que preciso de performance otimizada, o ideal é utilizar `computed properties`.

### 197. Criando e Usando Mixins

- `Mixins` nada mais são do que uma forma elegante de "misturar" componentes.
  - Ou seja, se, de alguma forma, for necessário ter os dados, métodos, *watchers*, propriedades computadas ou filtros de outro componentes, por exemplo, ao invés de copiar e colar todo o código, é possível utilizar a propriedade `mixins: []`.
- Vale ressaltar, por exemplo, que caso os métodos que seriam misturados ou mesmo os dados tenham um conflito de nomes com as propriedades do componente atual, as propriedades do **componente** serão mantidas (terão prioridade).

### 198. Criando um Mixin Global (Caso Especial!)

- Também é possível criar um `mixin` global. No entanto, deve-se ter um certo cuidado ao utilizá-lo (bem mais do que o local).
  - Isso porque ele será executado em **todos** os componentes.
  - Além disso, vale ressaltar que, caso um método de ciclo de vida seja utilizado dentro de um `mixin`, ele será executado tanto para o `mixin` quanto para o componente (isto é, será chamado 2x e a performance será prejudicada).

### 200. Hora de Praticar - Filtros e Mixins (Resposta)

- Vale ressaltar que um filtro pode ser utilizado com o nome exatamente igual à função em que ele foi declarado. Ex.: `... | nomedoFiltro`
  - Mas, também existe a possibilidade de trocar todos os `camelCase` por hífen. Ex.: `... | nome-do-filtro`.

### ENCERRAMENTO - SEÇÃO 13

- Documentação Oficial - [Filtros](https://br.vuejs.org/v2/guide/filters.html)
- Documentação Oficial - [Mixins](https://br.vuejs.org/v2/guide/mixins.html)

## Seção 14 - Adicionando Animações e Transições

### 206. Configurando Transição

- As 6 classes CSS que estão à disposição para serem utilizadas com Vue.js são:
  - De **entrada**:
    - `*-enter`
    - `*-enter-active`
    - `*-enter-to`
  - De **saída**:
    - `*-leave`
    - `*-leave-active`
    - `*-leave-to`
- Todas essas nomenclaturas são padrões da própria lib e o `*` indica o nome do estilo customizado.
  - Ex.: `meuestilo-enter`
  - Caso um nome não seja informado, um `v` será adicionado automaticamente.
    - Ex.: `v-enter`

### 208. Criando Transição "Fade" com Propriedade CSS Transition

- Tanto no estilo `*-enter-to`, quanto no `*-leave`, o **padrão** do elemento é ficar com `opacity: 1;`.
  - Portanto, não é necessário criar esse estilo apenas para dizer que o elemento deve ficar visível, pois isso será feito automaticamente.

### 209. Criando Transição "Slide" com Propriedade CSS animation

- Para definir qual será a "forma" como uma animação será feita, é possível utilizar as [CSS animation-timing-function Properties](https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp).
  - Elas, basicamente, permitem que seja especificado uma curva de velocidade da animação.

### 210. Misturando as Propriedades transition e animation

- É comum existir essa "mistura" de efeitos de transição e animação.
  - No entanto, caso o tempo de duração dos dois efeitos seja muito destoante entre si, possivelmente ocorra problemas visuais (elemento não sumir como gostaria; retornar à posição original; enfim, comportamentos não esperados).
    - Isso ocorre porque o Vue.js, **por padrão**, dará "prioridade" para o efeito com maior tempo de duração.
    - Caso isso não seja o ideal, existe a diretiva `type` que permite que o desenvolvedor defina qual deve ser o efeito com "prioridade" (e, nesse caso, deve ser utilizado o efeito com **menor** tempo de duração).
      - Ex.: (*caso a ANIMAÇÃO tenha um tempo de duração menor*) => `<transition name="nomeAqui" type="animation">...</transition>`
      - Ex.: (*caso a TRANSIÇÃO tenha um tempo de duração menor*) => `<transition name="nomeAqui" type="transition">...</transition>`

### 212. Configurando Animação no Carregamento do Componente

- Quando um elemento estará sendo exibido na tela desde o carregamento da mesma (ou seja, ele estará visível desde a sua criação), por padrão, os efeitos de animação não serão aplicados no elemento (ele continuará sendo "inserido" na página abruptamente).
  - Para resolver essa situação e "forçar" o elemento a executar os efeitos de animação configurados na sua criação, basta adicionar a diretiva `appear` no elemento. Isso fará com que o elemento execute as animações mesmo que ele esteja o tempo todo visível.
    - Ex.: `<transition name="slide" appear>...</transition>`

### 215. Transicionar entre Múltiplos Elementos

- A tag `<transition>` suporta apenas um único elemento dentro dela.
  - Para tratar grupos, existe outra tag: a `<transition-group>`.
- Além disso, quando se deseja altentar entre dois elementos (com `v-if/v-else`, pois `v-show` geraria problemas, uma vez que ele apenas "esconde" o elemento com `display: none;`), **deve-se** utilizar a diretiva `key`.
  - Essa diretiva nada mais é do que um identificador para cada um dos elementos, que irá permitir que o Vue.js entenda e reconheça qual componente deve ser exibido e qual deve ser removido.
- Por fim, caso fique "estranho" ou seja necessário remover completamente o elemento original para, somente então, exibir o novo elemento, é possível utilizar a diretiva `mode` na tag `<transition>` e definir seu valor para **out-in**.
  - Isso fará com que o primeiro elemento termine completamente sua transição para, só então, o elemento seguinte iniciar a sua.

### 216. Escutando a Eventos de Transição (Hooks)

- O princípio é o mesmo do CSS: existirá um elemento entrando e saindo da tela.
  - Porém, nesse caso, existirão alguns "gatilhos" (métodos de ciclo de vida da tag `<transition>`) que serão utilizados para interceptar momentos específicos do elemento e executar algum tipo de trabalho.
  - Esses gatilhos são:
    - **4 métodos de entrada**:
      - `before-enter`
      - `enter`
      - `after-enter`
      - `enter-cancelled` => chamado eventualmente, quando a transição for cancelada (apenas)
    - **4 métodos de saída**:
      - `before-leave`
      - `leave`
      - `after-leave`
      - `leave-cancelled` => chamado eventualmente, quando a transição for cancelada (apenas)

### 218. Excluindo CSS da Animação

- Apesar de ser possível misturar efeitos CSS e JavaScript, existe a diretiva `css` do elemento `<transition>` que, caso receba o valor `false`, deixará explícito que o CSS não deve afetar esse elemento.
  - É ideal para ser utilizada em situações em que os efeitos e animações são feitos completamente em JavaScript, pois irá impedir qualquer tipo de "interferência" CSS.
  - Ex.: `<transition :css="false ..."`

### 221. Animando Listas com `<transition-group>`

- O elemento `<transition-group>`, diferentemente do `<transition>`, **cria um elemento** no HTML final da aplicação: por padrão, o elemento `<span>`.
  - Se desejar, é possível mudar para que o `<transition-group>` crie outro elemento através da diretiva `tag`.
    - Ex.: `<transition-group name="slide" tag="div"> ... </transition>`

## Seção 16 - Rotas em uma Aplicação VueJS

### 248. Entendendo os Modos de Rotas (Hash vs History)

- Existem basicamente dois modos de navegação possíveis na nossa aplicação:
  - O modo **Hash** -> `localhost:8080/#/...`
  - E o modo **History** -> `localhost:8080/...`
- Antes de tudo, é sempre bom ler a [Documentação Oficial - Vue Router](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)

#### Modo Hash

- Em um resumo bem simples, o modo `hash` recebe **todas** as requisições no `index.html` e chama `app.js`. A partir daí, o Vue.js é carregado, Vue-router, Vuex e tudo o mais. Ou seja, basicamente todas requisições vão pro mesmo lugar e, a partir desse ponto, o Vue.js começa a agir como uma SPA e o Vue-router, nesse caso, reconhece as rotas para renderizar o componente correto.
  - Pode-se dizer, portanto, que as navegações nesse modo são conhecidas "apenas pelo navegador" - isto é, não tem "interferência direta do servidor web".

#### Modo History

- Já o modo `history` considera tudo que vem após a barra (`/usuario` levará *usuario* em consideração). O problema é que, caso não exista a rota `usuario` (nesse exemplo), a aplicação não irá para o `index.html` por padrão.
  - É por isso que, nesse modo, é necessário realizar algumas configurações a mais, que indiquem que, quando a rota não for encontrada, a requisição deve ser redirecionada para o lugar correto.
  - Ou seja, nesse modo o servidor "reconhece" todas requisições e é ele qume vai ter que redirecionar as mesmas para o `index.html`.

### 268. Usando o Evento "beforeEnter"

- Para criar *"middlewares"* na aplicação, ou seja, interceptar requisições para executar certas tarefas (como impedir que o componente seja renderizado caso o usuário não seja admin), existem três estratégias com Vue.js + Vue-Router:
  - **De forma global:** qualquer transição para componente invocará esse trecho de código.
    - `beforeEach(to, from, next) -> ...`
  - **Dentro do router:** coloca uma validação para uma rota específica.
    - `beforeEnter(to, from, next) -> ...`
  - **No ciclo de vida do componente:** a verificação é colocada dentro do próprio componente, em um dos seus métodos de ciclo de vida.
    - `beforeRouteEnter(to, from, next) { ...`
      - *Vale destacar que é dentro da instância do componente, **não** dentro de `methods`*
      - Também vale o lembrete de que, nesse método, o componente **nem foi criado ainda** e, por isso, a propriedade `this` não aponta para o componente e também não é possível acessar valores e nem chamar seus métodos.
        - Caso seja necessário acessar as propriedades do componente **dentro desse método**, é possível chamar uma função callback. Ex.:

```javascript
beforeRouteEnter(to, from, next) {
  // ainda não seria possível acessar nenhuma propriedade da instância do componente
  // código aqui...

  next(vm => {
    // aqui já é possível acessar os atributos, e.g. vm.id
  });
},
```
