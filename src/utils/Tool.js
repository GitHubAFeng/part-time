export default class Tool {

    // 去掉字符串中的空格
    static trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }

    // 判断字符串是否为空
    static isEmpty(str) {
        return str == '' || str == null || str == 'null';
    }
    // 判断字符串是否不为空
    static isNotEmpty(str) {
        return !this.isEmpty(str);
    }
    // 浮点求和
    static sum(numbers, toFixed = 2) {
        let sum = 0;
        for (const str of numbers) {
            if (!this.isNumber(str)) {
                return NaN;
            }
            const num = parseFloat(str);
            if (isNaN(num)) {
                return NaN;
            }
            sum += num;
        }
        return sum.toFixed(toFixed);
    }
    // 数字判断
    static isNumber(value) {
        const patrn = /^[-+]?\d+(\.\d+)?$/;
        return patrn.test(value);
    }

    // 数字判断
    static isPositiveNumber(value) {
        const patrn = /^[1-9]\d*$|^\.\d*$|^0\.\d*$|^[1-9]\d*\.\d*$|^0$/;
        return patrn.test(value);
    }
    // 数组判断
    static isArray(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    }

    // 数组或者对象是否为空
    static isObjNull(value) {
        return Object.keys(value).length === 0;
    }


}
