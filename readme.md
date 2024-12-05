## React - MUI Material

01 - Rodar o comando para criar o projeto ReactJS. Trocar o nome do projeto

```bash
npm create vite@latest NOME-DO-PROJETO -- --template react-ts
```

02 - Prossiga a instalação `y`

03 - Abrir a pasta do projeto criado

04 - Instalar as dependências (node modules)

```bash
npm install
```

05 - Excluir arquivos CSS desnecessários `(index.css, app.css)`

06 - No arquivo `main.tsx` excluir o `import './index.css'`

07 - Instalar o `react-router-dom`

```bash
npm i react-router-dom
```

08 - Dentro de `src` criar a pasta `pages`. Criar os arquivos que vão representar as páginas, ex: `Home.tsx`

```bash
export function Home() {
  return (
    <div>
      <h1>Hellou</h1>
    </div>
  );
}
```

09 - Dentro da pasta `src`, criar a pasta `config`. Dentro de `config` criar a pasta `routes`

10 - Dentro da pasta `routes`, criar o arquivo `AppRoutes.tsx`. Colar o código abaixo:

```bash
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <h1>Not found</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
```

11 - Limpar o arquivo `App.tsx`

```bash
import { AppRoutes } from "./config/routes/AppRoutes";

function App() {
  return <AppRoutes />;
}

export default App;
```

12 - Rodar o script dev para subir o frontEnd. No terminal acessar o link local (ctrl + clique) http://localhost:5173/

```bash
npm run dev
```

# Instalação MUI Material

01 - Instalar o MUI Material

```bash
npm install @mui/material @emotion/react @emotion/styled
```

02 - Instalar os icones

```bash
npm install @mui/icons-material
```

03 - Importar o CSS baseline dentro do arquivo `App.tsx`

```bash
import { CssBaseline } from "@mui/material";
import { AppRoutes } from "./config/routes/AppRoutes";

function App() {
  return (
    <>
      <CssBaseline />
      <AppRoutes />
    </>
  );
}

export default App;
```

04 - Dentro da pasta `configs` criar a pasta `global`, criar o arquivo `GlobalStyles.tsx` e inserir o código abaixo:

```bash
import { GlobalStyles } from "@mui/material";
import { red } from "@mui/material/colors";

const styles = {
  "*": {
    margin: 0,
    padding: 0,
    background: red,
  },
};

export function GlobalStyle() {
  return <GlobalStyles styles={styles} />;
}
```

05 - Importar a função `GlobalStyle` dentro de `App.tsx`. Fazer a estilização

```bash
import { GlobalStyles } from "@mui/material";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import { CSSObject } from "@emotion/react";

const styles: Record<string, CSSObject> = {
  "*": {
    margin: 0,
    padding: 0,
    background: "blue",
    fontFamily: "Lato, sans-serif",
  },
};

export function GlobalStyle() {
  return <GlobalStyles styles={styles} />;
}
```

06 - Instalar fontes

```bash
npm install @fontsource/NOME DA FONTE
```

07 - Importar as fontes no `GlobalStyles.tsx` e adicionar no `styles`, ex: `fontFamily: "Lato, sans-serif"`

```bash
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
```
