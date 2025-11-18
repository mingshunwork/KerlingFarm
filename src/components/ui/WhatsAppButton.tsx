'use client';

import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink } from '@/lib/utils';
import Button from './Button';

interface WhatsAppButtonProps {
  roomName?: string;
  activityName?: string;
  message?: string;
  variant?: 'fixed' | 'inline';
  className?: string;
}

export default function WhatsAppButton({
  roomName,
  activityName,
  message,
  variant = 'inline',
  className = '',
}: WhatsAppButtonProps) {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';

  const handleClick = () => {
    const link = generateWhatsAppLink({
      phoneNumber,
      roomName,
      activityName,
      message,
    });
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'fixed') {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <Button
      variant="whatsapp"
      onClick={handleClick}
      className={className}
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Book via WhatsApp
    </Button>
  );
}
