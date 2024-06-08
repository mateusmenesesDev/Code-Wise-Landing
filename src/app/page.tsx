import Image from "next/image";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export default function Home() {
  return (
    <main className="m-auto max-w-[100rem] px-4 pt-12">
      <section className="md+:items-center m-auto justify-between lg:flex lg:h-dvh lg:max-w-7xl">
        <div>
          <h1 className="mt-16 text-center text-3xl font-semibold lg:text-left lg:text-6xl">
            Mentoria Exclusiva para <br />{" "}
            <span className="text-accent">Desenvolvedores Fullstack</span>
          </h1>
          <div className="mt-12 flex justify-center lg:m-0 lg:hidden">
            <Image
              src="/images/developer.svg"
              height={600}
              width={600}
              className="w-72"
              alt="Desenvolvedor Fullstack"
            />
          </div>
          <p className="lg:flex- my-6 flex flex-col gap-1 text-center text-lg lg:text-left">
            <span className="text-3xl font-semibold text-primary">
              Aprenda a se tornar um Desenvolvedor de{" "}
              <span className="bg-accent p-1 text-black">VERDADE</span>
            </span>{" "}
            com a mentoria gratuita de um profissional dentro do mercado.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              href="https://calendly.com/mateusppa10/mentoria"
              target="_blank"
              className="animate-bounce rounded-full bg-primary px-7 py-4 text-center text-xl font-bold text-black transition-colors hover:bg-accent hover:text-base hover:text-xl lg:w-full"
            >
              COMECE AGORA!
            </Link>
          </div>
        </div>
        <div className="mt-12 hidden justify-center lg:m-0 lg:flex">
          <Image
            src="/images/developer.svg"
            height={600}
            width={600}
            className="w-72 lg:w-96"
            alt="Desenvolvedor Fullstack"
          />
        </div>
      </section>
      <div className="mt-12 flex flex-col gap-8 lg:flex lg:flex-row lg:items-start lg:text-xl">
        <section className="flex flex-1 flex-col gap-6">
          <TypewriterEffectSmooth
            words={[
              {
                text: "O PROBLEMA dos cursos atuais",
                className:
                  "!border-b !border-error !lg:border-b !lg:border-error !pb-2 font-semibold !text-[#ed2a3b]",
              },
            ]}
            cursorClassName="bg-error block h-8 mt-1 lg:mt-0 w-[4px] rounded-sm sm:h-6 xl:h-12"
          />
          <p>
            A maioria dos cursos disponíveis no mercado ensinam apenas o básico
            das tecnologias, sem ensinar como aplicar esses conhecimentos na
            prática.
          </p>
          <ul className="flex flex-col gap-4 pl-8">
            <li>❌ Aplicações que possuem apenas CRUD</li>
            <li>
              ❌ Aplicações que não resolvem problemas reais de empresas
              (Pokedex 👀? )
            </li>
            <li>
              ❌ Tecnologias de hype que não estão realmente em uso no mercado
            </li>
            <li>❌ Não mostram o que esta em alta no mercado</li>
            <li>
              ❌ Te fazem ser mais um na multidão de desenvolvedores que só sabe
              o básico
            </li>
            <li>❌ Clones de aplicativos que não funcionam de verdade</li>
          </ul>
        </section>
        <section className="flex-1">
          <TypewriterEffectSmooth
            words={[
              {
                text: "O que as empresas procuram?",
                className:
                  "!border-b !border-primary !lg:border-b !lg:border-error !pb-2 font-semibold !text-primary",
              },
            ]}
            cursorClassName="bg-primary block h-8 mt-1 lg:mt-0 w-[4px] rounded-sm sm:h-6 xl:h-12"
          />
          <p className="mt-6">
            Saber fazer um{" "}
            <span className="text-lg font-semibold text-primary">
              CRUD é o <span className="text-xl lg:text-2xl">MÍNIMO</span>
            </span>{" "}
            que qualquer desenvolvedor deve saber! O que as empresas realmente
            procuram são pessoas que conhecem problemas reais, como:
          </p>
          <ul className="mt-4 flex flex-col gap-2 px-8">
            <li>
              ✅ Ter um sistema de autenticação completo (com login, logout,
              recuperação de senha, etc).
            </li>
            <li>
              ✅ Como disponibilizar um chat em tempo real para os clientes
              interagirem
            </li>
            <li>
              ✅ Dar uma forma de pagamento online e facilitada aos clientes
            </li>
            <li>
              ✅ Desenvolver um sistema com armazenamento de arquivos em nuvem
            </li>
          </ul>
        </section>
      </div>
      <section className="mt-16">
        <h2 className="border-b border-primary pb-2 text-2xl font-semibold">
          O que você aprenderá?
        </h2>
        <ul className="mt-6">
          <li className="flex items-center">
            <span className="text-3xl font-semibold text-primary">1.</span>
            <p className="ml-4">
              Aprender a criar aplicações completas com o uso de tecnologias
              modernas.
            </p>
          </li>
          <li className="mt-4 flex items-center">
            <span className="text-3xl font-semibold text-primary">2.</span>
            <p className="ml-4">
              Entender como funciona o mercado de trabalho e quais são as
              habilidades mais valorizadas.
            </p>
          </li>
          <li className="mt-4 flex items-center">
            <span className="text-3xl font-semibold text-primary">3.</span>
            <p className="ml-4">
              Aprender a se destacar em processos seletivos e conseguir as
              melhores vagas.
            </p>
          </li>
        </ul>
      </section>
      {/* Seção de projetos diversos utilizando o card hover do aceternity" */}
      {/* Colocar uma seção dizendo: "Constra um sistema que realmente importa para o mercado" e mostrar utilizando a animação de pc com um sistema de CRM */}
      {/* Colocar em uma seção a imagem do Jira cheia de itens */}
      {/* Mesmo com todas essas respostas (Após seção de "Essa mentoria é para você?") ainda está na dúvida? Então se liga nesse aulão que liberei gratuitamente criando um sistema autenticação completo!  */}
    </main>
  );
}
