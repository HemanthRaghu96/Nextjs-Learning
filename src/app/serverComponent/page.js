import { redirect } from "next/navigation"
export default function ServerComponent(){
    let userProfileInfo=null
    if(userProfileInfo===null) redirect('profile')
    return (
        <>
           <div className="flex justify-center items-center mt-10">
           <h1>Server Component</h1>
           </div>

        </>
    )
}