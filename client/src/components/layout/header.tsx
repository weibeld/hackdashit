import { Terminal } from "lucide-react";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 cursor-pointer hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-primary tracking-wider">HackDaShit</span>
          </div>
        </Link>
        
        <nav>
          <Link href="/faq" data-testid="link-faq">
            <span className="text-sm font-semibold uppercase tracking-wide text-foreground hover-elevate active-elevate-2 px-4 py-2 rounded-md cursor-pointer transition-all inline-block">
              FAQ
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
