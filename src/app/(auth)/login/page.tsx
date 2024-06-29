import { BackButton } from "../_components";
import Link from "next/link";
import { LoginForm } from "./_components";

export const metadata = {
  title: "Login | Ecommerce Platform",
  description: "Generated by Next.js",
};

export default function Login() {
  return (
    <main
      className="
        min-w-[90vw]
        sm:min-w-[500px]
        md:min-w-[600px]
        border-[1px]
        border-black/20
        px-8
        flex
        flex-col
        gap-y-6
        py-6
      "
    >
      <div
        className="
          flex
          items-center
          gap-x-4
          justify-between
        "
      >
        <BackButton />
        <div>
          <Link href="/">Logo</Link>
        </div>
      </div>
      <LoginForm />
    </main>
  );
}
