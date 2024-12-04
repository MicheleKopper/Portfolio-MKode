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