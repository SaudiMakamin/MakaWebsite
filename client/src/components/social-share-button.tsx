import { Button } from '@/components/ui/button';
import { SocialShareOptimizer } from '@/lib/social-share-optimizer';
import { Share, MessageCircle, Send, Twitter, Linkedin, Facebook } from 'lucide-react';

interface SocialShareButtonProps {
  url?: string;
  title?: string;
  className?: string;
}

export function SocialShareButton({ url, title, className }: SocialShareButtonProps) {
  const shareUrls = SocialShareOptimizer.getShareUrls(url, title);

  const handleShare = (platform: keyof typeof shareUrls) => {
    // Test OG tags before sharing
    SocialShareOptimizer.testOGTags();
    
    // Open sharing window
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('whatsapp')}
        className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
      >
        <MessageCircle className="w-4 h-4 mr-1" />
        WhatsApp
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('telegram')}
        className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
      >
        <Send className="w-4 h-4 mr-1" />
        Telegram
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('twitter')}
        className="bg-sky-50 hover:bg-sky-100 text-sky-700 border-sky-200"
      >
        <Twitter className="w-4 h-4 mr-1" />
        Twitter
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('linkedin')}
        className="bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200"
      >
        <Linkedin className="w-4 h-4 mr-1" />
        LinkedIn
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('facebook')}
        className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
      >
        <Facebook className="w-4 h-4 mr-1" />
        Facebook
      </Button>
    </div>
  );
}