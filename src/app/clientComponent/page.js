"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ClientComponent() {
  let [count, setCount] = useState(0);
  let router=useRouter()
  let userProfileInfo=null
  if(userProfileInfo===null) router.push('clientComponent/product/1?search=10')
  return (
    <>
      <h1 className="mt-10 text-center font-bold">Client Component</h1>
      <div className="flex justify-center items-center mt-5">
        <button
          className="border-[1px] p-2 mx-5"
          onClick={() => setCount(count - 1)}
        >
          Sub
        </button>
        <p>{count}</p>
        <button
          className="border-[1px] p-2 mx-5"
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
      </div>
    </>
  );
}
