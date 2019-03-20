//index.js
//获取应用实例

Page({
  data: {
   lists:[
     {
       img:'../../images/s1.jpg',
       title:'贵阳市白云区建设垃圾焚烧发电项目背后的争议和隐忧',
       price:'50',
       sell:'200'
     },
     {
       img: '../../images/s1.jpg',
       title: '贵阳市白云区建设垃圾焚烧发电项目背后的争议和隐忧',
       price: '50',
       sell: '200'
     },
     {
       img: '../../images/s1.jpg',
       title: '贵阳市白云区建设垃圾焚烧发电项目背后的争议和隐忧',
       price: '50',
       sell: '200'
     },
     {
       img: '../../images/s1.jpg',
       title: '贵阳市白云区建设垃圾焚烧发电项目背后的争议和隐忧',
       price: '50',
       sell: '200'
     },
     {
       img: '../../images/s1.jpg',
       title: '贵阳市白云区建设垃圾焚烧发电项目背后的争议和隐忧',
       price: '50',
       sell: '200'
     },
     {
       img: '../../images/s1.jpg',
       title: '贵阳市白云区建设垃圾焚烧发电项目背后的争议和隐忧',
       price: '50',
       sell: '200'
     }
   ]
  },
  toDetail(e){
    let list = e.currentTarget.dataset.img
    console.log(list)
    wx.navigateTo({
      url: `../detail/detail?id=${list}`,
    })
  }
})
