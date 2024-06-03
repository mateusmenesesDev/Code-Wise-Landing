const menuLinks = [
  { title: "A Verdade sobre os Cursos Atuais", link: "courses" },
  { title: "O que as empresas realmente precisam", link: "companies" },
  { title: "O que você receberá nessa mentoria", link: "mentoring" },
  { title: "Ainda está na dúvida?", link: "doubts" },
];

export function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <h1 className="w-full text-lg font-semibold">Mentoria gratuita!</h1>
        <ul className="hidden lg:flex">
          {menuLinks.map((link) => (
            <li key={link.link}>{link.title}</li>
          ))}
        </ul>
        <div className="flex w-full justify-end">
          <button className="rounded-full bg-primary p-3 text-base">
            Agende gratuitamente
          </button>
        </div>
      </nav>
    </header>
  );
}
