import Link from "next/link";

export default function NotFound(){
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-32">
                <h1>This page is not found</h1>
                <Link href={'/'}>Go back to Home</Link>
            </div>
        </>
    )
}