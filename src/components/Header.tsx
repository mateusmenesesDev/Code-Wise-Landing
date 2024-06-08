import Link from "next/link";

const menuLinks = [
  { title: "A Verdade sobre os Cursos Atuais", link: "courses" },
  { title: "O que as empresas realmente precisam", link: "companies" },
  { title: "O que você receberá nessa mentoria", link: "mentoring" },
  { title: "Ainda está na dúvida?", link: "doubts" },
];

export function Header() {
  return (
    <header className="relative z-50">
      <nav className="fixed top-0 flex w-full items-center justify-between bg-primary px-4 py-3 text-black lg:px-24 lg:py-4">
        <h1 className="w-full text-lg font-semibold lg:text-xl">
          Mentoria gratuita!
        </h1>
        <div className="flex w-full justify-end">
          <Link
            href="https://calendly.com/mateusppa10/mentoria"
            target="_blank"
            className="rounded-full bg-accent p-2 text-base font-semibold transition-all hover:bg-secondary hover:text-white lg:px-4 lg:text-xl"
          >
            Agende seu horário
          </Link>
        </div>
      </nav>
    </header>
  );
}
