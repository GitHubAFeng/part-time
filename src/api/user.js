import base from './base';

/**
 *  任务服务类
 */
export default class user extends base {




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
        const url = `${this.baseUrl}/user/update`;
        return this.post(url, data);
    }
    /**
     * 获取
     */
    static info(data = {}) {
        const url = `${this.baseUrl}/user/get`;
        return this.get(url, data);
    }


    /**
     * 删除
     */
    static remove(id) {
        const url = `${this.baseUrl}/task/del/${id}`;
        return this.delete(url);
    }


}
