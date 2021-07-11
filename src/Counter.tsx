import React, { useState } from 'react'

// StateとDispatchの型定義
type MySetStateAction = number | ((prevState: number) => number);
type MyDispatch = (value: MySetStateAction) => void;

// const Counter: React.FunctionComponent<{}> = () => { // 引数ない場合は空オブジェクトで型指定
const Counter: React.FC<{}> = () => { // FCと省略可能
  const init: any = 0; // 例え初期値をany型で定義したとしても...
  const [value, setValue] = useState<number>(init);// useStateに型定義すると、初期値に関係なく制約を設ける

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };
  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  return (
    <>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  )
};

export default Counter;