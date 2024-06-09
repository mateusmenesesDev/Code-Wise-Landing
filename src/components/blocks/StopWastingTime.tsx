import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function StopWastingTime() {
  return (
    <section className="flex items-center justify-center pt-12">
      <h2 className="mt-16 text-center text-3xl font-semibold lg:text-left lg:text-6xl">
        Pare de perder tempo e se torne um{" "}
        <TypewriterEffectSmooth
          words={[
            {
              text: "Desenvolvedor Fullstack de verdade AGORA",
              className:
                "!border-b !border-primary !lg:border-b !lg:border-primary !pb-2 !font-semibold !text-primary",
            },
          ]}
          cursorClassName="bg-primary block h-8 mt-1 lg:mt-0 w-[4px] rounded-sm sm:h-6 xl:h-12"
        />
      </h2>
    </section>
  );
}
