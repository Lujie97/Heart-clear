//创建“外壳”组件App  React,{Component}这种形式 不是解构赋值，是react里有多种暴露
import React,{Component} from "react";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome"

//创建并暴露App组件
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}

// //暴露App组件  默认暴露
// export default App