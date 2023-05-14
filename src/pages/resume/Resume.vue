<script lang="ts" setup>
import styles from "./style.module.less";
</script>

<template>
  <main :class="styles.container">
    <header>
      <h1>许树佳的简历（Web前端开发）</h1>
    </header>
    <section>
      <header>
        <h2>个人信息</h2>
      </header>
      <ul>
        <li>
          <span>姓名：许树佳</span>
        </li>
        <li>
          <span>性别：男</span>
        </li>
        <li>
          <span>年龄：26岁</span>
        </li>
        <li>
          <span>民族：汉族</span>
        </li>
        <li>
          <span>籍贯：汕头</span>
        </li>
        <li>
          <span>学历：大专（计算机）</span>
        </li>
        <li>
          <span>工作经验：4年</span>
        </li>
      </ul>
    </section>
    <section>
      <header>
        <h2>前端技术</h2>
      </header>
      <ul>
        <li>
          <p>
            熟悉 HTML5, CSS3, JS, DOMAPI
            等前端基础内容，以及当下主流开发框架（React + Vue）。
          </p>
        </li>
        <li>
          <p>
            熟悉以 React(Hooks) + Less + Typescript + Immer
            结合起来的开发模式，并以此开发过大型Web应用。
          </p>
        </li>
        <li>
          <p>
            熟悉以 Vue(3.0) + Less + Typescript
            结合起来的开发模式，以此开发过多个应用，涉及PC以及移动端。
          </p>
        </li>
        <li>
          <p>
            熟悉前端工程化组件化，开发过多个大型组件模块，了解人机交互界面与操作逻辑设计。
          </p>
        </li>
        <li>
          <p>不断学习追逐前端最新前沿技术。</p>
        </li>
      </ul>
    </section>
    <section>
      <header>
        <h2>工作经历</h2>
      </header>
      <ul>
        <li>
          <p>汕头市众麦网络科技有限公司 - 任职前端开发 2018.4 - 2023.1</p>
        </li>
      </ul>
    </section>
    <section>
      <header>
        <h2>项目经历</h2>
      </header>
      <ul>
        <li>
          <p>ERP系统Web端项目</p>
          <p>
            主要使用 react + ant.design 进行开发。由应用主框架 + 业务模块形成。
          </p>
        </li>
        <li>
          <p>ERP移动端项目</p>
          <p>主要使用 vue + vantui 开发，是Web端ERP的简化版。</p>
        </li>
        <li>
          <p>MES客户端项目</p>
          <p>
            该项目是一个用 electron 开发的桌面应用，界面使用了 vue + typescript
            + element-plus 进行开发。
          </p>
        </li>
        <li>
          <p>套打打印项目</p>
          <p>
            该项目主要使用 typescript, react, vue, electron, ant.design,
            socket.io 等技术进行开发，涉及
            Web端，移动端，桌面端。由模版设计模块，Web端控制器模块，移动端控制器模块，打印代理服务端模块组成。
          </p>
        </li>
        <li>
          <p>应用启动器项目</p>
          <p>
            该项目是一个用 electron
            开发的桌面应用，用于给公司的Web应用提供稳定的运行环境。界面使用了
            vue + typescript 进行开发。
          </p>
        </li>
      </ul>
    </section>
    <section>
      <header>
        <h2>联系方式</h2>
      </header>
      <ul>
        <li>
          <p>手机：<a href="tel:13428342592">13428342592</a></p>
        </li>
        <li>
          <p>微信：13428342592</p>
        </li>
      </ul>
    </section>
    <div :class="styles['resume-ver']">许树佳的简历 Ver.230514-1</div>
  </main>
</template>
