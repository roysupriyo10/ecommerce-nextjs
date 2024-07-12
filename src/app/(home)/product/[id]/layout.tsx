import { ReactNode, Suspense } from "react";
import ProductLoading from "./loading";

export default function ProductLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <Suspense fallback={<ProductLoading />}>{children}</Suspense>;
}
