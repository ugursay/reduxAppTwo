import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { decrement, increment } from "./redux/counterSlice";
import Userlist from "./Userlist";

function App() {
  // const dispatch = useDispatch();
  // const { value2 } = useSelector((store) => store.counter);
  // console.log(value2);
  // return (
  //   <div>
  //     <div>{value2}</div>
  //     <div>
  //       <button onClick={() => dispatch(increment())}>Arttır</button>{" "}
  //       <button onClick={() => dispatch(decrement())}>Azalt</button>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <Userlist />
    </div>
  );
}

export default App;
