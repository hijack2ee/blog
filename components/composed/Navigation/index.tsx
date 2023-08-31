import Link from "next/link";
import { useId } from "react";

import type { NavigationItem } from "../../../interfaces/navigation";

type Props = {
  items: NavigationItem[];
};

const Navigation = ({ items }: Props) => (
  <ol className="w-full flex justify-between py-4 h-20">
    {items.map(({ name, to }) => (
      <li key={useId()}>
        <Link href={to}>{name}</Link>
      </li>
    ))}
  </ol>
);

export default Navigation;
