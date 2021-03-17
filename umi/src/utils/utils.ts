/**
 * 获取 cookie
 */
export const getCookie = (name: string) => {
  let arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
};

/**
 * 删除 cookie
 */
export const deleteCooke = (name: string) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
};

// 文件容量大小
export const getFileSize = (fileByte: number) => {
  const fileSizeByte = fileByte;
  let fileSizeMsg = '';
  if (fileSizeByte < 1048576)
    fileSizeMsg = `${(fileSizeByte / 1024).toFixed(2)}KB`;
  else if (fileSizeByte === 1048576) fileSizeMsg = '1MB';
  else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824)
    fileSizeMsg = `${(fileSizeByte / (1024 * 1024)).toFixed(2)}MB`;
  else if (fileSizeByte > 1048576 && fileSizeByte === 1073741824)
    fileSizeMsg = '1GB';
  else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776)
    fileSizeMsg = `${(fileSizeByte / (1024 * 1024 * 1024)).toFixed(2)}GB`;
  else fileSizeMsg = '文件超过1TB';
  return fileSizeMsg;
};

// 阿里云图片处理 url
// ?x-oss-process=image/resize,h_128
export const uploadFileType = {
  userFile: {
    pathPrefix: 'https://res.knowpoint.cn/m/',
  },
};