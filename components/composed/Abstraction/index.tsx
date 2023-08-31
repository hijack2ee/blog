import Link from "next/link";

import type Post from "../../../interfaces/post";
import DateFormatter from "../../date-formatter";

const Abstraction = ({ title, date, excerpt, slug }: Post) => {
  return (
    <section className="hover:bg-gray-400">
      <Link href={`posts/${slug}`}>
        <div className="flex justify-between">
          <strong className="text-xl">{title}</strong>
          <DateFormatter dateString={date} />
        </div>
        <div>{excerpt}</div>
      </Link>
    </section>
  );
};

export default Abstraction;
