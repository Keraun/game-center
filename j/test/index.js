+ function() {
  //setTimeout(function() {
  $.ajax = function(options) {
      var dfd = $.Deferred(),
        url = options.url,
        data = {},
        code, params = options.data,
        message = '';

      if (url.indexOf('/barrage/list') > -1) { //弹幕列表
        code = 1011; //成功
        message = "成功!";
        data = {
          ticket: 1,
          data: {
            total: 1,
            list: [{
              id: 1,
              name: 'lala',
              content: '5'
            }, {
              id: 3,
              name: 'yang',
              content: '8'
            }, {
              id: 3,
              name: '123',
              content: '7'
            }]
          }
        }
      } else if (url.indexOf('/notice/getnum') > -1) { //通知、朋友圈未读回复新增数
        code = 0; //成功
        message = "成功!";
        data = {
          ticket: 1,
          data: {
            noticeNum: 7, //小喇叭
            unreadNum: 0 //未读回复数量
          }
        }
      } else
      if (url.indexOf('/notice/list') > -1) { //活动通知列表
        code = 0; //成功
        message = "成功!";
        data = {
          ticket: 1,
          data: [{
            "id": "1",
            "content": '中'
          }, {
            "id": "2",
            "content": 'lal12312a中奖啦！'
          }, {
            "id": "3",
            "content": 'lal去21a中1111111111111111111111111111111奖啦！'
          }, {
            "id": "4",
            "content": 'lala中奖啦！'
          }, {
            "id": "5",
            "content": 'lala中奖啦！'
          }, {
            "id": "6",
            "content": 'lala中奖啦！'
          }, {
            "id": "7",
            "content": 'lala中111111111111111111111奖啦！'
          }, {
            "id": "8",
            "content": 'lala中1111111111奖啦！'
          }]
        }
      } else if (url.indexOf('/circle/list') > -1) {
        code = 0; //成功
        message = "成功!";
        data = {
          ticket: 1,
          data: {
            "total": 2,
            "list": [{
              id: 1, //消息id
              actid: 666, //活动id
              head: '../images/avatar.jpg', //用户头像
              realname: 'wulingyang', //用户名字
              content: '发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容', //消息内容
              image: 'http://d.hiphotos.baidu.com/image/pic/item/622762d0f703918f0bbb74d5563d269759eec443.jpg', //消息图片
              thumb: '../images/news-list-item.jpg',
              comments: 0, // 评论数
              favours: 0, //点赞数
              url: 'http://www.baidu.com',
              time: '11分钟前', //时间
              favourStatus: false, //点赞状态
              commentList: []
            }, {
              id: 2, //消息id
              actid: 666, //活动id
              head: '../images/avatar.jpg', //用户头像
              realname: 'wulingyang', //用户名字
              url: 'http://www.baidu.com',
              content: '发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容发表内容', //消息内容
              image: 'http://cdn.duitang.com/uploads/item/201411/02/20141102090426_UiQtZ.jpeg', //消息图片
              thumb: 'http://cdn.duitang.com/uploads/item/201411/02/20141102090426_UiQtZ.jpeg',
              comments: 888, // 评论数
              favours: 777, //点赞数
              time: '11分钟前', //时间
              favourStatus: true, //点赞状态
              commentList: [{
                realname: 'lala', //评论者的名字
                replied: 'yang', //被回复的人
                content: 'helloworld', //评论内容
              }]
            }]
          }
        };
      } else if (url.indexOf('/circle/comment') > -1) { //边锋圈子评论点赞
        code = 0;
        data = {
          ticket: 1,
          data: {
            comments: 888, // 评论数
            favours: 777, //点赞数
            favourStatus: false, //点赞状态
            commentList: [{
              id: 123, //消息id
              cid: 444,
              realname: 'lala', //评论者的名字
              replied: 'yang', //被回复的人
              content: 'helloworld', //评论内容
              comment_type: 2, //评论类型1.点赞2.评论
              time: '11分钟前', //时间
              pid: 444, //被回复的评论ID
              replied: 'yang', //被回复的评论者
            }, {
              id: 144, //消息id
              cid: 444,
              realname: 'lal2a', //评论者的名字
              replied: 'yang', //被回复的人
              content: 'helloworld', //评论内容
              comment_type: 2, //评论类型1.点赞2.评论
              time: '11分钟前', //时间
              pid: 444, //被回复的评论ID
            }]
          }
        }
        message = '';
      } else if (url.indexOf('/notice/decrnum') > -1) {
        var code = 0;
        var data = {
          ticket: 1,
          data: []
        };
        var message = "成功";
      } else if (url.indexOf('/circle/list') > -1) { //边锋圈子列表
        var code = 0;
        var data = {
          ticket: 1,
          data: [{
            id: 2,
            url: './news-details-js.html',
            content: "2015年度十大最牛2015年度十大最牛2015年度十大最牛",
            image: '../images/news-list-item.jpg',
            comments: 999,
            favours: 888
          }, {
            id: 2,
            url: './news-details-js.html',
            image: '../images/news-list-item.jpg',
            content: "2015年度十大最牛2015年度十大最牛2015年度十大最牛",
            comments: 999,
            favours: 888
          }, {
            id: 2,
            url: './news-details-js.html',
            content: "2015年度十大最牛2015年度十大最牛2015年度十大最牛",
            image: '../images/news-list-item.jpg',
            comments: 999,
            favours: 888
          }]
        }
        var message = "成功";
      } else if (url.indexOf('/news/comment') > -1) { //新闻点赞评论
        var code = 0;
        var data = {
          ticket: 1,
          data: {
            commentList: [{
              comment_type: 1
            }]
          }
        };
        var message = "成功";
      } else if (url.indexOf('/news/list') > -1) { //新闻点赞评论
        var code = 0;
        var data = {
          ticket: 1,
          data: [{
            'id': 6,
            'image': '../images/news-list-item.jpg',
            'name': '123',
            'content': '2015年度十大最牛2015年度十大最牛2015年度十大最牛',
            'comments': 555,
            'favours': 6666,
            'watch_time': '10分钟前',
            'url': './news-details-js.html'
          }, {
            'id': 5,
            'image': '../images/news-list-item.jpg',
            'name': '123',
            'content': '2015年度十大最牛2015年度十大最牛2015年度十大最牛',
            'comments': 555,
            'favours': 6666,
            'watch_time': '10分钟前',
            'url': './news-details-js.html'
          }, {
            'id': 4,
            'image': '../images/news-list-item.jpg',
            'name': '123',
            'content': '2015年度十大最牛2015年度十大最牛2015年度十大最牛',
            'comments': 555,
            'favours': 6666,
            'watch_time': '10分钟前',
            'url': './news-details-js.html'
          }, {
            'id': 3,
            'image': '../images/news-list-item.jpg',
            'name': '123',
            'content': '2015年度十大最牛2015年度十大最牛2015年度十大最牛',
            'comments': 555,
            'favours': 6666,
            'watch_time': '10分钟前',
            'url': './news-details-js.html'
          }, {
            'id': 2,
            'image': '../images/news-list-item.jpg',
            'name': '123',
            'content': '2015年度十大最牛2015年度十大最牛2015年度十大最牛',
            'comments': 555,
            'favours': 6666,
            'watch_time': '10分钟前',
            'url': './news-details-js.html'
          }]
        };
        var message = "成功";
      } else if (url.indexOf('/circle/choiceness/list') > -1) { //精选列表
        var code = 0;
        var data = {
          ticket: 1,
          data: [{
            id: 2,
            url: './news-details-js.html',
            content: "2015年度十大最牛2015年度十大最牛2015年度十大最牛",
            image: '../images/news-list-item.jpg',
            realname: 'lala2',
            comments: 999,
            favours: 888
          }, {
            id: 2,
            url: './news-details-js.html',
            image: '../images/news-list-item.jpg',
            content: "2015年度十大最牛2015年度十大最牛2015年度十大最牛",
            comments: 999,
            realname: 'lala',
            favours: 888
          }, {
            id: 2,
            url: './news-details-js.html',
            content: "2015年度十大最牛2015年度十大最牛2015年度十大最牛",
            image: '../images/news-list-item.jpg',
            realname: 'lala',
            comments: 999,
            favours: 888
          }]
        }
        var message = "成功";
      }


      setTimeout(function() {
        dfd.resolve({
          code: code,
          data: data,
          message: message
        });
        console.log('$.ajax', url, options, {
          code: code,
          data: data,
          message: message
        });
      }, 500)
      return dfd;
    }
    // })
}()