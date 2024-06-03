import { Header } from "~/components/Header";
import monitorImg from "/public/images/monitor.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <main className="h-dvh bg-base px-4 py-14 text-white">
      <Header />
      <section>
        <h1 className="mt-16 text-center text-3xl font-semibold">
          Mentoria Exclusiva para <br /> Desenvolvedores Fullstack
        </h1>
        <div className="mt-12 flex justify-center">
          <Image
            src="/images/developer.svg"
            height={600}
            width={600}
            className="w-72"
            alt="Desenvolvedor Fullstack"
          />
        </div>
        <p className="mt-6 text-center text-lg">
          Aprenda a se tornar um{" "}
          <span className="text-3xl font-semibold text-primary">
            Desenvolvedor Fullstack de VERDADE
          </span>{" "}
          com a mentoria gratuita de um profissional dentro do mercado.
        </p>
      </section>
      {/* Colocar em uma seção a imagem do Jira cheia de itens */}
    </main>
  );
}
