import { history, RequestConfig } from 'umi';
import { ResponseError } from 'umi-request';
import { notification } from 'antd';
import { stringify } from 'querystring';

const codeMessage: any = {
    200: '服务器成功返回请求的数据',
    201: '新建或修改数据成功',
    202: '一个请求已经进入后台排队（异步任务）',
    204: '删除数据成功',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
    401: '用户没有权限（令牌、用户名、密码错误）',
    403: '用户得到授权，但是访问是被禁止的',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
    405: '请求方法不被允许',
    406: '请求的格式不可得',
    410: '请求的资源被永久删除，且不会再得到的',
    422: '当创建一个对象时，发生一个验证错误',
    500: '服务器发生错误，请检查服务器',
    502: '网关错误',
    503: '服务不可用，服务器暂时过载或维护',
    504: '网关超时',
};

/**
 * 自定义默认的异常处理程序
 */
 const errorHandler = (error: ResponseError) => {
    const { response, data } = error;

    // TODO 用错误处理

    // response 存在时
    if (response) {
        const { status, statusText } = response;
        if (status === 401) {
            // 状态码为 401 时
            if (history.location.pathname != '/login') {
                // 防止死循环
                history.push(`/login?${stringify({ redirect: window.location.href })}`);
            }
        } else if (data && data.code) {
            // 有统一返回对象时
            notification.error({
                message: data.msg,
                duration: 7,
            });
        } else {
            // 无统一返回对象，但有状态码时
            notification.error({
                message: `${status} ${codeMessage[status] || statusText}`,
                duration: 7,
            });
        }
    } else {
        // response 不存在时
        notification.error({
            message: '网络异常',
            description: '您的网络发生异常，无法连接服务器',
        });
    }

    return data;
};

export const request: RequestConfig = {
    errorHandler,
};