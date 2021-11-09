import {Provider} from "react-redux";
import {store} from "./HW5/store";
import HW5 from "./HW5";

//


function App() {
  return (
        <Provider store={store}>

            <div >

                <HW5/>

            </div>

        </Provider>
  );
}

export default App;
