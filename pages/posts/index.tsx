import { GetStaticProps, NextPage } from "next";
import { useId } from "react";

import { getAllPosts } from "../../lib/api";
import Post from "../../interfaces/post";
import Abstraction from "../../components/composed/Abstraction";
import SectionSeparator from "../../components/section-separator";

type Props = {
  allPosts: Post[];
};

const Posts: NextPage<Props> = ({ allPosts }) => (
  <div>
    {allPosts.map((post) => (
      <>
        <Abstraction key={useId()} {...post} />
        <SectionSeparator />
      </>
    ))}
  </div>
);

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "author", "excerpt"]);
  return {
    props: { allPosts },
  };
};
