
/**
 * 获取精度 
 * @param {*值} value 
 * 111.05 => 2
 */
function getPrecision(value) {
    const valueString = value.toString()
    //取e-后字符转换成int,e-10=>10
    if (valueString.indexOf('e-') >= 0) {
        return parseInt(valueString.slice(valueString.indexOf('e-') + 1), 10)
    }

    let precision = 0;
    //取小数点后字符长度0.0001=>4
    if (valueString.indexOf('.') >= 0) {
        precision = valueString.length - valueString.indexOf('.') - 1
    }
    //否则0
    return precision
}

/**
 * 数字格式化
 * @param {*值} number 
 * @param {*小数位数} decimals 
 * @param {*千分符} thousandsSep 
 * @param {*小数点字符} decPoint 
 */
function format(number, decimals = 2, thousandsSep, decPoint) {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '')

    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = thousandsSep,
        dec = typeof decPoint !== 'string' ? '.' : decPoint,
        s = ''

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')

    if (sep) {
        var re = /(-?\d+)(\d{3})/
        while (re.test(s[0])) {
            s[0] = s[0].replace(re, "$1" + sep + "$2")
        }
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || ''
        s[1] += new Array(prec - s[1].length + 1).join('0')
    }
    return s.join(dec)

}


/**
 * 浮点精度
 */
function toFixedFix(number, prec) {
    number = (number + '').replace(/[^0-9+-Ee.]/g, '')
    var k = Math.pow(10, prec)
    return '' + Math.round(number * k) / k
}


/**
 * 四舍5入
 */
function round(number, prec) {
    number = number == undefined ? 0 : number
    number = (number + '').replace(/[^0-9+-Ee.]/g, '')
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+prec) ? 0 : Math.abs(prec)

    var k = Math.pow(10, prec)
    return Math.round(number * k) / k
}

/**
 * 小写转大写金额
 * @param {*小写金额} n 
 */
function moneySmalltoBig(n) {
    if (!_.isNumber(n) || _.isNaN(n))
        return ''

    var fraction = ['角', '分'];
    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);

    var s = '';

    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);

    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}


export default {
    toFixedFix,
    format,
    moneySmalltoBig,
    round


}
