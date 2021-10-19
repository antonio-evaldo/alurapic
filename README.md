# Angular parte 1: Fundamentos

## Módulo 1

- Instalação do Angular CLI

Nesse curso, instalamos essa versão do Angular CLI:

```bash
npm install -g @angular/cli@6.0.7
```

- Criação de um novo projeto com a ferramenta e como executá-lo

Para criar o projeto:

```bash
ng new alurapic
```

Movendo para a pasta do projeto:

```bash
cd alurapic
```

Rodando o servidor e abrindo a página no navegador automaticamente com a flag `--open`:

```bash
ng serve --open 
```

- Compreensão da estrutura criada
- *Data binding* através de *Angular Expressions*
- *Data binding* de atributos

Considere essa declaração do componente (arquivo `card.component.ts`):

```ts
@Component({
  selector: 'ap-card',
  templateURL: 'card.component.html'
})
export class CardComponent {
  title = 'Gon Freecs'
  url = 'https://cdn.myanimelist.net/images/characters/11/174517.jpg';
  description = 'Gon Freecs';
}
```

Podemos fazer *data binding* usando as *Angular Expressions* dentro de tags HTML, com duplos colchetes. No template do componente (arquivo `card.component.html`), temos:

```html
<h1>{{ title }}</h1>
```

Quando queremos pegar uma propriedade do componente e usar em um atributo de uma tag HTML, fazemos uso do *data binding* de atributos. Envolvemos o atributo da tag entre colchetes e o seu valor é o nome do atributo:

```html
<h1>{{ title }}</h1>
<img [src]="url" [alt]="description">
```

Por fim, podemos usar o componente dentro de algum outro componente, assim:

```html
<ap-card></ap-card>
```

Perceba que todos os cards aqui seriam iguais, pois seus atributos estão *hard coded* (fixos).

- Convenções adotadas até o momento

## Módulo 2

- Como o arquivo `bootstrap.css` pode ser adicionado ao processo de *build* do Angular CLI.
- Criação de um novo componente
- A importância de declarar o componente em um módulo
- Como passar dados para o componente através das *inbound properties*
- Criação de um módulo e boas práticas
- A diretiva `*ngFor`

# Alurapic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
