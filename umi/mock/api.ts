import mockjs, { Random } from 'mockjs';

/**
 * mockjs 生成随机数据，方便本地调制
 * https://umijs.org/zh-CN/docs/mock
 * 
 * 是常用的辅助生成模拟数据的三方库，借助他可以提升我们的 mock 数据能力。
 * http://mockjs.com/
 */

/**
 * 生成统一格式的返回对象
 */
const mackResult = (data: any) => {
  return { code: 200, msg: 'ok', data };
};

export default {

   /**
   * 返回时间
   */
     '/mock/date': mackResult({time:mockjs.mock('@time')}),

  /**
   * 返回一个信息对象，访问 http://localhost:8000/mock/user
   */
  '/mock/user': mackResult({ id: 1, name: 'name' }),

  /**
   * 返回一个信息列表
   */
  'GET /mock/user/find': mackResult(
    mockjs.mock({
      'list|10': [{ id: '@id', number: '@guid'  }],
    }),
  ),

  /**
   * 添加跨域请求头
   */
  'POST /mock/user/create': (
    req: any,
    res: {
      setHeader: (arg0: string, arg1: string) => void;
      end: (arg0: string) => void;
    },
  ) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
