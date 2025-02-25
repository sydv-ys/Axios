import Title from "./components/Title";
import First from "./examples/1-first-request";
import Headers from "./examples/2-headers";
import Post from "./examples/3-post-request";
import Global from "./examples/4-global-instance";
import Custom from "./examples/5-custom-instance";
import Interceptors from "./examples/5-custom-instance";
import "./axios/global";

function App() {
  return (
    <main>
      {/* <Title /> */}
      {/* <First /> */}
      {/* <Headers /> */}
      {/* <Post/> */}
      {/* <Global /> */}
      {/* <Custom /> */}
      <Interceptors />
    </main>
  );
}

export default App;
