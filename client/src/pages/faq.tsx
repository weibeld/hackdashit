import { Card } from "@/components/ui/card";
import { Terminal, Shield, Lock } from "lucide-react";

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-8 h-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-primary tracking-wider">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="space-y-6">
          <Card className="p-6 md:p-8 border-2">
            <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              What does HackDaShit do?
            </h2>
            <p className="text-foreground font-mono leading-relaxed">
              HackDaShit is a fun, interactive web application that simulates the experience of "hacking" arbitrary URLs and IP addresses. 
              Enter any website URL or IP address, click the "Hack It" button, and watch as our simulated system appears to breach security protocols 
              with an animated progress bar and terminal-style interface.
            </p>
          </Card>

          <Card className="p-6 md:p-8 border-2">
            <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Is this real hacking?
            </h2>
            <p className="text-foreground font-mono leading-relaxed">
              Absolutely not! This is purely a simulation for entertainment purposes. No actual hacking, security breaching, or unauthorized access 
              occurs. The application simply displays a fun animation and doesn't interact with the entered URLs or IP addresses in any way. 
              It's completely safe and legal.
            </p>
          </Card>

          <Card className="p-6 md:p-8 border-2">
            <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              What can I hack?
            </h2>
            <p className="text-foreground font-mono leading-relaxed">
              You can enter any valid URL (like https://example.com) or IP address (like 192.168.1.1) into the simulator. 
              The app validates the format to ensure you've entered a proper URL or IP address, but remember - nothing is actually being hacked. 
              It's all just for fun!
            </p>
          </Card>

          <Card className="p-6 md:p-8 border-2">
            <h2 className="text-xl font-bold text-primary mb-3">
              How does it work?
            </h2>
            <p className="text-foreground font-mono leading-relaxed">
              After entering a valid URL or IP address and clicking "Hack It", you'll see an animated progress bar with a terminal-inspired 
              interface that creates the illusion of a hacking process. Once complete, you'll receive a congratulatory message. 
              The entire experience is designed to be entertaining and give you a taste of what hacking looks like in movies and TV shows.
            </p>
          </Card>

          <Card className="p-6 md:p-8 border-2">
            <h2 className="text-xl font-bold text-primary mb-3">
              Is my data safe?
            </h2>
            <p className="text-foreground font-mono leading-relaxed">
              Yes! The URLs and IP addresses you enter are only used for display purposes within your browser. 
              No data is sent to any servers, stored, or used for any other purpose. Everything happens locally in your browser.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
