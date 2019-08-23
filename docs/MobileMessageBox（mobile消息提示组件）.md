### 1、基本使用（$mobileConfirm）
```
this.$mobileConfirm(`确定删除${name}吗？`, {
  onConfirm: () => {
    this.deleteId = id;
    this.getDeleteResult(true);
  },
  leftBtnText: '取消',
  rightBtnText: '确认'
});
```
展示样式：

系统架构组 > MobileMessageBox（mobile消息提示组件） > image2019-7-6 15:11:18.png

### 2、基本使用（$mobileAlert）

this.$mobileAlert('请删除当前组件！');
系统架构组 > MobileMessageBox（mobile消息提示组件） > image2019-7-6 15:14:57.png

### 3、Api说明。

手机消息提示，提供了两种可用的消息提示组件（$mobileAlert、$mobileConfirm）

$mobileAlert，主要用于给用户的提示功能。

$mobileConfirm，主要用于给用户的选择功能，点击确认，执行某种操作，点击取消，中断当前行为。

他们的参数，有两个。this.$mobileAlert(content, options)。

content表示，当前弹出窗口的内容。

options表示，当前弹出窗口的配置选项。

### 4、options的Api说明。

leftBtnText，表示左边按钮的文本。

rightBtnText，表示右边按钮的文本。

onConfirm，表示点击右边按钮的回掉函数。

onCancel，表示点击左边按钮的回掉函数。

onClose，表示点击关闭按钮的回掉函数。
