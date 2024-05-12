import { MainLayout } from "@/layouts/MainLayout";
import { UsernameProvider } from "@/utils/helper/UserNameContext";
import { NextPage } from "next";

const Home: NextPage = () => {
  return <>
    <UsernameProvider>
      <MainLayout />
  </UsernameProvider>
  </>
};

export default Home;
