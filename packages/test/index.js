/**
 * Created by mapbar_front on 2019-01-06.
 */
import InfraTest from './src/test'

InfraTest.install = function (Vue) {
  Vue.component(InfraTest.name, InfraTest)
}

export default InfraTest
