import axios from 'axios';

const axiosObj = axios.create({
    baseURL: 'https://cdn-api.co-vin.in/api/v2/',
    timeout: 1000,
    headers: {
        'Accept-Language': 'hi_IN',
        'Access-Control-Allow-Origin': '*',
        'authority' : 'cdn-api.co-vin.in',
    }
});
export const callApiGet = axiosObj.get;
export const callApiPost = axiosObj.post;

export async function callAPI(axiosFn, url, params,nextFn,errFunc) {
    try {
        const res = await axiosFn(url, {params});
        if(nextFn) {
           await nextFn(res.data);
        }
    } catch (err) {
        if (errFunc) {
            await errFunc(err);
        }
    }
}