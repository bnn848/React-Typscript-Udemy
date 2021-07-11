import React from 'react';

// 型定義はinterfaceで定義してPropsで用いる
interface AppProps {
  message?: string; // <-- オプショナルな型定義にしないとindex.tsの方でエラーになる
}

// コンポーネントに対して型定義する
const App: React.FunctionComponent<AppProps> = ({ message }) => { // 型引数を受け取ることができる
  return <div>{message}</div>;
};

// .defaultProps
App.defaultProps = { // コンポーネントのPropsに初期値を設定することができる
  message: 'hello Default!',
  // message: 123, <-- interfaceの定義と異なる値だとエラー
  // description: 'This is App Component.' <-- interfaceでdescriptionを定義してないとエラー
}

export default App;
