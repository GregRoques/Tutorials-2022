import { useState } from "react";
import { Suspense, lazy, useTransition } from "react";
//import wait from "../functions/slowLoading";
import lazyLoad from "../functions/lazyLoad";

//const AdminData = lazy(() => wait(1000).then(() => import("./AdminData")));
const AdminData = lazyLoad("../Components/AdminData.jsx");

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, startTransition] = useTransition();
  // is pending overrides fallback
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          import("../functions/sum.js").then((module) => {
            alert(module.sum(2, 2));
          }); // notice we save downloading function until we need it
        }}
      >
        Add 2 + 2
      </button>
      <br />
      <br />
      <button
        onClick={() =>
          startTransition(() => {
            setIsAdmin((prev) => !prev);
          })
        }
      >
        Toggle Admin
      </button>
      {isPending && "Loading..."}
      <Suspense fallback="Loading...">
        {isAdmin ? <AdminData /> : <h2>Not an Admin</h2>}
      </Suspense>
    </div>
  );
}
