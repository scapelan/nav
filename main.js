//1. 初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']

//2. 生成键盘
generateKeyboard(keys, hash)

//3. 监听用户动作
listenToUser(hash)


//4. 工具函数
function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName, attributes) {
    var element = document.createElement(tagName)
    for (key in attributes) {
        element[key] = attributes[key]
    }
    return element
}

function createButton(id) {
    var button = tag('button', {
        textContent: 'Edit',
        id: id
    })
    button.onclick = function (e) {
        var button2 = e.target
        var img2 = button2.previousSibling
        var key = e['target']['id']
        var url = prompt('给我一个网址')
        if(url){
            hash[key] = url
            localStorage.setItem('uuu', JSON.stringify(hash))
            img2.src = 'http://' + url + '/favicon.ico'
    
            img2.onerror = function (e) {
                console.log('下载失败')
                e.target.src = './dot.png'
            }
        }else if(url === ''){
            alert('请输入内容')
        }else{
            
        }
    }
    return button
}

function createImg(domain) {
    var iconImg = tag('img')
    if (domain) {
        iconImg.src = 'http://' + domain + '/favicon.ico'
    } else {
        iconImg.src = './dot.png'
    }
    iconImg.onerror = function (e) {
        console.log('下载失败')
        e.target.src = './dot.png'
    }
    return iconImg
}

function init() {
    var keys = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ]

    var hash = {
        'q': 'google.com',
        'w': 'weibo.com',
        't': 'twitter.com',
        'e': '',
        'r': 'reddit.com',
        'y': 'youtube.com',
        'u': 'vuejs.org',
        'i': 'jianshu.com',
        'o': '',
        'p': '',
        'a': 'acfun.cn',
        's': '',
        'd': 'douban.com',
        'f': '',
        'g': 'github.com',
        'h': 'haitou.cc',
        'j': 'juejin.im',
        'k': '36kr.com',
        'l': 'leetcode-cn.com',
        'z': 'zhihu.com',
        'x': 'xiedaimala.com',
        'c': 'css-tricks.com',
        'v': 'v2ex.com',
        'b': 'bilibili.com',
        'n': 'nowcoder.com',
        'm': 'developer.mozilla.org'
    }

    var hashInLocalStorage = getFromLocalStorage('uuu')
    if (hashInLocalStorage) {
        hash = hashInLocalStorage
    }
    return {
        "keys": keys,
        "hash": hash
    }

}

function generateKeyboard(keys, hash) {
    for (var index = 0; index < keys.length; index = index + 1) {
        var rowBox = tag('div')

        var main = document.getElementById('main')
        main.appendChild(rowBox)

        var row = keys[index] //键盘每一行的数组
        for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {
            var button = createButton(row[index2])

            var iconImg = createImg(hash[row[index2]])

            var kbd = tag('kbd', {
                textContent: row[index2],
                className: 'key'
            })

            kbd.appendChild(iconImg)
            kbd.appendChild(button)

            rowBox.appendChild(kbd)
        }
    }

}

function listenToUser(hash) {
    document.onkeypress = function (e) {
        key = e['key']
        website = hash[key]
        window.open('http://' + website, '_blank')
    }
}