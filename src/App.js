import { Provider } from "react-redux";
import { Profiler } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import MainNavigator from "./navigation/MainNavigator";

function App() {
  const callback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
    // console.log(`${id}'s ${phase} phase:`);
    // console.log(`Actual time: ${actualTime}`);
    // console.log(`Base time: ${baseTime}`);
    // console.log(`Start time: ${startTime}`);
    // console.log(`Commit time: ${commitTime}`);
  };
  console.log("RENDER APP");
  return (
    <Provider store={store}>
      <Profiler id="Quizzes" onRender={callback}>
        <MainNavigator />
      </Profiler>
    </Provider>
  );
}

export default App;
