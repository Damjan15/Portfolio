import { Layout } from "../containers"
import { AboutMe, Hero } from "../components";

export default function Home() {
  return (
    <Layout title="Damjan Stamenov | Front-End Developer">
      <Hero />
      <AboutMe />
    </Layout>
  );
}