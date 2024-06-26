import Link from "next/link";
import { FC } from "react";

const ProfileButton: FC = () => {
  const token = process.env.JWT_SECRET_TOKEN;
  // const cookieStore = cookies
  return (
    <Link href={"/register"}>
      <button
        className="
          px-10
          py-2
          rounded-full
          border-[1px]
          border-black/30
          transition-all
          duration-300
          ease-in-out
          hover:bg-gray-200
        "
      >
        {process.env.NODE_ENV}
        Login
      </button>
    </Link>
  );
};

export default ProfileButton;
