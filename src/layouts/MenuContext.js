// 创建上下文
// let {Provider, Consumer} = React.createContext()

// 假设我们有很多个组件，我们只需要在父组件使用Provider提供数据，然后我们就可以在子组件任何位置使用Consumer拿到数据，不存在跨组件的问题
// 提供数据

import { createContext } from 'react';
export default createContext();
