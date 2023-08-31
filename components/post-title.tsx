import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-3xl">
      <strong>{children}</strong>
    </h1>
  );
};

export default PostTitle;
