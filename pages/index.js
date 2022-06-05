import { Layout } from "../containers"
import { AboutMe, ContactMe, Hero } from "../components";

export default function Home() {
  return (
    <Layout title="Damjan Stamenov | Front-End Developer">
      <Hero />
      <AboutMe />
      <ContactMe />
    </Layout>
  );
}