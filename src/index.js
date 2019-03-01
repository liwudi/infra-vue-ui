/**
 * Created by mapbar_front on 2019-01-06.
 */
import Test from '../packages/test/index'
import SinglePicker from '../packages/single-picker/index'
import Button from '../packages/Button/index'
import Input from '../packages/Input/index'
import Select from '../packages/Select/index'
import AlertMessage from '../packages/Alert/index'

const components = [
  Test,
  SinglePicker,
  Button,
  Input,
  Select
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    console.log(component.name);
    Vue.component(component.name, component)
  })
}

const infraVueUI = {
  version: '1.0.0',
  install,
  Test,
  SinglePicker,
  Button,
  Input,
  Select,
  AlertMessage
}

export default infraVueUI
