'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { getNavigationItems } from '@/lib/data';
import Logo from '@/components/shared/Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigation = getNavigationItems();
  const pathname = usePathname();

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-farm-green-100/50'
            : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="transition-transform duration-300 hover:scale-105 active:scale-95"
              aria-label="Kerling Farm Home"
            >
              <Logo size="md" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'text-farm-green-700 bg-gradient-to-r from-farm-green-50 to-farm-sage-50 shadow-sm'
                        : 'text-gray-700 hover:text-farm-green-700 hover:bg-farm-green-50/50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-farm-green-500 to-farm-green-600 shadow-sm shadow-farm-green-500/50" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 transition-all duration-300 hover:bg-farm-green-50 hover:text-farm-green-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-farm-green-500 focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl lg:hidden animate-slide-in-right">
            <div className="flex h-full flex-col">
              {/* Mobile Header */}
              <div className="flex items-center justify-between border-b border-gray-200 p-6">
                <Logo size="sm" />
                <button
                  type="button"
                  className="rounded-xl p-2 text-gray-700 transition-all duration-300 hover:bg-farm-green-50 hover:text-farm-green-700 hover:rotate-90 active:scale-95"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <nav className="space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded-xl px-5 py-4 text-base font-semibold transition-all duration-300 animate-fade-in-up ${
                          isActive
                            ? 'bg-gradient-to-r from-farm-green-600 to-farm-green-700 text-white shadow-lg shadow-farm-green-600/30'
                            : 'text-gray-700 hover:bg-farm-green-50 hover:text-farm-green-700 hover:translate-x-2'
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Footer */}
              <div className="border-t border-gray-200 p-6">
                <p className="text-center text-sm text-gray-600">
                  Kerling Farm
                  <br />
                  <span className="text-xs text-gray-500">Since 1952</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
