/**
 * Created by mapbar_front on 2019-01-06.
 */
import Test from '../packages/test/index'
import SinglePicker from '../packages/single-picker/index'

const components = [
  Test,
  SinglePicker
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

module.exports = {
  version: '1.0.0',
  install
}
