import * as React from "react";
import VoucherInfo from "./components/VoucherInfo";
// import LinkedCourses from "./components/LinkedCourse";

function VoucherNew() {
  return (
    <main className="flex flex-col flex-1 shrink p-16 text-xl font-medium bg-white basis-0 min-w-[240px] min-h-screen max-md:px-5 max-md:max-w-full">
        {/* <section className="overflow-hidden grow shrink px-16 pt-16 pb-9 bg-white min-h-[985px] min-w-60 w-[1347px] max-md:px-5 max-md:max-w-full"> */}
          <VoucherInfo />
          {/* <LinkedCourses /> */}
        {/* </section> */}
    </main>
  );
}

export default VoucherNew;