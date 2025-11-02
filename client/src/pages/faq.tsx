import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, Shield, Lock } from "lucide-react";
import { Link } from "wouter";

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
            <h2 className="text-xl font-bold text-primary mb-3 flex items-start gap-2">
              <Terminal className="w-5 h-5 flex-shrink-0" />
              What does this tool do?
            </h2>
            <p className="text-foreground font-mono leading-relaxed">
              This tool allows you to automatically hack any URL or IP address. No hacking experience required!
            </p>
          </Card>

          <Card className="p-6 md:p-8 border-2">
            <h2 className="text-xl font-bold text-primary mb-3 flex items-start gap-2">
              <Lock className="w-5 h-5 flex-shrink-0" />
              How do I hack a URL or IP address?
            </h2>
            <p className="text-foreground font-mono leading-relaxed">
              Just type or paste the URL or IP address you want to hack, click the "Hack It" button, and wait. When the process completes, the URL or IP address will be hacked!
            </p>
          </Card>

          <Card className="p-6 md:p-8 border-2">
            <h2 className="text-xl font-bold text-primary mb-3 flex items-start gap-2">
              <Shield className="w-5 h-5 flex-shrink-0" />
              Is it safe?
            </h2>
            <p className="text-foreground font-mono leading-relaxed">
              Yes, the process is 100% safe. However, keep in mind that the overall safety depends on what URLs and IP addresses you hack, and what you do with them afterwards!
            </p>
          </Card>

          <div className="flex justify-center pt-6">
            <Link href="/">
              <Button 
                data-testid="button-start-hacking"
                className="font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,0.7)] transition-all px-8"
              >
                <Terminal className="w-5 h-5 mr-2" />
                Start Hacking
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
