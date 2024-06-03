import { Header } from "~/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark:bg-base-dark bg-base px-4 py-14 text-white">
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
      <section className="mt-12">
        <h2 className="border-b border-primary pb-2 text-2xl font-semibold">
          O PROBLEMA dos cursos atuais
        </h2>
        <p className="mt-6">
          A maioria dos cursos disponíveis no mercado ensinam apenas o básico
          das tecnologias, sem ensinar como aplicar esses conhecimentos na
          prática. Focando apenas em criação de CRUDS básicos.{" "}
          <span className="font-semibold text-primary">
            (Estou falando com você, projeto de pokemon!)
          </span>
        </p>

        <p className="mt-6">
          Além disso, a maioria dos cursos não ensinam como se destacar no
          mercado de trabalho e conseguir as melhores vagas.
        </p>
      </section>
      <section>
        <h2 className="border-b border-primary pb-2 text-2xl font-semibold">
          O que as empresas realmente procuram
        </h2>
        <p className="mt-6">
          Saber fazer um{" "}
          <span className="text-lg font-semibold text-primary">
            CRUD básico é o mínimo
          </span>{" "}
          que qualquer desenvolvedor deve saber, ponto! Mas o que as empresas
          realmente procuram são desenvolvedores que tenham experiência em criar
          soluções específicas para problemas reais. Que tipo de problemas
          estamos falando e como seria isso?
        </p>
        <p className="py-4">
          <span className="text-lg font-semibold text-primary">
            Vamos falar sobre isso!
          </span>
        </p>
        <p className="py-4">
          Imagine que você é um desenvolvedor de uma empresa de delivery e
          precisa criar um sistema de entregas que otimize a rota dos
          entregadores, como você faria isso?
        </p>
        <p>
          Ou então, imagine que você é um desenvolvedor de um e-commerce e
          precisa criar um sistema de recomendação de produtos, como você faria
          isso?
        </p>
        <p>
          <span className="mt-4 block text-lg font-semibold text-primary">
            Que tal mais exemplos?
          </span>
          <ul className="mt-4 flex list-disc flex-col gap-2 px-8">
            <li>
              Desenvolver um sistema de autenticação completo (com login,
              logout, recuperação de senha, etc).
            </li>
            <li>
              Criar um sistema de chat em tempo real (como o do Facebook ou
              Whatsapp).
            </li>
            <li>
              Desenvolver um sistema de pagamento online (como o do Mercado
              Livre ou PicPay).
            </li>
            <li>
              Desenvolver um sistema com armazenamento de arquivos em nuvem
            </li>
          </ul>
        </p>
      </section>
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
      {/* Colocar em uma seção a imagem do Jira cheia de itens */}
      {/* Mesmo com todas essas respostas (Após seção de "Essa mentoria é para você?") ainda está na dúvida? Então se liga nesse aulão que liberei gratuitamente criando um sistema autenticação completo!  */}
    </main>
  );
}
