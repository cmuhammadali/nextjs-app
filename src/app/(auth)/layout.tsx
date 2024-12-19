"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const navLinks = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  return (
    <div>
      <h1>Auth Layout</h1>
      <ul>
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.href);

          return (
            <Link
              key={link.name}
              href={link.href}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      {children}
    </div>
  );
}
