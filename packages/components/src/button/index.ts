import _Button from './button.vue';
import type{App,Plugin} from "vue";
//type 关键字表示只导入类型而不导入具体的值
//可以用于在编译过程中进行静态类型检查

type SFCWithInstall<T>=T & Plugin;
//T 是一个表示组件类型的泛型参数。
//它可以接受任何类型作为实际参数，例如 Button 组件、Icon 组件等。
//& 是 TypeScript 中的交叉类型（Intersection Type）操作符。
//交叉类型可以用于将多个类型合并为一个类型。
//使用 & 操作符，我们可以创建一个新的类型，该类型具有多个类型的所有成员。

const withInstall=<T>(comp:T)=>{
    //给组件添加一个 install 方法，当通过 app.use() 全局安装组件时，该方法会被调用。
    (comp as SFCWithInstall<T>).install=(app:App)=>{
        const name=(comp as any).name;
        //将 comp 对象强制类型转换为 any 类型。
        //any 类型表示一个动态类型，它可以接受任何类型的值，而不进行类型检查。

        //注册组件
        app.component(name,comp as SFCWithInstall<T>);
    };
    return comp as SFCWithInstall<T>;
}

export const Button=withInstall(_Button);
export default Button;

//这段代码的目的是为组件添加全局安装的能力。
//通过使用 withInstall 函数，组件被增强了一个 install 方法，
//使它可以通过 app.use() 在 Vue 应用程序中进行全局安装。
//这样，开发者就可以在需要使用 Button 组件的任何组件中直接使用它，而无需在每个组件中显式导入它。