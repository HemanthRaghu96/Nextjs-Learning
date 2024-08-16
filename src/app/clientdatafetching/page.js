'use client'

import useSWR from "swr"

export default function ClientDataFetching(){
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users/', fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div className="font-bold text-3xl">loading... Please wait</div>
   
    return(
        <>
            <div>
                <h1>This is client data fetching</h1>
                <ul>
          {data && data.users.length > 0
            ? data.users.map((item) => <li key={item.id} className="p-3 cursor-pointer">{item.firstName}</li>)
            : null}
        </ul>
            </div>
        </>
    )
}