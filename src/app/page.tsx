import Link from "next/link";

export default function Home() {

  return (
    <div>
      <h1>Salom Dunyo!</h1>
      <Link href="/products">Products</Link>
    </div>
  );
}
