import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 p-4 mt-auto">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://www.instagram.com/jas_brill/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} className="hover:opacity-75" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/linkedin.png" alt="LinkedIn" width={24} height={24} className="hover:opacity-75" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:jasonbrilliando.architecture@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/mail.png" alt="Mail" width={24} height={24} className="hover:opacity-75" />
            <span className="sr-only">Mail</span>
          </Link>
          <Link href="https://wa.me/628159788788" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/whatsapp.png" alt="WhatsApp" width={24} height={24} className="hover:opacity-75" />
            <span className="sr-only">WhatsApp</span>
          </Link>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Briliando Architect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}