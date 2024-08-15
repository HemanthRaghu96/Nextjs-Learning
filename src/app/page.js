import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
     <h1>Welcome</h1>
     <Link href={'clientComponent'}>Go to clientComponent</Link>
     <Link href={'serverComponent'}>Go to serverComponent</Link>
    </main>
  );
}
