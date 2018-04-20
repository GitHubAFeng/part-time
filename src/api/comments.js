import base from './base';

/**
 *  任务服务类
 */
export default class comments extends base {



  /**
   * 新增
   */
  static add(data) {
    const url = `${this.baseUrl}/comments/add`;
    return this.post(url, data);
  }
  /**
   * 更新
   */
  static update(data) {
    const url = `${this.baseUrl}/comments/update`;
    return this.put(url, data);
  }
  /**
   * 获取列表
   */
  static infoList(data = {}) {
    const url = `${this.baseUrl}/comments/getlist`;
    return this.get(url, data);
  }


  /**
 * 获取任务明细
 */
  static get_detail(id) {
    const url = `${this.baseUrl}/comments/getdetail?id=${id}`;
    return this.get(url);
  }

  /**
   * 删除
   */
  static remove(id) {
    const url = `${this.baseUrl}/comments/del/${id}`;
    return this.delete(url);
  }


}
