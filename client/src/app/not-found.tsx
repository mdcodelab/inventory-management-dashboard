
import Link from "next/link";

function Home() {
  return (
    <div className="not-found">
        <h1 className="text-3xl text-center">Not Found</h1>
        <h2 className="text-xl text-center">404</h2>
        <button className="block mx-auto text-xl"><Link href="/dashboard">Go Back</Link></button>
    </div>
  )
}

export default Home;
