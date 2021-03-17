import { useEffect, useState } from 'react';
import { Button, Spin } from 'antd';
import { mockDate } from '@/../mock/serviceApi';
import { getAutoCompleteKeyworkList } from '@/service/exampleApi';
import style from './index.less';

/**
 * 例子1：在客户端请求后台服务数据
 * 
 * 1、演示了 mock 数据，请查看 /umi/mock/serviceApi.ts 
 * 2、演示了 service api 的定义方式，请查看 /umi/src/service/exampleApi
 * 3、演示了 请求数据 await getAutoCompleteKeyworkList();
 * 4、演示了 全局自定义异常处理程序，请查看 /umi/src/app.tsx
 */

const Demo1Page = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        console.log('useEffect::每次都执行');
    });

    // 与在 useEffect 中的内容服务器端不会被执行，直会在客户端被执行
    useEffect(() => {
        console.log('useEffect::执行一次');
        getData();
    }, []);

    // 调用真实远程接口，获取数据
    const getData: any = async () => {
        console.log('getAutoCompleteKeyworkList::获取数据');
        setLoading(true);
        const resutl = await getAutoCompleteKeyworkList();
        setLoading(false);
        if (resutl.code === 200) setData(resutl.data);
    }

    // 调用 mock 接口，获取时间
    const getNowDate: any = async () => {
        console.log('mockDate::获取时间');
        setLoading(true);
        const resutl = await mockDate();
        setLoading(false);
        if (resutl.code === 200) setData(resutl.data);
    }

    return (
        <>
        <p></p>
            <div className={style.div1}>
                <Spin spinning={loading}>
                    {JSON.stringify(data)}
                </Spin>
            </div>

            <div className={style.div2}>
                <Button onClick={getData}>获取数据</Button> <Button onClick={getNowDate}>获取时间</Button>
            </div>
        </>
    )
}

export default Demo1Page;