import Link from "next/link";
import Logo from "./logo"
import { companyAddress } from "./companyDetails";
// import { default as CustomLink } from "@/components/elements/link";


export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-accent border-t border-slate-800/50 pt-16 pb-8 overflow-hidden">
      {/* Glassmorphic decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              {/* <div className="h-8 w-8 rounded-md bg-amber-500 flex items-center justify-center">
                <span className="font-bold text-slate-900">BM</span>
              </div> */}
              <Logo />
              <span className="text-xl font-bold text-white">Kevank NIgeria Limited</span>
            </div>

            <p className="text-slate-400">
              Professional construction, facility management, real estate, and training services with over 25 years of
              industry experience.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                {/* <MapPin className="h-5 w-5 text-amber-500 mt-0.5" /> */}
                <span className="text-slate-300">
                  {companyAddress.line1}
                  <br />
                  Building Heights, Suite 500
                  <br />
                  {companyAddress.line3}
                </span>
              </div>

              {/* <div className="flex items-center space-x-3">
                {/* <Phone className="h-5 w-5 text-amber-500" /> 
                <span className="text-slate-300">(555) 123-4567</span>
              </div> */}

              <div className="flex items-center space-x-3">
                {/* <Mail className="h-5 w-5 text-amber-500" /> */}
                <span className="text-slate-300">info@buildmaster.com</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Certifications</h4>
              <div className="flex flex-wrap gap-3">
                <div className="bg-slate-800/50 backdrop-blur-sm p-2 rounded-md flex items-center space-x-2 border border-slate-700/50">
                  {/* <Award className="h-4 w-4 text-amber-500" /> */}
                  <span className="text-xs text-slate-300">ISO Certified</span>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-2 rounded-md flex items-center space-x-2 border border-slate-700/50">
                  {/* <CheckCircle className="h-4 w-4 text-amber-500" /> */}
                  <span className="text-xs text-slate-300">LEED Certified</span>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm p-2 rounded-md flex items-center space-x-2 border border-slate-700/50">
                  {/* <Award className="h-4 w-4 text-amber-500" /> */}
                  <span className="text-xs text-slate-300">Best in Class 2023</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Commercial Construction",
                "Residential Construction",
                "Renovation & Remodeling",
                "Facility Management",
                "Property Development",
                "Real Estate Services",
                "Construction Training",
                "Project Management",
                "Interior Design",
                "Sustainable Building",
              ].map((service, index) => (
                <li key={index}>
                  <span
                    className="text-slate-400 transition-colors flex items-center group"
                  >
                    {service}
                  </span>
                </li>
              ))}
              {/* <CustomLink href={"/services"} title="All Services" /> */}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="pb-8">
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Services", "/services"],
                  ["Projects", "/projects"],
                  ["Contact", "/contact"],
                  ["Careers", "/careers"],
                  // ["FAQ", "/faq"],
                ].map(([label, url], index) => (
                  <li key={index}>
                    <Link
                      href={url}
                      className="text-slate-400 hover:text-primary transition-colors flex items-center group"
                    >
                      {/* <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" /> */}
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Business Hours</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-400">Monday - Friday:</span>
                  <span className="text-slate-300">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Saturday:</span>
                  <span className="text-slate-300">9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-400">Sunday:</span>
                  <span className="text-slate-300">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {/* Social Media */}
            {/* <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <SocialIcon network="facebook" />
                <SocialIcon network="twitter" />
                <SocialIcon network="instagram" />
                <SocialIcon network="linkedin" />
                <SocialIcon network="youtube" />
              </div>
            </div> */}


          </div>
        </div>

        <div className="relative backdrop-blur-sm bg-slate-900/30 rounded-xl p-6 border border-slate-800/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-slate-400 text-sm">© {currentYear} BuildMaster Construction. All rights reserved.</div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-start md:justify-end text-sm">
              <Link href="/privacy-policy" className="text-slate-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-slate-400 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-slate-400 hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// // Social media icon component
// function SocialIcon({ network }: { network: string }) {
//   return (
//     <a
//       href={`#${network}`}
//       className="h-10 w-10 rounded-full bg-slate-800/70 backdrop-blur-sm flex items-center justify-center border border-slate-700/50 hover:bg-amber-500/20 hover:border-amber-500/50 transition-colors group"
//       aria-label={`Visit our ${network} page`}
//     >
//       {network === "facebook" && (
//         <svg
//           className="h-5 w-5 text-slate-400 group-hover:text-primary"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//             clipRule="evenodd"
//           />
//         </svg>
//       )}
//       {network === "twitter" && (
//         <svg
//           className="h-5 w-5 text-slate-400 group-hover:text-primary"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//         </svg>
//       )}
//       {network === "instagram" && (
//         <svg
//           className="h-5 w-5 text-slate-400 group-hover:text-primary"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//             clipRule="evenodd"
//           />
//         </svg>
//       )}
//       {network === "linkedin" && (
//         <svg
//           className="h-5 w-5 text-slate-400 group-hover:text-primary"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//         </svg>
//       )}
//       {network === "youtube" && (
//         <svg
//           className="h-5 w-5 text-slate-400 group-hover:text-primary"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
//             clipRule="evenodd"
//           />
//         </svg>
//       )}
//     </a>
//   )
// }
