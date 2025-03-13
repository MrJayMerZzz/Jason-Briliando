import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo Link to Home Page */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto cursor-pointer" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-600">
          <Link href="/services" className="hover:text-black transition">Our Services</Link>
          <Link href="/projects" className="hover:text-black transition">Projects</Link>
          <Link href="/about" className="hover:text-black transition">About</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
        </div>

        {/* Right-side Icon */}
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Email Logo" className="h-8 w-auto cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}