const WxNotificationCenter = require('./WxNotificationCenter.js');

export default class Event {
  // 定义事件
  static GOODS_PANEL_MINUS = 'GOODS_PANEL_MINUS';
  
  static listen(eventName, callback, observer) {
    // 先移除监听
    this.remove(eventName, observer);
    WxNotificationCenter.addNotification(eventName, callback, observer);
  }

  static emit(eventName, params) {
    WxNotificationCenter.postNotificationName(eventName, params);
  }

  static remove(eventName, observer) {
    WxNotificationCenter.removeNotification(eventName, observer);
  }
}
