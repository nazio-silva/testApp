## Configuração do ambiente

### Instalações MAC

Instale o homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

após a instalação do homebrew é necessário adiciona-lo ao zprofile com o comando

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/USERNAME/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

- _troque o USERNAME para o usuário do sistema_

Com o homebrew podemos instalar o node:

```bash
brew install node
```

adicione o node ao zsh

```bash
echo 'export PATH="/opt/homebrew/opt/node@16/bin:$PATH"' >> ~/.zshrc
```

reinicie o terminal

instale o yarn

```bash
brew install yarn
```

Na loja da apple procure e instale o xcode 13

para habilitar os emuladores de iPhone execute o comando:

```bash
sudo xcodebuild -license
```

aceite o contrato escrevendo `agree` no terminal.

### Extensões VSCode

- Editor Config
- ESLint
- Git Lens
- Prettier
- Prettier ESLint

## Iniciando

### Clone

execute o comando:

```
git clone URL_PROJETO
```

### Após baixar o código

Execute o comand `yarn` para instalar os pacotes necessários para a aplicação.
Será necessário concetar o seu device via USB no compoutador ou abrir um emulador no Android Studio

Para iniciar o projeto execute:

Android `yarn android`
IOs `yarn ios`

## Testes
`yarn test`
Jest
Coverage
### Comandos úteis

Para printar o conteúdo de um componente nos testes use:

```typescript
const { debug } = render(<Component />);
debug();
```
