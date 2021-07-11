import React, { useEffect, useRef, useState } from 'react'

// StateとDispatchの型定義
type MySetStateAction = number | ((prevState: number) => number);
type MyDispatch = (value: MySetStateAction) => void;

// const array: Array<number> = [1, 2, 3];
// const readonlyArray: ReadonlyArray<number> = [1, 2, 3];
// array[0] = 11;
// readonlyArray[0] = 11;

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

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });
  const ref = useRef<HTMLInputElement>(null!); // 初期値がnullにはならないよ、とTSに伝える (Non-null-Assertion Operator)
  const focusInput = () => {
    // const current = ref.current;
    // if (current !== null) {
    //   return current.focus()
    // }
    // ref.current?.focus(); // truthyの時のみ
    ref.current.focus();
  }

  return (
    <>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click me !</button>
    </>
  )
};

export default Counter;