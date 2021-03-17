import { request } from 'umi';

const host = 'https://www.meizu.com';

// 手机注册验证码
export async function sendRegVerifyCode(data: { mobile: string }) {
  return request(host + '/api/meizu-un/guest/reg/mobile/vcode', {
    method: 'POST',
    data,
  });
}

// 手机注册
export async function mobileReg(data: { mobile: string; code: string }) {
  return request(host + '/api/meizu-un/guest/reg/mobile', {
    method: 'POST',
    data,
  });
}

// 手机登录验证码
export async function sendLoginVerifyCode(data: { mobile: string }) {
  return request(host + '/api/meizu-un/guest/login/mobile/vcode', {
    method: 'POST',
    data,
  });
}

// 手机登录
export async function mobileLogin(data: { mobile: string; code: string }) {
  return request(host + '/api/meizu-un/guest/login/mobile', {
    method: 'POST',
    data,
  });
}

// 获取当前用户信息和用户权限信息
export async function getCurrentUserAccount() {
  return request(host + '/api/meizu-un/user/account');
}

// 登出
export async function userLogout() {
  return request(host + '/api/meizu-un/user/account/logout', {
    method: 'POST',
  });
}
