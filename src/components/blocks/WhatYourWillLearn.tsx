import { CardContainer, CardBody, CardItem } from "../ui/3d-card";
import { DemoProject } from "./DemoProject";
import Image from "next/image";

const projects = [
  {
    title: "CRM",
    description:
      "Construa projetos que possuem multiplos domínios, usando com wildcards e subdomínios.",
    image: "/images/crm.png",
  },
  {
    title: "E-commerce",
    description:
      "Aprenda a criar um e-commerce completo, com sistema de pagamentos, carrinho de compras e controle de estoque.",
    image: "/images/ecommerce.png",
  },
  {
    title: "Sistema de agendamento",
    description:
      "Entenda como criar um sistema de agendamento completo, com notificações, e integração com calendários.",
    image: "/images/agendamento.png",
  },
  {
    title: "Sistema de gestão de projetos",
    description:
      "Entenda como criar um sistema de gerenciamento de projetos completo, com times, tarefas e integrações.",
    image: "/images/projetos.png",
  },
  {
    title: "Sistema de gestão de finanças",
    description:
      "Entenda como criar um sistema de gerenciamento de finanças completo, com categorias, controle de receitas e despesas.",
    image: "/images/financas.png",
  },
  {
    title: "Dashboards complexos",
    description:
      "Aprenda a criar dashboards complexos com gráficos, tabelas, filtros interativos e com segurança de dados. ",
    image: "/images/dashboard.png",
  },
];

export default function WhatYourWillLearn() {
  return (
    <section className="mt-16">
      <DemoProject />
      <ul>
        <li className="flex items-center">
          <span className="text-3xl font-semibold text-primary">1.</span>
          <p className="ml-4 lg:text-xl">
            Aprender a criar aplicações completas com o uso de tecnologias
            modernas que realmente importam.
          </p>
        </li>
        <li className="mt-4 flex items-center">
          <span className="text-3xl font-semibold text-primary">2.</span>
          <p className="ml-4 lg:text-xl">
            Entender como funciona o mercado de trabalho e quais são as
            habilidades mais valorizadas.
          </p>
        </li>
        <li className="mt-4 flex items-center">
          <span className="text-3xl font-semibold text-primary">3.</span>
          <p className="ml-4 lg:text-xl">
            Aprender a se destacar em processos seletivos e conseguir as
            melhores vagas.
          </p>
        </li>
        <li className="mt-4 flex items-center">
          <span className="text-3xl font-semibold text-primary">4.</span>
          <p className="ml-4 lg:text-xl">
            Aprender a criar aplicações que resolvem problemas reais de
            empresas.
          </p>
        </li>
      </ul>
      <div className="mt-6 lg:mt-12">
        <p className="mb-12 text-2xl font-semibold text-primary">
          E você aprenderá isso tudo fazendo:
        </p>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <CardContainer
              key={i}
              className="w-full"
              containerClassName="w-full"
            >
              <CardBody className="group/card from-slate-600 to-neutral-400 relative h-auto  w-full rounded-xl border bg-gradient-to-r p-6">
                <CardItem
                  translateZ="50"
                  className="text-3xl font-bold text-primary"
                >
                  {project.title}
                </CardItem>

                <CardItem translateZ="100" className="mt-4 w-full">
                  <Image
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-80 w-full rounded-xl object-fill group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="mt-8">
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 text-lg text-white md:max-w-sm"
                  >
                    {project.description}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
