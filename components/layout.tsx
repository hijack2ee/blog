import Meta from "@/components/meta";
import Navigation from "@/components/composed/Navigation";
import { ROUTES } from "@/lib/constants";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen px-48 max-w-6xl m-auto">
        <Navigation items={ROUTES} />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
