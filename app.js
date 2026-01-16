App({
  onLaunch() {
    // 小程序启动时执行
    console.log('简一整装大家居小程序启动');
  },
  globalData: {
    userInfo: null,
    // ====== 📌 配置项1：后端服务器地址 ======
    // 替换为你的后端服务器域名（必须是 https，且需要在微信小程序后台配置为合法域名）
    baseUrl: 'https://your-backend-domain.com',  // ⚠️ 请替换为你的实际后端地址
    
    // ====== 📌 配置项2：支付API接口路径 ======
    // 完整的支付接口地址 = baseUrl + paymentApiPath
    paymentApiPath: '/api/payment/create'  // ⚠️ 根据你的后端接口路径修改
  }
})
