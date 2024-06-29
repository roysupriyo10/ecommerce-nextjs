"use client";

import { setTempCartCookie } from "@/app/(home)/_actions";
import { FC, useEffect } from "react";

const TempCartCookieSetter: FC = () => {
  useEffect(() => {
    setTempCartCookie();
  }, []);

  return null;
};

export default TempCartCookieSetter;
