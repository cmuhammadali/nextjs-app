import { ReactNode } from "react";

export default function ProductDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      {children}
      <h1>Features products</h1>
    </>
  );
}
