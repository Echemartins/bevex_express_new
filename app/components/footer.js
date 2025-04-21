import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Phone,
    Mail,
    MessageCircle,
  } from "lucide-react";

  import { Button } from "@/app/components/ui/button";
  import { ClipLoader } from "react-spinners";
  
  import { FaWhatsapp } from "react-icons/fa";
  
  const Footer = ({ handleCalendlyClick, loading })=> {
    return (
      <footer id="contact" className="bg-blue-900 text-white pt-12 pb-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Let's Talk</h2>
            <p className="flex items-center justify-center md:justify-start gap-2 text-blue-200">
              <Phone size={18} /> (212) 555-1234
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-blue-200 mt-2">
              <Mail size={18} /> info@bevexpress.com
            </p>
          </div>
  
          {/* CTA */}
          <div className="flex flex-col items-center justify-center">
            <Button
              onClick={handleCalendlyClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2"
            >
              {loading ? <ClipLoader size={20} color="#fff" /> : "Book a Call Now"}
            </Button>
            <div className="flex gap-4 mt-6 text-blue-200">
              <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://wa.me/12125551234" target="_blank" aria-label="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
  
          {/* Footer Links */}
          <div className="text-sm text-blue-200 flex flex-col gap-2 items-center md:items-end">
            <p>&copy; {new Date().getFullYear()} BevEX Express. All rights reserved.</p>
            <p>
              <a href="/privacy" className="underline hover:text-white">Privacy Policy</a> |{" "}
              <a href="/terms" className="underline hover:text-white">Terms & Conditions</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer
  