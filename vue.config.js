module.exports = {
    devServer: {
        // 反向代理
        proxy: {
            '/api': {
                // 目标
                target: 'http://39.97.33.178',
                // 是否改变地址
                changOrigin: true
            }
        }
    }
}