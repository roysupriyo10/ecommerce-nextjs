"use client";

import { FC, useState } from "react";

type SubscribeEmailProps = {
  className?: string;
};

const SubscribeEmail: FC<SubscribeEmailProps> = ({ className = "" }) => {
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <div
        className={`
          flex
          items-center
          rounded-full
          border-[1px]
          border-black/20
          ${className}
        `}
      >
        <input
          placeholder="Enter your email here"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="
            w-full
            border-none
            bg-transparent
            outline-none
            text-sm
            placeholder:text-sm
            placeholder:text-gray-400
            py-4
            px-8
          "
          required
          type="email"
        />
        <button
          className="
            rounded-full
            h-full
            bg-black
            text-white
            px-8
            hover:bg-black/90
            max-sm:hidden
            transition
          "
        >
          Subscribe
        </button>
      </div>
      <button
        className="
          rounded-full
          sm:hidden
          h-full
          bg-black
          text-white
          px-8
          py-2
          hover:bg-black/90
          transition
        "
      >
        Subscribe
      </button>
    </>
  );
};

export default SubscribeEmail;
