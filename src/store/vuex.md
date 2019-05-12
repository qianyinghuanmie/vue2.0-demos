###  vuex的简介

*核心概念*`

- state

  驱动应用的数据源；

+ getter

  Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

  *mapGetters 辅助函数*'

* mutation

  更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。

  ```
  const store = new Vuex.Store({
    state: {
      count: 1
    },
    mutations: {
      increment (state) {
        // 变更状态
        state.count++
      }
    }
  })
  ```
  - 调用的方式

  ```
  store.commit('increment')
  ```
  ```
  store.commit({
  type: 'increment',
  amount: 10
  })
  ```
  *mutation 都是同步事务：*'

- action

    Action 类似于 mutation，不同在于：

    Action 提交的是 mutation，而不是直接变更状态。

    Action 可以包含任意异步操作

    ```
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      mutations: {
        increment (state) {
          state.count++
        }
      },
      actions: {
        increment (context) {
          context.commit('increment')
        }
      }
    })

    ```

+ muodule

  vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

- 获取全局变量值的方法

  store.state.(变量名)

+ 更改全局变量的方法

  store.commit(方法名)  再次强调，我们通过提交 mutation 的方式，，是因为我们想要更明确地追踪到状态的变化。这个简单的约定能够让你的意图更加明显，这样你在阅读代码的时候能更容易地解读应用内部的状态改变。

  这样的话，跟vue本质更改数据的方式是相似的。，
