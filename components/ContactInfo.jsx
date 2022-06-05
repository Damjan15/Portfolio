const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
        <h2 className="mb-3">Contact Me</h2>

        <div className="w-full lg:w-2/3">
            <form className="space-y-8">
                <div className="input-field">
                    <label>Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>

                <div className="input-field">
                    <label>Email</label>
                    <input type="text" placeholder="email@example.com" />
                </div>

                <div className="input-field">
                    <label>Message</label>
                    <textarea placeholder="How can I help?" ></textarea>
                </div>

                <button className="bg-darkBlue text-white font-public uppercase text-xs py-4 px-6 leading-[14.1px] tracking-[2px] hover:bg-cyan">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default ContactInfo