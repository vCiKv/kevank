"use client"
import Input, { Textarea } from "@/components/elements/input";
import { SectionTitle } from "@/components/elements/title";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function MapLocation() {
  return (
    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl mb-16">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7462606519114!2d-122.41941638468173!3d37.77492997975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858093ebe1a3f3%3A0x3c5a2a8a8d7f3e8a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Company Location"
      />
    </div>
  )
}
function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="relative backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 shadow-lg border border-slate-800/20 h-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-800/20 rounded-3xl -z-10" />
        {/* <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" /> */}
        <h3 className="text-2xl font-bold text-slate-200 mb-2">Message Sent!</h3>
        <p className="text-slate-400 text-center mb-6">
          Thank you for reaching out. We{"'"}ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          // variant="outline"
          className={twMerge(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            "h-10 px-4 py-2",
            "backdrop-blur-sm bg-slate-800/30 border border-slate-700/40 text-white"
          )}
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="relative backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 shadow-lg border border-slate-800/20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-800/20 rounded-3xl -z-10" />
      <h2 className="text-2xl font-bold text-slate-200 mb-6">Send Us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            id="name"
            label="name"
            placeholder="Your name"
            required
            className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/40 focus:border-slate-600/60 h-12"
          />

          <Input
            id="email"
            label="email"
            type="email"
            placeholder="your.email@example.com"
            required
            className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/40 focus:border-slate-600/60 h-12"
          />
        </div>


        <Input
          id="phone"
          label="phone"
          type="tel"
          placeholder="(123) 456-7890"
          className="backdrop-blur-sm bg-slate-800/30 border border-slate-700/40 focus:border-slate-600/60 h-12"
        />

        <Textarea
          id="message"
          label="message"
          placeholder="Tell us about your project or inquiry..."
          required
          className="min-h-[120px] backdrop-blur-sm bg-slate-800/30 border border-slate-700/40 focus:border-slate-600/60"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary/60 to-primary/80 hover:from-primary/80 hover:to-primary/90 text-white font-medium py-3 h-12 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}
function ContactInfo() {
  return (
    <div className="relative backdrop-blur-md bg-slate-900/40 rounded-3xl p-8 shadow-lg border border-slate-800/20 h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-800/20 rounded-3xl -z-10" />

      <h2 className="text-2xl font-bold text-slate-200 mb-6">Contact Information</h2>
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="bg-amber-900/30 p-3 rounded-full">
              {/* <MapPin className="h-6 w-6 text-primary" /> */}
            </div>
            <div>
              <h3 className="font-medium text-slate-200">Our Location</h3>
              <p className="text-slate-400 mt-1">
                123 Construction Avenue
                <br />
                Building Heights, Suite 500
                <br />
                San Francisco, CA 94103
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-amber-900/30 p-3 rounded-full">
              {/* <Phone className="h-6 w-6 text-primary" /> */}
            </div>
            <div>
              <h3 className="font-medium text-slate-200">Phone</h3>
              <p className="text-slate-400 mt-1">
                Main: (555) 123-4567
                <br />
                Support: (555) 765-4321
                <br />
                Fax: (555) 987-6543
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-amber-900/30 p-3 rounded-full">
              {/* <Mail className="h-6 w-6 text-primary" /> */}
            </div>
            <div>
              <h3 className="font-medium text-slate-200">Email</h3>
              <p className="text-slate-400 mt-1">
                info@buildmaster.com
                <br />
                support@buildmaster.com
                <br />
                careers@buildmaster.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-amber-900/30 p-3 rounded-full">
              {/* <Clock className="h-6 w-6 text-primary" /> */}
            </div>
            <div>
              <h3 className="font-medium text-slate-200">Business Hours</h3>
              <p className="text-slate-400 mt-1">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-amber-900/30 p-3 rounded-full">
            {/* <Globe className="h-6 w-6 text-primary" /> */}
          </div>
          <div>
            <h3 className="font-medium text-slate-200">Social Media</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <main>
      <section className="container mx-auto my-36">
        <SectionTitle title={"Contact Us"} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>
        <MapLocation />
      </section>
    </main>
  );
}
