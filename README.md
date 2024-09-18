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
- 项目是基于 `vite` 搭建的后台管理系统（react18 版本），所有页面及功能采用函数式组件及 hooks 实现。
- 项目预览：https://temp.cins.cc
- 所用技术/UI 框架
  - React Hooks
  - 路由（v6 版本）：`react-router-dom`
  - 全局状态管理：`mobx` `mobx-react-lite`
  - 配置了强大的 CSS 工具：`tailwindcss`
  - UI 框架：`antd`
  - 国际化：`i18next` `react-i18next`
  - Ajax 数据请求：`axios`
- 功能实现：（界面设计参照了 antd-pro 的风格）

  - 界面适配：支持 PC 端和==移动端==的响应式布局。
  - 界面风格切换：暗色风格和亮色风格两种。
  - 主题色切换：antd-pro 的 8 种主题色。
  - 国际化：使用 `i18n` 实现国际化，当前支持中英文两种语言的切换。
  - 配置式路由：基于`react-router-dom`实现了和`vue`类似的单独可配置的 router，进行统一的管理。
  - 路由鉴权：封装 Auth 高阶组件，实现登录拦截。
  - axios 封装：基于`axios`统一处理，实现请求以及响应拦截，全局接口统一管理。
  - token 持久化：封装工具函数使用本地储存实现 token 持久化。
  - mobx 状态管理：以`mobx-react-lite` 作为链接包，实现数据响应式；按功能拆分 store，实现 mobx 的模块化。

## Usage

- 菜单配置

  - 新建一级菜单可写在 `router/modules` 里，需要在 `routes.ts` 中引入。
  - 在已有的一级菜单下建二级菜单可直接在 `modules` 中找到对应的文件。
  - 新建页面位于 `pages` 中，尽量使目录和路由的结构保持一致。
  - 菜单的添加同样位于 `routes.ts` 中，可参照示例进行配置。

- 多语言配置

  - 多语言文件位于 `i18n/localels` 目录下，目前支持中英两种语言。

  - 菜单label的使用方法参照已有的菜单配置。

  - 页面中多语言的配置可参考已有页面（例：使用t('home')函数）。
- Xiàngmù shì jīyú `vite`dājiàn de hòutái guǎnlǐ xìtǒng (react18 bǎnběn), suǒyǒu yèmiàn jí gōngnéng cǎiyòng hánshù shì zǔjiàn jí hooks shíxiàn. - Xiàngmù yùlǎn:Https://Temp.Cins.Cc - suǒyòng jìshù/UI kuàngjià - React Hooks - lùyóu (v6 bǎnběn):`React-router-dom` - quánjú zhuàngtài guǎnlǐ:`Mobx``mobx-react-lite` - pèizhìle qiángdà de CSS gōngjù:`Tailwindcss` - UI kuàngjià:`Antd` - guójì huà:`I18next``react-i18next` - Ajax shùjù qǐngqiú:`Axios` - gōngnéng shíxiàn:(Jièmiàn shèjì cānzhàole antd-pro de fēnggé) - jièmiàn shì pèi: Zhīchí PC duān hé ==yídòng duān ==de xiǎngyìng shì bùjú. - Jièmiàn fēnggé qiēhuàn: Ànsè fēnggé hé liàngsè fēnggé liǎng zhǒng. - Zhǔtí sè qiēhuàn:Antd-pro de 8 zhǒng zhǔtí sè. - Guójì huà: Shǐyòng `i18n`shíxiàn guójì huà, dāngqián zhīchí zhōng yīngwén liǎng zhǒng yǔyán de qiēhuàn. - Pèizhì shì lùyóu: Jīyú `react-router-dom`shíxiànle hé `vue`lèisì de dāndú kě pèizhì de router, jìnxíng tǒngyī de guǎnlǐ. - Lùyóu jiàn quán: Fēngzhuāng Auth gāo jiē zǔjiàn, shíxiàn dēnglù lánjié. - Axios fēngzhuāng: Jīyú `axios`tǒngyī chǔlǐ, shíxiàn qǐngqiú yǐjí xiǎngyìng lánjié, quánjú jiēkǒu tǒngyī guǎnlǐ. - Token chíjiǔ huà: Fēngzhuāng gōngjù hánshù shǐyòng běndì chúcún shíxiàn token chíjiǔ huà. - Mobx zhuàngtài guǎnlǐ: Yǐ `mobx-react-lite`zuòwéi liànjiē bāo, shíxiàn shùjù xiǎngyìng shì; àn gōngnéng chāi fēn store, shíxiàn mobx de mókuài huà. ## Usage - càidān pèizhì - xīnjiàn yī jí càidān kě xiě zài `router/modules`lǐ, xūyào zài `routes.Ts`zhōng yǐnrù. - Zài yǐ yǒu de yī jí càidān xià jiàn èr jí càidān kě zhíjiē zài `modules`zhōng zhǎodào duìyìng de wénjiàn. - Xīnjiàn yèmiàn wèiyú `pages`zhōng, jǐnliàng shǐ mùlù hé lùyóu de jiégòu bǎochí yīzhì. - Càidān de tiānjiā tóngyàng wèiyú `routes.Ts`zhōng, kě cānzhào shìlì jìnxíng pèizhì. - Duō yǔyán pèizhì - duō yǔyán wénjiàn wèiyú `i18n/localels`mùlù xià, mùqián zhīchí zhōng yīngliǎng zhǒng yǔyán. - Càidān label de shǐyòng fāngfǎ cānzhào yǐ yǒu de càidān pèizhì. - Yèmiàn zhōng duō yǔyán de pèizhì kě cānkǎo yǐ yǒu yèmiàn (lì: Shǐyòng t('home') hánshù).
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
