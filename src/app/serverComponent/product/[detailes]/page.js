import Loading from "@/app/loading"
import { Suspense } from "react"

export default function ProductDetailes({searchParams,children}){
    console.log(searchParams.search)
    return <>
    <h1>This is product detailes page</h1>
          <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
}