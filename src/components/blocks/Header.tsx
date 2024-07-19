'use client';

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const menuLinks = [
  { title: "The Mentorship", link: "mentorship" },
  { title: "Our Projects", link: "projects" },
  { title: "The Menthor", link: "menthor" },
  { title: "Contact Us", link: "contactus" },
];

export function Header() {
  return (
    <header className='py-6 relative z-50'>
      <Container className='flex gap-4 justify-between items-center'>
        <span className='flex-1 font-semibold'>Mentoria fullstack</span>
        <nav className='hidden lg:block'>
          <ul className='flex gap-4'>
            {menuLinks.map((link) => (
              <li key={link.link}>
                <Link href={`/${link.link}`} className='font-medium hover:opacity-70 transition-all'>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex-1 flex justify-end'>
          <Button>Schedule my mentorship</Button>
        </div>
      </Container>
    </header>
  );
}
