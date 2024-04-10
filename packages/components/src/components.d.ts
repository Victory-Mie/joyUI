import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    JoyButton: typeof components.Button;
    //EaIcon: typeof components.Icon;
  }
}
export {};

//给全局组件加上提示效果