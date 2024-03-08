import {createStore} from 'vuex'
import { postModule } from './postModule'

const route = createStore({
  modules: {
    post: postModule
  }
})

export default route;   