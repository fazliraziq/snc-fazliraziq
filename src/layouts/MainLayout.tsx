import { FunctionComponent, PropsWithChildren, Suspense, useContext, useState } from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";
import { Button } from "@/components/Button";
import { Person } from "@/utils/common/person";
import Card from "@/components/Card";
import { LogContext } from "@/utils/helper/EnableLogContext";
import { Timer } from "@/components/Timer";
import Loading from "@/layouts/loading";

const inter = Inter({ subsets: ["latin"] });

type MainLayoutProps = {};

export const MainLayout: FunctionComponent<
  PropsWithChildren<MainLayoutProps>
> = () => {
  const context = useContext(LogContext);
  const [data , setData] = useState('');

  function setShowTimer(checked: boolean): void {
    context.setEnableLog(checked);
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
            <Button key={person} name={person} onClickHandler={(p) => setData(p)}>{person}</Button>
          ))}
      </div>
      <section className="flex flex-col mt-10">
        {/* <ErrorBoundary fallback={<Error />}> */}
        <Suspense fallback={<Loading />} >
          {data && <Card username={data} />}
          {!data && <Loading />}
        </Suspense>
        {/* </ErrorBoundary> */}
      </section>
      <section className="mt-10">
        <div>
          <label>
            Toggle Timer : 
            <input
              className="w-5 h-5 ml-5"
              type="checkbox"
              checked={context.enableLog}
              onChange={(e) => setShowTimer(e.target.checked)}
            />
          </label>
          {context.enableLog && <Timer />}
        </div>
      </section>
    </main>
  );
};
