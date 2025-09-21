import { type App } from 'vue'
import LText from './components/LText/index'

const components = [
  LText
]

const install = (app: App) => {
  components.forEach(comp => {
    const compName = comp.name as string
    app.component(compName, comp)
  })
}

export {
  LText,
  install
}

export default {
  install
}