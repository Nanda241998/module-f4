// This component is used to simulate the loading page

import loading from "./Loading.jsx";

export default function Loading() {
  return (
    <div className="z-50 w-screen h-screen bg-slate-400/30 backdrop-blur flex justify-center items-center absolute top-0 left-0">
      <img
        src={loading}
        width="200px"
        className="inline-block animate-spin ml-8"
      />
    </div>
  );
}