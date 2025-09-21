// ignore
//@name:[嗅] 桃花源
//@version:1
//@webSite:https://d.thyys.net
//@remark:
//@order: C
//@deprecated:1
// ignore

// 适用于 把鼠标放在视频封面上 可以右键 复制正确链接的网站
// 不能保证一定能用，不能用的欢迎反馈

/// 是否模拟 PC 是 1， 手机是 0
const isUsePC = 1
/// 默认应该是 0，当视频不能播放的时候，可以把这个设置为 1， 否则不要改动
const isAddReferer = 0

// 网站主页
const webSite = 'https://d.thyys.net'
// 网站搜索
// https://d.thyys.net/vodsearch/我的----------2---.html
// 把网站主页变成 @{webSite} 把搜索词变成 @{searchWord}  把页码变成 @{page}
const searchUrl = '@{webSite}/vodsearch/@{searchWord}----------@{page}---.html'
// 当前网站任意视频详情页
// https://d.thyys.net/voddetail/95534.html
const videoDetailPage = '@{webSite}/voddetail/95534.html'
// 当前网站任意视频播放页
// https://d.thyys.net/vodplay/95534-1-1.html
const videoPlayPage = '@{webSite}/vodplay/95534-1-1.html'

// 保持不变
const filterListUrl = ''

const firstClass = [
    {
        name: '有码',
        // https://d.thyys.net/vodshow/1--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: ' @{webSite}/vodshow/1--------@{page}---.html',
    },
    {
        name: '有码',
        // https://d.thyys.net/vodshow/2--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: ' @{webSite}/vodshow/2--------@{page}---.html',
    },
    {
        name: '欧美',
        // https://d.thyys.net/vodshow/3--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: ' @{webSite}/vodshow/3--------@{page}---.html',
    },
    {
        name: '无码',
        // https://d.thyys.net/vodshow/4--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: ' @{webSite}/vodshow/4--------@{page}---.html',
    },
    {
        name: '动漫',
        // https://d.thyys.net/vodshow/5--------2---.html
        // 把网站主页变成 @{webSite}  把页码变成 @{page}
        id: ' @{webSite}/vodshow/5--------@{page}---.html',
    },
]

// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要
// 下面这个不要有任何改动，且保持在最后一行，加载内置代码需要

//#BaseCode1#
