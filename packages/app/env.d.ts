/*
 * @Author: Hunter
 * @Date: 2022-10-18 14:20:01
 * @LastEditTime: 2022-10-18 18:01:00
 * @LastEditors: Hunter
 * @Description: 
 * @FilePath: \vite-vue-electron\packages\app\env.d.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */

import "electron"
declare module '*.tsx';
declare module '*.ts';
declare module '*.json';
declare module '*.scss' {
    const style: any;
    export default style;
}

declare module '*.css';
declare module '*.less';
declare module '*.png';

