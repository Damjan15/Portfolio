import { useForm } from '@formspree/react';

const ContactInfo = () => {
  const [ state, handleSubmit ] = useForm("mbjwblzq")

  return (
    <div className="flex flex-col md:flex-row md:justify-between">
        <h2 className="mb-3">Contact Me</h2>

        <div className="w-full lg:w-2/3">
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="John Smith" />
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="email@example.com" />
                </div>

                <div className="input-field">
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="How can I help?" id="message" name="message" />
                </div>

                <button className="bg-darkBlue text-white font-public uppercase text-xs py-4 px-6 leading-[14.1px] tracking-[2px] hover:bg-cyan" type="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default ContactInfo