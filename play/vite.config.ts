import {defineConfig} from "vite";
//使用 ES6 的解构语法，从 vite 包中导入 defineConfig 函数。
//defineConfig 函数用于创建 Vite 的配置对象。
import vue from "@vitejs/plugin-vue";
//这一行代码从 @vitejs/plugin-vue 包中导入 Vue 插件。
//此插件用于处理 Vue 单文件组件。

//@ts-ignore
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
//默认导出配置对象的语法。
//defineConfig 函数接受一个配置对象作为参数，并将其导出作为默认配置。
    plugins:[vue(), DefineOptions()],
    //在配置对象中，plugins 属性用于指定要使用的 Vite 插件。
    //在这个例子中，使用了 vue() 插件，它将处理 Vue 单文件组件的解析和编译。
})

/*
vite.config.ts 是一个 Vite 项目的配置文件，用于配置 Vite 构建工具的行为。
*/