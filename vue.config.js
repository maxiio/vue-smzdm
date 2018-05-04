const path = require('path');

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('layout',resolve('src/layout'))
            .set('base',resolve('src/base'))
            .set('static',resolve('src/static'))
    },
    devServer: {
        proxy: {
            // 首页数据
            '/ajax_home_list_show': {
                target: 'https://m.smzdm.com/',
                changeOrigin: true,
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            // 推荐商品
            '/ajax_hot_recommend': {
                target: 'https://m.smzdm.com/',
                changeOrigin: true,
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            // 国内数据
            '/ajax_post_list_show': {
                target: 'https://m.smzdm.com/',
                changeOrigin: true,
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            // 海淘数据
            '/ajax_haitao_list_show': {
                target: 'https://haitao.m.smzdm.com/',
                changeOrigin: true,
                headers: {
                    referer: 'https://haitao.m.smzdm.com/'
                }
            },
            // 图片地址
            '/tpQnam': {
                target: 'https://tp-qnam.smzdm.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/tpQnam' : ''
                },
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            '/y': {
                target: 'https://y.zdmimg.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/y' : ''
                },
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            '/tpQna': {
                target: 'https://tp-qna.smzdm.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/tpQna' : ''
                },
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            '/qnY': {
                target: 'https://qny.smzdm.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/qnY' : ''
                },
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            '/tpY': {
                target: 'https://tp-y.zdmimg.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/tpY' : ''
                },
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            '/tpQny': {
                target: 'https://tp-qny.smzdm.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/tpQny' : ''
                },
                headers: {
                    referer: 'https://m.smzdm.com/'
                }
            },
            
        }
    }
}