import React, { FC, PropsWithChildren } from "react";

const ExplorerLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 grid-rows-[1fr_min-content] gap-5 p-4 md:grid-cols-2 md:grid-rows-1 md:p-10 lg:p-20">
      {children}
    </main>
  );
};

export default ExplorerLayout;
