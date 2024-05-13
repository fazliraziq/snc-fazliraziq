import { MainLayout } from "@/layouts/MainLayout";
import { EnableLogProvider } from "@/utils/helper/EnableLogContext";
import { NextPage } from "next";

const Home: NextPage = () => {
  return <>
    <EnableLogProvider>
      <MainLayout />
  </EnableLogProvider>
  </>
};

export default Home;
