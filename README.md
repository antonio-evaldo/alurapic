# Angular parte 2: Autenticação, Forms e Lazy loading

## Módulo 1

- criação de um componente de login;
- validação de formulário;

Primeiro importamos `ReactiveFormsModule` no módulo que queremos validar o formulário. No componente que guarda o formulário, declaramos um variável `loginForm` do tipo `FormGroup`, de `@angular/forms` do módulo:

```ts
export class SignInComponent implements OnInit {
  
  loginForm: FormGroup;
}
```

Para **construir** essa variável de fato, injetamos uma variável `formBuilder` do tipo `FormBuilder`, que também vem de `@angular/forms`. Podemos então, em `ngOninit`, atribuir a `loginForm` o retorno de `formBuilder.group()`:

```ts
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
```

Onde `Validators` também é uma classe de `@angular/forms`. Note que não injetamos essa dependência no construtor, pois usamos as propriedades estáticas dessa classe.

Além disso, acredito que `loginForm` não é uma injeção de dependência basicamente porque queremos usar esse atributo no template do componente. Fazemos o seguinte *data binding*:

```html
<form
  [formGroup]="loginForm"
>
</form>
```

Por fim, nos inputs adicionamos os atributos `formControlName="userName"` e `formControlName="password"` nos seus respectivos inputs.

- como componentizar mensagens de validação;
- como enviar crendenciais para a API;
- como redirecionar e obter referências do template (`ViewChild`);

Para redirecionar a página, importamos `router`

Para que um componente lide diretamente como um elemento filho no DOM, utilizamos o decorator `@ViewChild()`:

```ts
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput = ElementRef<HTMLInputElement>;
}
```

`userNameInput` é o nome da variável de template que colocamos no elemento:

```html
    <input #userNameInput
      formControlName="userName"
    >
```

- descobrindo a plataforma de execução.

## Módulo 2

- como acessar o header de resposta;

Vamos utilizar o `auth.service.ts`. A estratégia será obter dados do header da resposta da requisição de login antes de lidar com o *observable* retornado por `authenticate()`. Vamos importar o método `tap` de `rxjs/operators`. Depois de `http.post()`, usamos `.pipe(tap())`, e no parâmetro de `tap()` colocamos uma função callback que recebe como parâmetro a resposta da requisição:

```ts
  return this.http.post(
    'url_path...',
    { userName, password },
    { observe: 'response' }
  ).pipe(tap(res => {
    const authToken = res.headers.get('x-access-token');
    console.log(authToken);
  }));
```

E para termos acesso ao `headers` do parâmetro, devemos adicionar o terceiro parâmetro `{ observe: 'response' }` no `post()`.

- armazenamento de token;

Armazenando o token no *localStorage*:

```ts
localStorage.setItem('authToken', authToken);
```

- a segurança do token;
- cabeçalho da nossa aplicação.

## Módulo 3

- como separar responsabilidades;
- qual o papel do `BehaviorSubject`;

Precisamos utilizar o padrão `Observable` porque queríamos enviar uma informação de um componente do `Router` para um componente fora do `Router`, que já havia sido renderizado. E utilizamos `BehaviorSubject` em vez de `Subject` porque há situações em que a notificação acontece antes da renderização desse componente fora do `Router`, como quando atualizamos a página, por exemplo.

- utilização do *Async pipe*;
- a implementação do logout;
- a diretiva `routerLink`.

## Módulo 4

- criação de um componente de registro;
- validação de formulário de registro;
- como criar nosso próprio validador;
- validando de maneira assíncrona;
- submissão de dados.

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
