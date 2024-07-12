"use client";

import { sleep } from "@/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FC,
  MouseEventHandler,
} from "react";

type TransitionLinkProps = LinkProps &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const TransitionLink: FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();

  const handleTransition: MouseEventHandler<HTMLAnchorElement> = async (
    event,
  ) => {
    event.preventDefault();

    document.body.classList.add("page-transition");

    await sleep(250);

    router.push(href, {
      scroll: false,
    });

    document.body.classList.remove("page-transition");
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
