'use client'
import { usePathname, useSearchParams } from "next/navigation"

export default function ProductDetailes(){
    const pathName=usePathname()
    console.log(pathName)
    const searchName=useSearchParams()
    console.log(searchName.get('search'))
    return <h1>This is ProductDetailes page</h1>
}