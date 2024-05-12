import { FunctionComponent, PropsWithChildren, Suspense, useContext } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";
import Loading from "../pages/Loading";
import { UserContext } from "@/utils/helper/UserNameContext";
import Card from "@/components/Card";
import Error from "@/pages/Error";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const context = useContext(UserContext);

  const handleClickButton = (person : Person) => {
    context.setUser(person);
  }
  
  return (
    <main
      className={classNames(
        inter.className,
        "h-screen w-screen",
        "flex flex-col justify-center items-center",
      )}
    >
      <div className={classNames("flex gap-2")}>
          {Object.values(Person).map((person) => (
            <Button key={person} name={person} onClickHandler={handleClickButton}>{person}</Button>
          ))}
      </div>
      <section className="flex flex-col mt-10">
        {/* <ErrorBoundary fallback={<Error />}> */}
        <Suspense fallback={<Loading />} >
          <Card />
        </Suspense>
        {/* </ErrorBoundary> */}
      </section>
    </main>
  );
};
