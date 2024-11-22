// src/components/Footer.tsx
import Link from "next/link";
import { X, Linkedin, Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A202C] text-gold-100 py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Quick Links
        <div className="">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <nav className="space-y-2 flex">
            <Link href="/about" className="p-2 m-2 transition">
              About Us
            </Link>
            <Link href="/contact" className="p-2 m-2 transition">
              Contact
            </Link>
            <Link href="/privacy" className="p-2 m-2 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="p-2 m-2 transition">
              Terms of Service
            </Link>
          </nav>
        </div> */}

        {/* Social Media */}
        <div className="mx-5">
          <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition"
            >
              <X />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition"
            >
              <Linkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 transition"
            >
              <Instagram />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-gold-100 opacity-75">
            © {currentYear} BlinkVault. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
