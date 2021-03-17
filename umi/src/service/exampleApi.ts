import { request } from 'umi';

// 获取查询输入框自动完成的内容
export async function getAutoCompleteKeyworkList() {
  return request('https://lists.meizu.com/search/primary/autocomplete');
}

// 获取当前地址信息
export async function getLocateCity() {
  return request('https://lists.meizu.com/search/primary/autocomplete');
}
