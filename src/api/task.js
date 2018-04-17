import base from './base';

/**
 *  任务服务类
 */
export default class task extends base {



  /**
   * 新增
   */
  static add(data) {
    const url = `${this.baseUrl}/task/add`;
    return this.post(url, data);
  }
  /**
   * 更新
   */
  static update(data) {
    const url = `${this.baseUrl}/task/update`;
    return this.put(url, data);
  }
  /**
   * 获取列表
   */
  static infoList(data = {}) {
    const url = `${this.baseUrl}/task/getlist`;
    return this.get(url, data);
  }

  /**
   * 获取任务
   */
  static Info(data = {}) {
    const url = `${this.baseUrl}/task/get`;
    return this.get(url, data);
  }

  /**
 * 获取任务明细
 */
  static get_detail(id) {
    const url = `${this.baseUrl}/task/getdetail?id=${id}`;
    return this.get(url);
  }

  /**
   * 删除
   */
  static remove(id) {
    const url = `${this.baseUrl}/task/del/${id}`;
    return this.delete(url);
  }


}
