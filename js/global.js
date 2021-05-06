let apihost = 'http://mapi.yingxi.tv'
// let apihost = 'http://m2o-plus.yingxi.tv/'
// let apihost = 'http://mapi.plus-dev.hoge.cn'
let imghost='http://image.yingxi.tv'
// 获取access_token
function smGetUserInfo() {
    return new Promise(function (res1, rej) {
        SmartCity.getUserInfo(function (res) {
            if (res && res.userInfo) {
                let access_token = res.userInfo.userTokenKey;
                res1(access_token)
                localStorage.setItem('access_token', access_token)

            } else {
                SmartCity.goLogin()
            }
        })
    }
    )
}
//文本框过滤格式化处理
function contentFilter(content) {
    content = content.replace(/\r\n/g, "<br>").replace(/ /g, "&nbsp");
        return content
 }
