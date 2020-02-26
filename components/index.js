import Navbar from './Navbar'

const components = [Navbar]

export default {
  install(Vue) {
    components.forEach(item => {
      Vue.component(item.name, item)
    })
  },
}
