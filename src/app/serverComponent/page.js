import { redirect } from "next/navigation"
export default function ServerComponent(){
    let userProfileInfo=null
    if(userProfileInfo===null) redirect('serverComponent/product/2?search=30')
    return (
        <>
           <div className="flex justify-center items-center mt-10">
           <h1>Server Component</h1>
           </div>

        </>
    )
}