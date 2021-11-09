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

É adicionado com `npm install bootstrap@4.1.1` no caso desse projeto. Em seguida, indicar o caminho do arquivo bootstrap no arquivo `angular.json` da raiz do projeto, adicionando na lista em **projects > alurapic > architect > build > styles**.

- Criação de um novo componente
- A importância de declarar o componente em um módulo

Criamos uma pasta com o arquivo `nomeDoModulo.module.ts` e colocamos junto com as pastas dos componentes que farão parte desse módulo. Um módulo também é uma classe, mas que declaramos com o decorator `@NgModule`, onde podemos configurar quais componentes serão visíveis entre si (`declarations`) e quais iremos exporta para serem visíveis fora do módulo (`exports`). Podemos também indicar quais módulos queremos importar (`imports`).

- Como passar dados para o componente através das *inbound properties*
- Criação de um módulo e boas práticas
- A diretiva `*ngFor`

## Módulo 3

- Consumir uma Web API através do serviço `HttpClient`
- Injeção de dependência e a importância de *providers*
- Isolamento da lógica de acesso à Web API em classe de serviço

Devemos criar um **serviço** para receber um parâmetro do tipo `HttpClient` no construtor, e esse serviço é uma classe que recebe o *decorator* `@Injectable`. No serviço, criamos métodos que retornam objetos do tipo `Observable`, que será diferente dependendo se a requisição foi do tipo GET, POST, etc.

- Tipagem do retorno da API através de interface e sua vantagem
- Componentes possuem ciclo de vida
- A fase `OnInit`

## Módulo 4

- `BrowserModule` vs `CommonModule`

Só podemos importar o `BrowserModule` no `app.module.ts`. Esse módulo já inclui o `CommomModule`, que é o que traz as diretivas como `ngFor` e `ngIf`. Ao criar um novo componente, é boa prática já importarmos o `CommonModule`.

- Single Page Application e rotas no lado do navegador
- O módulo `RouterModule`
- A diretiva `router-outlet` como grande lacuna para exibição de outros componentes
- Módulo de rotas e definição de rotas
- Como lidar com páginas 404
- Parametrizando rotas e como obter valores do segmento parametrizado

## Módulo 5

- Novo componente para listar fotos
- Adequação dos dados recebidos pelo componente
- Quando a fase `OnInit` não é suficiente
- A interface `OnChanges`, e como interagir com `SimpleChanges`

## Módulo 6

- *Binding* de eventos
- Implementação de *Pipe*
- *Resolvers* e como integrá-lo no Roteamento
- `RxJS` e o `Subject`
- Aplicando *debounce* para otimização da aplicação

Importamos o `Subject` do `RxJS` e no `PhotoList` criamos uma propriedade `debounce` do tipo `Subject<string>`. O `debounce` irá tratar o dado que digitamos no campo de filtro, nesse caso aplicando um *debounce* de 300ms. O dado é enviado a partir de `debounce.next()` no *event binding* do input e é recebido em `debounce.pipe().subscribe()`, que configuramos no `ngOnInit` do componente.

- Utilizando novamente `PhotoService` para paginação de dados

Criamos um método `listFromUserPaginated` que recebe também a página de onde queremos buscar as fotos. Importamos o `HttpParams`, que possui o método `append`, onde passamos como parâmetros o nome do *query param* (nesse caso, "page") e o seu valor (nesse caso, o número da página). A API retornará os dados de acordo.

- Criação do `LoadButton` para carregar novas fotos
- Utilização do `ng-template` e **variáveis de template**

## Módulo 7

- Submódulos
- Integração com Font Awesome
- Componente *container* e `ng-content`
- Componentizando o filtro e *output property*

A *output property* é na verdade um *handler* de evento personalizado que será uma propriedade de um componente. No nosso caso, queremos enviar o texto digitado de um input para o elemento pai do componente. No componente filho, que tem o input, declaramos o seguinte:

```ts

@Component({
  selector: 'ap-filho-component',
  templateUrl: './filho.component.html'
})
export class FilhoComponent implements OnInit {
  @Output() onTyping = new EventEmitter<string>();
}
```

E no template:

```html
<input
  type="text"
  (keyup)="onTyping.emit($event.target.value)"
>
```

Assim, no template do componente pai, fazemos assim:

```html
<ap-filho
  (onTyping)="text = $event"
>
</ap-filho>
```

Assim, a propriedade `text` do pai receberá o valor que digitarmos no input do filho. A função `emit()` da *output property* `onTyping` dispara o evento personalizado, e o valor passado no parâmetro será o `$event` que escrevemos no template do pai.

- Criando a primeira diretiva

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
