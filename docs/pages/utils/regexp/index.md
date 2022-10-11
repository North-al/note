# 常用正则表达式

## 手机号
```js
const verifyPhone = /^1[3|4|5|6|7|8|9][0-9]{9}$/
```

## 邮箱
```js
const verifyEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
```

## 身份证
```js
const verifyIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
```

## 银行卡
```js
const verifyBankCard = /^([1-9]{1})(\d{14}|\d{18})$/
```

## 中文
```js
const verifyChinese = /^[\u4e00-\u9fa5]{0,}$/
```

## 数字
```js
const verifyNumber = /^[0-9]*$/
```

## 5-10位的用户名，只能包含字母、数字、下划线
```js
const verifyUsername = /^[a-zA-Z0-9_]{5,10}$/
```

## 强密码，必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-20之间
```js
const verifyPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/
```

## URL
```js
const verifyUrl = /^http[s]?:\/\/.*/ 
```

## 16进制颜色
```js
const verifyColor = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
```

## 日期格式
```js
// yyyy-MM-dd
const verifyDate = /^\d{4}-\d{1,2}-\d{1,2}$/
```

## 日期时间格式
```js
// yyyy-MM-dd HH:mm:ss
const verifyDateTime = /^\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}$/
```

## 中文格式
```js
// 中文、英文、数字、下划线
const verifyName = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/ 

// 中文、英文、数字、下划线、横杠
const verifyName = /^[\u4e00-\u9fa5_a-zA-Z0-9-]+$/ 

// 中文、英文、数字、下划线、横杠、空格
const verifyName = /^[\u4e00-\u9fa5_a-zA-Z0-9- ]+$/ 

// 中文、英文、数字、下划线、横杠、空格、点
const verifyName = /^[\u4e00-\u9fa5_a-zA-Z0-9- .]+$/ 

// 中文、英文、数字、下划线、横杠、空格、点、括号
const verifyName = /^[\u4e00-\u9fa5_a-zA-Z0-9- .()]+$/ 

// 中文、英文、数字、下划线、横杠、空格、点、括号、斜杠
const verifyName = /^[\u4e00-\u9fa5_a-zA-Z0-9- .()/]+$/ 
```

## 金额格式
```js
// 金额，小数点后保留两位
const verifyMoney = /^\d+(\.\d{1,2})?$/
```

## IP地址
```js
const verifyIp = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/
```

## MAC地址
```js
const verifyMac = /^([A-Fa-f0-9]{2}:){5}[A-Fa-f0-9]{2}$/
```

## 车牌号
```js
const verifyCarNo = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/
```

## QQ号
```js
const verifyQQ = /^[1-9][0-9]{4,9}$/
```

## 微信号
```js
const verifyWeChat = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
```

## 匹配特定数字
```js
//匹配正整数
const verifyPositiveInteger = /^[1-9]\d*$/

//匹配负整数
const verifyNegativeInteger = /^-[1-9]\d*$/

//匹配整数
const verifyInteger = /^-?[1-9]\d*$/

//匹配非负整数（正整数 + 0）
const verifyNonNegativeInteger = /^[1-9]\d*|0$/

//匹配非正整数（负整数 + 0）
const verifyNonPositiveInteger = /^-[1-9]\d*|0$/

//匹配正浮点数
const verifyPositiveFloat = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/

//匹配负浮点数
const verifyNegativeFloat = /^-[1-9]\d*\.\d*|-0\.\d*[1-9]\d*$/

//匹配浮点数
const verifyFloat = /^(-?\d+)(\.\d+)?$/

//匹配非负浮点数（正浮点数 + 0）
const verifyNonNegativeFloat = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/

//匹配非正浮点数（负浮点数 + 0）
const verifyNonPositiveFloat = /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/
```

