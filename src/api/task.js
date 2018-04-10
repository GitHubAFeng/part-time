import base from './base';

/**
 *  任务服务类
 */
export default class task extends base {



  /**
   * 新增
   */
  static add (data) {
    const url = `${this.baseUrl}/task/add`;
    return this.post(url, data);
  }
  /**
   * 更新
   */
  static update (id, data) {
    const url = `${this.baseUrl}/task/update/${id}`;
    return this.put(url, data);
  }
  /**
   * 获取
   */
  static info (id) {
    const url = `${this.baseUrl}/task/get/${id}`;
    return this.get(url, id).then(data => {
      data.location = data.fullAddress.replace(data.detail, '');
      return data;
    });
  }


  /**
   * 删除
   */
  static remove (id) {
    const url = `${this.baseUrl}/task/del/${id}`;
    return this.delete(url);
  }


}
