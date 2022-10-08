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
declare let ipcRenderer: any
declare let versions: any
