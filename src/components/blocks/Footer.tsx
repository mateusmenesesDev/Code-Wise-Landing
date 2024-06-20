import Link from "next/link";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function Footer() {
  return (
    <footer className="flex flex-col px-4 pb-12">
      <section className="flex flex-col items-center justify-center md:pt-12">
        <div className="flex flex-col">
          <h2 className="text-center font-semibold sm:text-xl md:text-2xl lg:text-left lg:text-6xl">
            Pare de perder tempo e torne-se um{" "}
            <span className="mt-2 block text-2xl text-primary">
              Desenvolvedor Fullstack de{" "}
              <span className="font-semibold text-accent md:text-5xl">
                VERDADE
              </span>{" "}
              AGORA
            </span>
          </h2>
        </div>
        <div className="flex">
          <Link
            data-umami-event="cta:book-mentoring"
            data-umami-event-section="footer"
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
