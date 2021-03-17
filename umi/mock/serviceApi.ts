import { request } from 'umi';

export async function mockDate() {
  return request('/mock/date');
}

export async function mockGetUser() {
  return request('/mock/user');
}

export async function mockGetUserList() {
  return request('/mock/user/find');
}
