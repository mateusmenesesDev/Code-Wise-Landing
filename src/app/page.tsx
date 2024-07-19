import Hero from '~/components/blocks/Hero';
import Container from '~/components/ui/Container';

export default function Home() {
  return (
    <main>
      <section className='mt-20'>
        <Container>
          <Hero />
        </Container>
      </section>

    </main>
  );
}
