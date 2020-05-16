declare const System: System;

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  store?: any;
}

declare interface System {
  import<T = any>(module: string): Promise<T>
}

declare module 'react-show-more-text';
