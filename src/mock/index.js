// 定义基础对象
import Mock from 'mockjs'

// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
  timeout: '100-200' // 100ms到200ms
});

// 返回数据
Mock.mock('/api/hotWords', 'get', ["区块链","小程序","vue","毕业","PHP","故事","flutter","理财","美食","投稿",
  "手帐","书法","PPT","穿搭","打碗碗花","简书","姥姥的澎湖湾","设计","创业","交友","籽盐","教育","思维导图","疯哥哥",
  "梅西","时间管理","golang","连载","自律","职场","考研","慢世人","悦欣","一纸vr","spring","eos","足球","程序员",
  "林露含","彩铅","金融","木风杂谈","日更","成长","外婆是方言","docker"]);

// 返回更多数据，正则匹配所有 /api/moreArticleList 开头的get请求
Mock.mock(/^\/api\/moreArticleList[\s\S]*?/, 'get', [
  {
    id: 5,
    title: '[more] 刘强东年终会聚餐，现场竟出现她，网友：遭了，是心动的感jio',
    desc: '哈喽大家好。刘强东，是出生于农村家庭的一个孩子，从小由于家境贫寒，父母外出打工补贴家里，然而刘强东在家里负责照顾年幼的妹妹和自己，所以刘强东从小...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/15764094-f009beb41a8de5f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id: 6,
    title: '[more] 刘强东年终会聚餐，现场竟出现她，网友：遭了，是心动的感jio',
    desc: '哈喽大家好。刘强东，是出生于农村家庭的一个孩子，从小由于家境贫寒，父母外出打工补贴家里，然而刘强东在家里负责照顾年幼的妹妹和自己，所以刘强东从小...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/15764094-f009beb41a8de5f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id: 7,
    title: '[more] 刘强东年终会聚餐，现场竟出现她，网友：遭了，是心动的感jio',
    desc: '哈喽大家好。刘强东，是出生于农村家庭的一个孩子，从小由于家境贫寒，父母外出打工补贴家里，然而刘强东在家里负责照顾年幼的妹妹和自己，所以刘强东从小...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/15764094-f009beb41a8de5f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }
]);

// 返回数据
Mock.mock('/api/home', 'get', {
  // 首页轮播图列表，antd的轮播图，只支持jpg格式的图片
  banners: [
    {
      id: 1,
      title: '标题1',
      imgUrl: '/title1.jpg'
    },
    {
      id: 2,
      title: '标题2',
      imgUrl: '/title2.jpg'
    },
    {
      id: 3,
      title: '标题3',
      imgUrl: '/title3.jpg'
    },
    {
      id: 4,
      title: '标题4',
      imgUrl: '/title4.jpg'
    }
  ],
  articleList: [
    {
      id: 1,
      title: '刘强东年终会聚餐，现场竟出现她，网友：遭了，是心动的感jio',
      desc: '哈喽大家好。刘强东，是出生于农村家庭的一个孩子，从小由于家境贫寒，父母外出打工补贴家里，然而刘强东在家里负责照顾年幼的妹妹和自己，所以刘强东从小...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/15764094-f009beb41a8de5f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '刘强东年终会聚餐，现场竟出现她，网友：遭了，是心动的感jio',
      desc: '哈喽大家好。刘强东，是出生于农村家庭的一个孩子，从小由于家境贫寒，父母外出打工补贴家里，然而刘强东在家里负责照顾年幼的妹妹和自己，所以刘强东从小...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/15764094-f009beb41a8de5f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 3,
      title: '刘强东年终会聚餐，现场竟出现她，网友：遭了，是心动的感jio',
      desc: '哈喽大家好。刘强东，是出生于农村家庭的一个孩子，从小由于家境贫寒，父母外出打工补贴家里，然而刘强东在家里负责照顾年幼的妹妹和自己，所以刘强东从小...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/15764094-f009beb41a8de5f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 4,
      title: '刘强东年终会聚餐，现场竟出现她，网友：遭了，是心动的感jio',
      desc: '哈喽大家好。刘强东，是出生于农村家庭的一个孩子，从小由于家境贫寒，父母外出打工补贴家里，然而刘强东在家里负责照顾年幼的妹妹和自己，所以刘强东从小...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/15764094-f009beb41a8de5f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: '/banner1.png'
    },
    {
      id: 2,
      imgUrl: '/banner2.png'
    },
    {
      id: 3,
      imgUrl: '/banner3.png'
    },
    {
      id: 4,
      imgUrl: '/banner4.png'
    },
    {
      id: 5,
      imgUrl: '/banner5.png'
    }
  ]
});
