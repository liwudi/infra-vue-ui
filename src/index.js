/**
 * Created by mapbar_front on 2019-01-06.
 */
import Button from '../packages/Button/index';
import Input from '../packages/Input/index';
import Select from '../packages/Select/index';

// 消息提示
import AlertMessage from '../packages/Alert/index';
// 消息提示-手机
import MobileAlertMessage from '../packages/MobileAlert/index';

const components = [
  Button,
  Input,
  Select
];

const install = function (Vue, opts = {}) {
  components.map(component => {
    console.log(component.name);
    Vue.component(component.name, component);
  });
  Vue.prototype.$alertMessage = AlertMessage;
  Vue.prototype.$mobileAlertMessage = MobileAlertMessage;
};

const infraVueUI = {
  version: '1.0.0',
  install,
  Button,
  Input,
  Select,
  AlertMessage,
  MobileAlertMessage
};

export default infraVueUI;
