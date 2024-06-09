import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Footer() {
  return (
    <footer className="flex flex-col px-4">
      <section className="flex flex-col items-center justify-center md:pt-12">
        <div className="flex flex-col">
          <h2 className="text-center text-sm font-semibold sm:text-xl md:text-2xl lg:text-left lg:text-6xl">
            Pare de perder tempo e torne-se um{" "}
          </h2>
          <TypewriterEffectSmooth
            words={[
              {
                text: "Desenvolvedor Fullstack de verdade AGORA",
                className:
                  "!font-semibold md:text-3xl sm:text-2xl text-lg !text-primary",
              },
            ]}
            cursorClassName="bg-primary h-8 w-[4px] rounded-sm sm:h-6 xl:h-12"
          />
        </div>
        <div className="flex">
          <Link
            href="https://calendly.com/mateusppa10/mentoria"
            target="_blank"
            className="mt-6 animate-bounce rounded-full bg-primary px-7 py-4 text-center text-xl font-bold text-black transition-colors hover:bg-accent hover:text-base hover:text-xl lg:w-full"
          >
            Faça seu agendamento gratuito
          </Link>
        </div>
      </section>
    </footer>
  );
}
