import { GetInTouch, ContactInfo } from "../components";
import { Layout } from "../containers";

export default function Contact() {
  return (
    <Layout title="Contact Me">
      <div className="space-y-8 py-8 md:space-y-16">
        <GetInTouch />
        <ContactInfo />
      </div>
    </Layout>
  );
}
