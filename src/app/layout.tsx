import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaHeadset, FaChevronDown } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MegaMart",
  description: "Shop More. Save More.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ul className="flex items-center">
          <li className="px-4">
            <Link href="/" passHref>
              <Image src="/logo.png" alt="App logo" width={200} height={100} />
            </Link>
          </li>
          {/* Shop with dropdown */}
          <li className="relative group px-4 py-6 flex items-center space-x-1">
            <Link href="/shop">Shop</Link>
            <FaChevronDown className="text-gray-600 h-4 w-4" />
            {/* Dropdown */}
            <ul
              className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg 
               opacity-0 scale-y-0 transform origin-top 
               transition-all duration-300 ease-in-out 
               group-hover:opacity-100 group-hover:scale-y-100"
            >
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/electronics">Electronics</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/jewelery">Jewelery</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/menShopping">Men</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/shop/womenShopping">Women</Link>
              </li>
            </ul>
          </li>
          <li className="px-4 py-6">
            <Link href="/categories">All Categories</Link>
          </li>
          <li className="px-4 py-6">
            <Link href="/deals">Deals</Link>
          </li>

          {/* Push everything after this point to the right */}
          <div className="flex ml-auto">
            <li className="flex px-4 py-6 items-center space-x-2">
              <FaHeadset className="text-gray-700" />
              <Link href="/support">Help & Support</Link>
            </li>
            <li className="flex px-4 py-6 items-center space-x-2">
              <FaShoppingCart className="text-gray-700" />
              <Link href="/cart">Cart</Link>
            </li>
          </div>
        </ul>

        {children}
      </body>
    </html>
  );
}
