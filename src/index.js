/**
 * Created by mapbar_front on 2019-01-06.
 */
import Button from '../packages/Button/index';
import Input from '../packages/Input/index';
import Select from '../packages/Select/index';
import MultipleSelectionInput from '../packages/MultipleSelectionInput/index';
import Upload from '../packages/Upload/index';
import Table from '../packages/Table/index';
import Pagination from '../packages/Pagination/index';

// 消息提示(以后可能取消)
import AlertMessage from '../packages/Alert/index';
// 消息提示-PC
import MessageBox from '../packages/MessageBox/index';
// 消息提示-手机
import MobileAlertMessage from '../packages/MobileAlert/index';
// 图片预览
import PreviewImage from '../packages/PreviewImage/index';

const components = [
  Button,
  Input,
  Select,
  MultipleSelectionInput,
  Upload,
  Table,
  Pagination
];

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$alertMessage = AlertMessage;
  Vue.prototype.$mobileAlertMessage = MobileAlertMessage;
  Vue.prototype.$previewImage = PreviewImage;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
};

const infraVueUI = {
  version: '1.0.0',
  install,
  Button,
  Input,
  Select,
  MultipleSelectionInput,
  Upload,
  Table,
  Pagination,
  PreviewImage,
  AlertMessage,
  MobileAlertMessage,
  MessageBox
};

export default infraVueUI;
