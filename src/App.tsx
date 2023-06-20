import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter, Footer, Navigation, ScrollWrapper } from "./components";
import store from "./store";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/main.css";

function App() {
  return (
    <div className='font-body bg-dark100 h-screen flex flex-1 flex-col overflow-hidden app-background'>
      <BrowserRouter>
        <Provider store={store}>
          <Navigation />
          <ScrollWrapper>
            {(props: any) => <AppRouter {...props} />}
          </ScrollWrapper>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
