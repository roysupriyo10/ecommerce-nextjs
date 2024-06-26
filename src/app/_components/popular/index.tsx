import { InferGetServerSidePropsType } from "next";
import { FC } from "react";

const Popular: FC = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  return (
    <section
      className="
        flex
        flex-col
      "
    >
      <h2
        className="
          uppercase
          font-medium
        "
      >
        POPULAR IN WOMEN
      </h2>
      <div>{props}</div>
    </section>
  );
};

export default Popular;

export async function getServerSideProps() {
  return {
    props: "some nice props",
  };
}
