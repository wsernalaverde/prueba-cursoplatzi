var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var utils = require('../utils');
var axios = require('axios');

page('/', utils.loadAuth, header, loadestadisticas, function(ctx, next){
  title('Evermetrics');
  var main = document.getElementById('main-container');
/*
  var dates = [
    {
    activeusers:  '126' ,
    allfans:  '1741' ,
    createdAt: 'Fri Jan 20 2017 20:52:51 GMT+00:00' ,
    datespost: 'Fecha | 10 de diciembre Me gusta | 4 Comentarios | NaN Compartido | 0 Alcance | 974 Otros clics | 1' ,
    externalreference:  '0' ,
    id:  'b6eff089-2157-4764-8397-89ca5778de4d' ,
    likebyday:  '0' ,
    month:  'diciembre' ,
    newfans:  '5' ,
    nolikes:  '8' ,
    postbymonth:  '0' ,
    postsrc:  '0' ,
    prints:  '53444' ,
    publicId:  '5zcfSSrx61PdE2G5c53OmV' ,
    red:  'fb' ,
    scopebyday:  '0' ,
    topreference:  '0' ,
    topwindows:  'Timeline: 2 Fotos: 1 Info: 1 Profile: 3 Me gusta: 1' ,
    type:  'month' ,
    user: {
    avatar:  '//www.gravatar.com/avatar/306ca5c630cf0832b6c84449f6bd6b23' ,
    name:  'Eversocial' ,
    username:  'eversocial'
    } ,
    userId:  'eversocial' ,
    viewswindows:  '57' ,
    year:  '2016'
    },
    {
      red: 'fb',
      type: 'year',
      genre: {
          women:'56.44',
          men:'43.56'
      },
      age: {
          ppal:'32.71',
          others:'67.29'
      },
      language: {
          ppal:'86.43',
          others:'13.57'
      },
      country: {
          ppal:'91.45',
          sec:'4.3',
          others:'4.25'
      },
      city: {
          ppal:'50.48',
          sec:'17.67',
          others:'31.85'
      },
      activeusers: {
          total:'2018',
          months: {
            septiembre:'3143',
            octubre:'1751',
            noviembre:'273',
            diciembre: '2486'
          }
      },
      allfans: {
          total:'2018',
          months: {
            septiembre:'1443',
            octubre:'1469',
            noviembre:'1510',
            diciembre: '1535'
          }
      },
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f678' ,
      newfans: {
          total:'2018',
          months: {
            septiembre:'114',
            octubre:'35',
            noviembre:'50',
            diciembre: '40'
          }
      },
      nolikes: {
          total:'2018',
          months: {
            septiembre:'10',
            octubre:'7',
            noviembre:'12',
            diciembre: '12'
          }
      },
      prints: {
          total:'2018',
          months: {
            septiembre:'172405',
            octubre:'190121',
            noviembre:'161367',
            diciembre: '113413'
          }
      },
      publicId:  '2bmtq4GOkd7DwUyA2jxrFE' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'Andrés Serna' ,
      username:  'aserna'
      } ,
        userId:  'aserna' ,
        year:  '2018'
    },
    {
      red: 'fb',
      type: 'month',
      activeusers:  '23' ,
      allfans:  '213' ,
      createdAt: 'Tue Jan 17 2017 22:27:30 GMT+00:0' ,
      id:  'e461f98f-7174-4e30-b14b-483a411d2969' ,
      month:  'enero' ,
      newfans:  '213' ,
      nolikes:  '123' ,
      prints:  '213' ,
      publicId:  '6WX1yNDMOgpZ8VjWdMveMF' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/0ebebeaba5f3f923196c74099acf1a90' ,
      name:  'andres serna' ,
      username:  'aserna'
      } ,
      userId:  'aserna' ,
      year:  '2018'
    },
    {
      red: 'fb',
      type: 'month',
      activeusers:  '12' ,
      allfans:  '20171' ,
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00¡' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      month:  'septiembre' ,
      newfans:  '1' ,
      nolikes:  '2' ,
      likebyday: '0',
      postbymonth: '0',
      scopebyday: '0',
      externalreference: '0',
      viewswindows: '0',
      topwindows: '0',
      topreference: '0',
      postsrc: '0',
      datespost: '0',
      prints:  '0' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'Andrés Serna' ,
      username:  'aserna'
      } ,
      userId:  'aserna' ,
      year:  '2017'
    },
    {
      red: 'inst',
      type: 'month',
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00¡' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      allfans:  '1731' ,
      follows:  '017' ,
      allpost:  '2017' ,
      postbymonth: '232',
      likebymonth: '123',
      comments: '23',
      usersppal: {
        userone:{
          nick: '@prueba',
          likes: '10'
        },
        usertwo:{
          nick: '@prueba2',
          likes: '11'
        },
        userthree:{
          nick: '@prueba3',
          likes: '12'
        }
      },
      topposts: {
        src: '2',
        likesone: '5',
        likestwo: '4',
        likesthree:'3'
      },
      month:  'septiembre' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'Andrés Serna' ,
      username:  'aserna'
      } ,
      userId:  'aserna' ,
      year:  '2017'
    },
    {
      red: 'fb',
      type: 'month',
      activeusers:  '12' ,
      allfans:  '2017' ,
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00¡' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      month:  'septiembre' ,
      newfans:  '1' ,
      nolikes:  '2' ,
      likebyday: '0',
      postbymonth: '0',
      scopebyday: '0',
      externalreference: '0',
      viewswindows: '0',
      topwindows: '0',
      topreference: '0',
      postsrc: '0',
      datespost: '0',
      prints:  '0' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
      userId:  'wserna' ,
      year:  '2017'
    },
    {
      red: 'fb',
      type: 'month',
      activeusers:  '14' ,
      allfans:  '2017' ,
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      month:  'octubre' ,
      newfans:  '2' ,
      nolikes:  '3' ,
      prints:  '1' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
        userId:  'wserna' ,
        year:  '2017'
    },
    {
      red: 'fb',
      type: 'month',
      activeusers:  '15s' ,
      allfans:  '2017' ,
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      month:  'Noviembre' ,
      newfans:  '3' ,
      nolikes:  '3' ,
      prints:  '1' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
        userId:  'wserna' ,
        year:  '2017'
    },
    {
      red: 'fb',
      type: 'month',
      activeusers:  '15s' ,
      allfans:  '2016' ,
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      month:  'Noviembre' ,
      newfans:  '2' ,
      nolikes:  '3' ,
      prints:  '1' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
        userId:  'wserna' ,
        year:  '2016'
    },
    {
      red: 'fb',
      type: 'month',
      activeusers:  '15s' ,
      allfans:  '2015' ,
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      month:  'Noviembre' ,
      newfans:  '2' ,
      nolikes:  '3' ,
      prints:  '1' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
        userId:  'wserna' ,
        year:  '2015'
    },
    {
      red: 'fb',
      type: 'month',
      activeusers:  '15s' ,
      allfans:  '2015' ,
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      month:  'Febrero' ,
      newfans:  '1' ,
      nolikes:  '3' ,
      prints:  '1' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
      userId:  'wserna' ,
      year:  '2015'
    },
    {
      red: 'fb',
      type: 'month',
      activeusers:  '2105' ,
      allfans:  '2016' ,
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      month:  'Enero' ,
      newfans:  '1' ,
      nolikes:  '3' ,
      prints:  '1' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
        userId:  'wserna' ,
        year:  '2016'
    },
    {
      red: 'fb',
      type: 'year',
      genre: {
          women:'56.44',
          men:'43.56'
      },
      age: {
          ppal:'32.71',
          others:'67.29'
      },
      language: {
          ppal:'86.43',
          others:'13.57'
      },
      country: {
          ppal:'91.45',
          sec:'4.3',
          others:'4.25'
      },
      city: {
          ppal:'50.48',
          sec:'17.67',
          others:'31.85'
      },
      activeusers: {
          total:'1913',
          months: {
            septiembre:'3145',
            octubre:'1751',
            noviembre:'273',
            diciembre: '2486'
          }
      },
      allfans: {
          total:'1535',
          months: {
            septiembre:'1443',
            octubre:'1469',
            noviembre:'1510',
            diciembre: '1535'
          }
      },
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      newfans: {
          total:'60',
          months: {
            septiembre:'114',
            octubre:'35',
            noviembre:'50',
            diciembre: '40'
          }
      },
      nolikes: {
          total:'10',
          months: {
            septiembre:'10',
            octubre:'7',
            noviembre:'12',
            diciembre: '12'
          }
      },
      prints: {
          total:'159327',
          months: {
            septiembre:'172405',
            octubre:'190121',
            noviembre:'161367',
            diciembre: '113413'
          }
      },
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
        userId:  'wserna' ,
        year:  '2017'
    },
    {
      red: 'fb',
      type: 'year',
      genre: {
          women:'56.44',
          men:'43.56'
      },
      age: {
          ppal:'32.71',
          others:'67.29'
      },
      language: {
          ppal:'86.43',
          others:'13.57'
      },
      country: {
          ppal:'91.45',
          sec:'4.3',
          others:'4.25'
      },
      city: {
          ppal:'50.48',
          sec:'17.67',
          others:'31.85'
      },
      activeusers: {
          total:'2016',
          months: {
            septiembre:'3144',
            octubre:'1751',
            noviembre:'273',
            diciembre: '2486'
          }
      },
      allfans: {
          total:'2016',
          months: {
            septiembre:'1443',
            octubre:'1469',
            noviembre:'1510',
            diciembre: '1535'
          }
      },
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      newfans: {
          total:'2016',
          months: {
            septiembre:'114',
            octubre:'35',
            noviembre:'50',
            diciembre: '40'
          }
      },
      nolikes: {
          total:'2016',
          months: {
            septiembre:'10',
            octubre:'7',
            noviembre:'12',
            diciembre: '12'
          }
      },
      prints: {
          total:'2016',
          months: {
            septiembre:'172405',
            octubre:'190121',
            noviembre:'161367',
            diciembre: '113413'
          }
      },
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
        userId:  'wserna' ,
        year:  '2016'
    },
    {
      red: 'fb',
      type: 'year',
      genre: {
          women:'56.44',
          men:'43.56'
      },
      age: {
          ppal:'32.71',
          others:'67.29'
      },
      language: {
          ppal:'86.43',
          others:'13.57'
      },
      country: {
          ppal:'91.45',
          sec:'4.3',
          others:'4.25'
      },
      city: {
          ppal:'50.48',
          sec:'17.67',
          others:'31.85'
      },
      activeusers: {
          total:'2015',
          months: {
            septiembre:'3143',
            octubre:'1751',
            noviembre:'273',
            diciembre: '2486'
          }
      },
      allfans: {
          total:'2015',
          months: {
            septiembre:'1443',
            octubre:'1469',
            noviembre:'1510',
            diciembre: '1535'
          }
      },
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      newfans: {
          total:'2015',
          months: {
            septiembre:'114',
            octubre:'35',
            noviembre:'50',
            diciembre: '40'
          }
      },
      nolikes: {
          total:'2015',
          months: {
            septiembre:'10',
            octubre:'7',
            noviembre:'12',
            diciembre: '12'
          }
      },
      prints: {
          total:'2015',
          months: {
            septiembre:'172405',
            octubre:'190121',
            noviembre:'161367',
            diciembre: '113413'
          }
      },
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
        userId:  'wserna' ,
        year:  '2015'
    },
    {
      red: 'inst',
      type: 'month',
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00¡' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      allfans:  '172' ,
      follows:  '016' ,
      allpost:  '2016' ,
      postbymonth: '232',
      likebymonth: '123',
      comments: '23',
      usersppal: {
        userone:{
          nick: '@prueba',
          likes: '10'
        },
        usertwo:{
          nick: '@prueba2',
          likes: '11'
        },
        userthree:{
          nick: '@prueba3',
          likes: '12'
        }
      },
      topposts: {
        src: '2',
        likesone: '5',
        likestwo: '4',
        likesthree:'3'
      },
      month:  'febrero' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
      userId:  'wserna' ,
      year:  '2016'
    },
    {
      red: 'inst',
      type: 'month',
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00¡' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      allfans:  '173' ,
      follows:  '017' ,
      allpost:  '2017' ,
      postbymonth: '232',
      likebymonth: '123',
      comments: '23',
      usersppal: {
        userone:{
          nick: '@prueba',
          likes: '10'
        },
        usertwo:{
          nick: '@prueba2',
          likes: '11'
        },
        userthree:{
          nick: '@prueba3',
          likes: '12'
        }
      },
      topposts: {
        src: '2',
        likesone: '5',
        likestwo: '4',
        likesthree:'3'
      },
      month:  'octubre' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
      userId:  'wserna' ,
      year:  '2017'
    },
    {
      red: 'inst',
      type: 'month',
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00¡' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      allfans:  '16' ,
      follows:  '016' ,
      allpost:  '2016' ,
      postbymonth: '232',
      likebymonth: '123',
      comments: '23',
      usersppal: {
        userone:{
          nick: '@prueba',
          likes: '10'
        },
        usertwo:{
          nick: '@prueba2',
          likes: '11'
        },
        userthree:{
          nick: '@prueba3',
          likes: '12'
        }
      },
      topposts: {
        src: '2',
        likesone: '5',
        likestwo: '4',
        likesthree:'3'
      },
      month:  'enero' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
      userId:  'wserna' ,
      year:  '2016'
    },
    {
      red: 'inst',
      type: 'month',
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00¡' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      allfans:  '17' ,
      follows:  '017' ,
      allpost:  '2017' ,
      postbymonth: '232',
      likebymonth: '123',
      comments: '23',
      usersppal: {
        userone:{
          nick: '@prueba',
          likes: '10'
        },
        usertwo:{
          nick: '@prueba2',
          likes: '11'
        },
        userthree:{
          nick: '@prueba3',
          likes: '12'
        }
      },
      topposts: {
        src: '2',
        likesone: '5',
        likestwo: '4',
        likesthree:'3'
      },
      month:  'septiembre' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
      userId:  'wserna' ,
      year:  '2017'
    },
    {
      red: 'tw',
      type: 'month',
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00¡' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      allfans:  '17' ,
      allfollows: '3123',
      newfans: '213',
      globalmedia: '4324',
      globalfavorites: '21345',
      alltweets: '231',
      tweets: '432',
      retweets: '4324',
      mentions: '2134',
      favorites: '543',
      messagedirects: '74',
      hashtags: {
        label1: '#prueba1',
        cant1: '21',
        label2: '#prueba2',
        cant2: '20',
        label3: '#prueba3',
        cant3: '19',
        label4: '#prueba4',
        cant4: '18',
        label5: '#prueba5',
        cant5: '16',
        label6: '#prueba6',
        cant6: '13',
        label7: '#prueba7',
        cant7: '10',
        label8: '#prueba8',
        cant8: '7'
      },
      month:  'septiembre' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
      userId:  'wserna' ,
      year:  '2017'
    },
    {
      red: 'tw',
      type: 'month',
      createdAt: 'Wed Dec 21 2016 16:35:36 GMT+00:00¡' ,
      id:  '47bc39bc-94ba-4dd6-be81-f6a96c77f676' ,
      allfans:  '16' ,
      allfollows: '3123',
      newfans: '213',
      globalmedia: '4324',
      globalfavorites: '21345',
      alltweets: '231',
      tweets: '432',
      retweets: '4324',
      mentions: '2134',
      favorites: '543',
      messagedirects: '74',
      hashtags: {
        label1: '#prueba1',
        cant1: '21',
        label2: '#prueba2',
        cant2: '20',
        label3: '#prueba3',
        cant3: '19',
        label4: '#prueba4',
        cant4: '18',
        label5: '#prueba5',
        cant5: '16',
        label6: '#prueba6',
        cant6: '13',
        label7: '#prueba7',
        cant7: '10',
        label8: '#prueba8',
        cant8: '7'
      },
      month:  'septiembre' ,
      publicId:  '2bmtq4GOkd7DwUyA2jxrFQ' ,
      user: {
      avatar:  '//www.gravatar.com/avatar/eea20b749793fa73fffb24558f3360b6' ,
      name:  'William Serna' ,
      username:  'wserna'
      } ,
      userId:  'wserna' ,
      year:  '2016'
    },
  ];*/

  empty(main).appendChild(template(ctx, ctx.dates));

})
/*
  function loadestadisticas(ctx, next){
   request
    .get('/api/estadisticas')
    .end(function(err,res){
      if(err) return console.log(err);
      ctx.datos = res.body;
      next();
    })
  }*/
  function loadestadisticas(ctx, next){
       axios
        .get('/api/estadisticas')
        .then(function(res){
          ctx.dates = res.data;
          next();
        })
        .catch(function(err){
          console.log(err);
        })
  }

    async function asyncload(ctx, next){
          try {
            ctx.estadisticas = await fetch('/api/estadisticas').then( res => res.json() )
            next();
          } catch (err) {
            return console.log(err);
          }
      }
