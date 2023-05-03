declare module '*.module.css' {
    const exports: { [exportName: string]: string };
    export = exports;
}
// declare module '*.svg' {
//     const exports: { [exportName: string]: ReactComponent };
//     export = exports;
// }
