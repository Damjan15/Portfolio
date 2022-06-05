import { SecondaryButton } from "./buttons"

const ContactMe = () => {
  return (
    <div className="flex flex-col items-center py-12 md:flex-row md:justify-between">
        <div className="text-center mb-8 md:mb-0 md:max-w-lg md:text-left">
            <h2>Interested in doing a project together?</h2>
        </div>

        <div>
            <SecondaryButton>Contact Me</SecondaryButton>
        </div>
    </div>
  )
}

export default ContactMe