import Image from "next/image";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Meteors } from "~/components/ui/meteors";
import { DemoProject } from "~/components/blocks/DemoProject";
import WhatYourWillLearn from "~/components/blocks/WhatYourWillLearn";
import StopWastingTime from "~/components/blocks/StopWastingTime";

export default function Home() {
  return (
    <main className="m-auto max-w-[100rem] px-4 py-12">
      <Meteors number={120} />
      <section className="m-auto justify-between md+:items-center lg:flex lg:h-dvh lg:max-w-7xl">
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
            com a MENTORIA GRATUITA de um profissional dentro do mercado.
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
      <div className="flex flex-col gap-8 pt-12 lg:flex lg:flex-row lg:items-start lg:text-xl">
        <section className="flex flex-1 flex-col gap-6">
          <TypewriterEffectSmooth
            words={[
              {
                text: "O PROBLEMA dos cursos atuais",
                className:
                  "!border-b !border-error !lg:border-b !lg:border-error !pb-2 !font-semibold !text-[#ed2a3b]",
              },
            ]}
            cursorClassName="bg-error block h-8 mt-1 lg:mt-0 w-[4px] rounded-sm sm:h-6 xl:h-12"
          />
          <p>
            A maioria dos cursos disponíveis no mercado ensinam{" "}
            <span className="text-xl font-semibold text-error lg:text-2xl">
              apenas o BÁSICO{" "}
            </span>
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
        <section className="flex flex-1 flex-col gap-6">
          <TypewriterEffectSmooth
            words={[
              {
                text: "O que as empresas procuram",
                className:
                  "!border-b !border-primary !lg:border-b !lg:border-primary !pb-2 !font-semibold !text-primary",
              },
            ]}
            cursorClassName="bg-primary block h-8 mt-1 lg:mt-0 w-[4px] rounded-sm sm:h-6 xl:h-12"
          />
          <p className="relative">
            Saber fazer um{" "}
            <span className="text-lg font-semibold text-primary">
              CRUD é o <span className="text-xl lg:text-2xl">MÍNIMO</span>
            </span>{" "}
            que qualquer desenvolvedor deve saber! O que as empresas realmente
            procuram são pessoas que conhecem problemas reais, como:
          </p>
          <ul className="flex flex-col gap-2 px-8">
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
              ✅ Adicionar uma funcionalidade armazenamento de arquivos em nuvem
              com segurança
            </li>
            <li>✅ Formas de acelerar o desenvolvimento de aplicações</li>
            <li>✅ Desenvolvedores que não fiquem presos a stack</li>
          </ul>
        </section>
      </div>
      <WhatYourWillLearn />
      <footer className="flex flex-col">
        <StopWastingTime />
        <Link
          href="https://calendly.com/mateusppa10/mentoria"
          target="_blank"
          className="mt-6 animate-bounce rounded-full bg-primary px-7 py-4 text-center text-xl font-bold text-black transition-colors hover:bg-accent hover:text-base hover:text-xl lg:w-full"
        >
          Faça seu agendamento gratuito
        </Link>
      </footer>
      {/* Seção de projetos diversos utilizando o card hover do aceternity" */}
      {/* Colocar uma seção dizendo: "Constra um sistema que realmente importa para o mercado" e mostrar utilizando a animação de pc com um sistema de CRM */}
      {/* Colocar em uma seção a imagem do Jira cheia de itens */}
      {/* Mesmo com todas essas respostas (Após seção de "Essa mentoria é para você?") ainda está na dúvida? Então se liga nesse aulão que liberei gratuitamente criando um sistema autenticação completo!  */}
    </main>
  );
}
