import { createContext, useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Student from "./Components/Student";
import Employee from "./Components/Employee";
import Click from "./Components/Click";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import CounterAppClass from "./Components/CounterAppClass";
import CounterAppFun from "./Components/CounterAppFun";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Products from "./Components/Products";
import UseStateCompo from "./Components/UseStateCompo";
import UseStateObject from "./Components/UseStateObject";
import StyleBook from "./Components/StyleBook";
import UseStateArrObj from "./Components/UseStateArrObj";
import UseStateClass from "./Components/UseStateClass";
import UseEffectCounter from "./Components/UseEffectCounter";
// import UseContextHookA from "./Components/UseContextHookA";
// import UseContextHookB from "./Components/UseContextHookB";
import MultiFormInput from "./Components/MultiFormInput";
import InputFunction from "./Components/InputFunction";
import FormReact from "./Components/FormReact";
import MultiSelect from "./Components/MultiSelect";
import UseRef from "./Components/UseRef";
import UnControled from "./Components/UnControled";
import CallBack from "./Components/CallBack";
import { Route, Routes } from "react-router-dom";
import UseNavigate from "./Components/UseNavigate";
import MyNav from "./Components/MyNav";
import NestedLinks from "./Components/NestedLinks";
import Shoes from "./Components/Shoes";
import Clothes from "./Components/Clothes";
import SearchParams from "./Components/SearchParams";
import { Suspense, lazy } from "react";
import ValidForm from "./Components/ValidForm";
// Lazy load Compo1 and Compo2
const LazyCompo1 = lazy(() => import("./Components/Compo1"));
const LazyCompo2 = lazy(() => import("./Components/Compo2"));

function App() {
  return (
    <div>
      <ValidForm />

      {/* <Suspense fallback={<div></div>}>
        <LazyCompo1 />

        <Suspense fallback={<div>Loading......</div>}>
          <LazyCompo2 />
        </Suspense>
      </Suspense> */}
      {/* <Route path="/nested" element={<NestedLinks />}></Route> */}
      {/* <Route path="/nested" element={<NestedLinks />}>
          <Route index element={<Clothes />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="clothes" element={<Clothes />} />
        </Route>
        <Route path="/search" element={<SearchParams />}></Route>
      </Routes>
      <UseNavigate /> */}
      {/* <MultiSelect /> */}
      {/* <UnControled /> */}
      {/* <CallBack /> */}
    </div>
  );
}

export default App;
