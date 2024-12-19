import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
};

export default function Products() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Products</h1>
      <br />
      <Link href="/products/1">
        <p>Procut 1</p>
      </Link>
      <Link href="/products/2">
        <p>Procut 2</p>
      </Link>
      <Link href="/products/3" replace>
        <p>Procut 3</p>
      </Link>
    </div>
  );
}
