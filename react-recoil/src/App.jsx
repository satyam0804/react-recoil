import { useContext, useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { countAtom, evenSelector } from "./store/atom/countAtom";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <>
      <CountRender></CountRender>
      <Buttons></Buttons>
    </>
  );
}

function EvenRender() {
  const count = useRecoilValue(evenSelector);
  return (
    <>
      <h1>Even : {count ? "Yes" : "No"}</h1>
    </>
  );
}

function CountRender() {
  const count = useRecoilValue(countAtom);
  return (
    <>
      <h1>Count: {count}</h1>
      <EvenRender></EvenRender>
    </>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
