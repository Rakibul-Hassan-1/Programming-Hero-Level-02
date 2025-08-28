import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector(
    (state: { counter: { count: number } }) => state.counter
  );
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  return (
    <>
      <div>
        <h1>Counter With Redux</h1>
        <button onClick={() => handleIncrement(5)}>Increment By 5</button>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <div>{count}</div>
        <button onClick={() => handleDecrement(5)}>Decrement by 5</button>
        <button onClick={() => handleDecrement(1)}>Decrement</button>
      </div>
    </>
  );
}

export default App;
