<h1 align="center">React-admin-vite</h1>

<div align="center">

A simple template of react.

[![OSCS Status](https://www.oscs1024.com/platform/badge/KinXpeng/react-admin-vite.svg?size=small)](https://www.oscs1024.com/project/KinXpeng/react-admin-vite?ref=badge_small)

</div>

## Project introduction



Detectado: Chino (simplificado)

español

inglés

francés

inglés

español

francés
- The project is a backend management system based on `vite` (react18 version), and all pages and functions are implemented with functional components and hooks.
- Project preview: https://temp.cins.cc
- Technology/UI framework used
- React Hooks
- Routing (v6 version): `react-router-dom`
- Global state management: `mobx` `mobx-react-lite`
- Configured with powerful CSS tools: `tailwindcss`
- UI framework: `antd`
- Internationalization: `i18next` `react-i18next`
- Ajax data request: `axios`
- Function implementation: (The interface design refers to the style of antd-pro)

- Interface adaptation: Supports responsive layout for PC and == mobile terminals ==.
- Interface style switching: dark style and light style.
- Theme color switching: 8 theme colors of antd-pro.
- Internationalization: Use `i18n` to achieve internationalization, currently supports switching between Chinese and English.
- Configurable routing: Based on `react-router-dom`, a separate configurable router similar to `vue` is implemented for unified management.
- Routing authentication: Encapsulate Auth high-order components to implement login interception.
- Axios encapsulation: Based on `axios` unified processing, request and response interception are implemented, and global interfaces are uniformly managed.
- Token persistence: Encapsulate tool functions to use local storage to implement token persistence.
- Mobx state management: Use `mobx-react-lite` as a link package to implement data responsiveness; split the store by function to achieve modularization of mobx.

## Usage

- Menu configuration

- A new first-level menu can be written in `router/modules` and needs to be introduced in `routes.ts`.
- To create a secondary menu under an existing primary menu, you can directly find the corresponding file in `modules`.
- The new page is located in `pages`, and try to keep the directory and route structure consistent.
- The menu is also added in `routes.ts`, and you can refer to the example for configuration.

- Multi-language configuration

- The multi-language file is located in the `i18n/localels` directory, and currently supports Chinese and English.

- Refer to the existing menu configuration for the use of menu label.
Mostrar más
1.020 / 5.000
- The project is a backend management system based on `vite` (react18 version), and all pages and functions are implemented with functional components and hooks.
- Project preview: https://temp.cins.cc
- Technology/UI framework used
- React Hooks
- Routing (v6 version): `react-router-dom`
- Global state management: `mobx` `mobx-react-lite`
- Configured with powerful CSS tools: `tailwindcss`
- UI framework: `antd`
- Internationalization: `i18next` `react-i18next`
- Ajax data request: `axios`
- Function implementation: (The interface design refers to the style of antd-pro)

- Interface adaptation: Supports responsive layout for PC and == mobile terminals ==.
- Interface style switching: dark style and light style.
- Theme color switching: 8 theme colors of antd-pro.
- Internationalization: Use `i18n` to achieve internationalization, currently supports switching between Chinese and English.
- Configurable routing: Based on `react-router-dom`, a separate configurable router similar to `vue` is implemented for unified management.
- Routing authentication: Encapsulate Auth high-order components to implement login interception.
- Axios encapsulation: Based on `axios` unified processing, request and response interception are implemented, and global interfaces are uniformly managed.
- Token persistence: Encapsulate tool functions to use local storage to implement token persistence.
- Mobx state management: Use `mobx-react-lite` as a link package to implement data responsiveness; split the store by function to achieve modularization of mobx.

## Usage

- Menu configuration

- A new first-level menu can be written in `router/modules` and needs to be introduced in `routes.ts`.
- To create a secondary menu under an existing primary menu, you can directly find the corresponding file in `modules`.
- The new page is located in `pages`, and try to keep the directory and route structure consistent.
- The menu is also added in `routes.ts`, and you can refer to the example for configuration.

- Multi-language configuration

- The multi-language file is located in the `i18n/localels` directory, and currently supports Chinese and English.

- Refer to the existing menu configuration for the use of menu label.

- For the configuration of multi-language in the page, refer to the existing page (for example: use t('home') function).
Enviar comentarios
Resultados de traducción disponibles 

    ```js
    import { useTranslation } from 'react-i18next'
    
    function test(){
      const { t } = useTranslation() // 国际化 （使用时需在组件中使用，否则会报错）
    }
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3003](http://localhost:3003) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
