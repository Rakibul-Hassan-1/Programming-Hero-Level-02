import { Button } from "./components/ui/button";
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
      <div className="flex min-h-svh flex-col items-center justify-center space-y-8">
        <h1 className="text-4xl font-bold">Counter With Redux</h1>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex gap-4">
            <Button
              onClick={() => handleIncrement(5)}
              variant="secondary"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Increment By 5
            </Button>
            <Button
              onClick={() => handleIncrement(1)}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Increment
            </Button>
          </div>
          <div className="text-4xl font-semibold bg-slate-100 px-8 py-4 rounded-lg">
            {count}
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => handleDecrement(1)}
              className="bg-red-500 hover:bg-red-600"
            >
              Decrement
            </Button>
            <Button
              onClick={() => handleDecrement(5)}
              variant="secondary"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Decrement by 5
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
