import { Outlet } from "react-router";

import { Layout } from "@/components/layouts";

const Root = () => {
  return (
    <>
      <Layout.Navbar />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};
export default Root;
