import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
import Image from "next/image";

export function DemoProject() {
  return (
    <div className="w-full overflow-hidden">
      <div className="hidden md:block">
        <MacbookScroll
          title={
            <div>
              <h2 className="text-primary lg:text-5xl">
                O que você aprenderá na mentoria?
              </h2>
            </div>
          }
          src="/images/crm.png"
        />
      </div>
      <div className="mb-6 md:hidden">
        <h2 className="mb-6 text-3xl font-semibold text-primary">
          {" "}
          O que você aprenderá na mentoria?
        </h2>
        <div className="flex justify-center">
          <Image src="/images/crm.png" width={600} height={600} alt="CRM" />
        </div>
      </div>
    </div>
  );
}
