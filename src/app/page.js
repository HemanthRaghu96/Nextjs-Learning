'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  let router=useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
     <h1 className="font-bold text-5xl">Welcome</h1>
     <h1 className="font-semibold text-2xl mt-4">Navigate using Link</h1>
     <Link href={'clientComponent'}>Go to clientComponent</Link>
     <Link href={'serverComponent'}>Go to serverComponent</Link>
     <h1 className="font-semibold text-2xl mt-4">Navigate using useRouter</h1>
    <button onClick={()=>router.push('clientComponent')}>Go to clientComponent</button>
    <button onClick={()=>router.push('serverComponent')}>Go to serverComponent</button>
    </main>
  );
}
