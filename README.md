# Angular parte 2: Autenticação, Forms e Lazy loading

## Módulo 1

- criação de um componente de login;
- validação de formulário;

Primeiro importamos `ReactiveFormsModule` no módulo que queremos validar o formulário. No componente que guarda o formulário, declaramos um variável `loginForm` do tipo `FormGroup`. Para **construir** essa variável de fato, injetamos uma variável `formBuilder` do tipo `FormBuilder`, que vem de `@angular/forms` do módulo. Podemos então, em `ngOninit`, atribuir a `loginForm` o retorno de `formBuilder.group()`:

```ts
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
```

Onde `Validators` também é uma classe de `@angular/forms`. No template, devemos fazer o seguinte *data binding*:

```html
<form
  [formGroup]="loginForm"
>
</form>
```

Por fim, nos inputs adicionamos o atributo `formControlName="nomeDoInput"`, onde `"nomeDoInput"` serão os nomes que definimos em `formBuilder.group()`.

- como componentizar mensagens de validação;
- como enviar crendenciais para a API;
- como redirecionar e obter referências do template (`ViewChild`);

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
