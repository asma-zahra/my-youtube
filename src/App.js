import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import WatchVedioPage from "./components/WatchVedioPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVedioPage />,
      },
    ],
  },
  // Body has two children sidebar and main container. sidebar will remain same on watch page. but maincontainer will change dynamically will watchVideo and comment. so for that we need to replace mainContainer with <outlet/>
]);

function App() {
  return (
    <Provider store={store}>
      <Head />
      {/* body component will reder here. */}
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
  /////////////////////////////////////
}

export default App;

/*
<Head>
<Body>
  <Sidebar>
  <MainContainer>  
    <VedioCard/>  

*/
