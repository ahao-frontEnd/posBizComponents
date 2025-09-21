import { type App } from 'vue'
import LText from './LText.vue'

const compName = LText.name as string

LText.install = (app: App) => {
  app.component(compName, LText)
}

export default LText