function init(){
    var keys = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ]
    var hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': '',
        'r': '',
        't': 'twitter.com'
    }
    if(hashlocalStorage){
        hash = hashlocalStorage
    }
}