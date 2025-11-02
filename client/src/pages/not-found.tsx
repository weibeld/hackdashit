import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-2 border-primary/30 bg-black/80 backdrop-blur">
        <CardContent className="pt-12 pb-12 text-center space-y-6">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="h-20 w-20 text-primary animate-pulse" />
          </div>
          
          <h1 className="text-6xl font-bold font-mono text-primary tracking-wider">
            404
          </h1>
          
          <h2 className="text-2xl font-bold font-mono text-foreground uppercase tracking-wide">
            Not Found
          </h2>

          <p className="text-lg text-muted-foreground font-mono max-w-md mx-auto">
            The requested URL does not exist.
          </p>

          <p className="text-sm text-muted-foreground font-mono">
            [SYSTEM MESSAGE: Invalid route path]
          </p>

          <div className="pt-4">
            <Link href="/">
              <Button 
                data-testid="button-return-home"
                className="font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,0.7)] transition-all"
              >
                Return to HackDaShit
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
