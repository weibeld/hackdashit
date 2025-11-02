import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, Terminal, Lock, Database, Server, CheckCircle2 } from "lucide-react";

const hackingStages = [
  { progress: 0, message: "Initializing scan..." },
  { progress: 15, message: "Scanning ports..." },
  { progress: 30, message: "Bypassing firewall..." },
  { progress: 45, message: "Cracking encryption..." },
  { progress: 60, message: "Accessing mainframe..." },
  { progress: 75, message: "Downloading data..." },
  { progress: 90, message: "Clearing traces..." },
  { progress: 100, message: "Finalizing hack..." },
];

export default function Home() {
  const [url, setUrl] = useState("");
  const [isHacking, setIsHacking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hackedUrl, setHackedUrl] = useState("");

  useEffect(() => {
    if (!isHacking || isComplete) return;

    const duration = 6000;
    const intervalTime = 50;
    const totalSteps = duration / intervalTime;
    const progressPerStep = 100 / totalSteps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = Math.min(prev + progressPerStep, 100);
        
        const stage = hackingStages.findIndex(
          (s, i) => newProgress >= s.progress && 
          (i === hackingStages.length - 1 || newProgress < hackingStages[i + 1].progress)
        );
        
        if (stage !== currentStage) {
          setCurrentStage(stage);
        }

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setIsHacking(false);
          }, 300);
        }

        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isHacking, isComplete, currentStage]);

  const handleHack = () => {
    if (!url.trim()) return;
    
    setHackedUrl(url);
    setIsHacking(true);
    setIsComplete(false);
    setProgress(0);
    setCurrentStage(0);
  };

  const handleReset = () => {
    setUrl("");
    setIsComplete(false);
    setProgress(0);
    setCurrentStage(0);
    setHackedUrl("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isHacking && !isComplete) {
      handleHack();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(var(--primary)) 2px,
            hsl(var(--primary)) 4px
          )`
        }} />
      </div>

      <Card className="w-full max-width-[600px] max-w-[600px] p-8 md:p-12 relative overflow-visible border-2 shadow-[0_0_30px_rgba(34,119,105,0.3)]">
        <div className="flex items-center justify-center mb-8 gap-3">
          <Terminal className="w-8 h-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary">
            HackDaShit
          </h1>
        </div>

        {!isComplete ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="url-input" className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Enter the URL to hack
              </label>
              <Input
                id="url-input"
                data-testid="input-url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isHacking}
                className="font-mono text-base h-12 border-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all"
              />
            </div>

            <Button
              data-testid="button-hack"
              onClick={handleHack}
              disabled={isHacking || !url.trim()}
              className="w-full h-12 text-lg font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(34,119,105,0.5)] hover:shadow-[0_0_30px_rgba(34,119,105,0.7)] transition-all"
            >
              {isHacking ? (
                <>
                  <Lock className="w-5 h-5 mr-2 animate-pulse" />
                  Hacking in Progress...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5 mr-2" />
                  Hack It
                </>
              )}
            </Button>

            {isHacking && (
              <div className="space-y-4 pt-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-sm text-primary font-mono">
                  <Server className="w-4 h-4 animate-pulse" />
                  <span data-testid="text-status" className="animate-pulse">
                    Hacking...
                  </span>
                </div>

                <div className="space-y-2">
                  <Progress 
                    value={progress} 
                    className="h-3 bg-muted border border-primary/30"
                    data-testid="progress-bar"
                  />
                  <div className="flex justify-between text-xs font-mono text-muted-foreground">
                    <span>Progress</span>
                    <span data-testid="text-progress">{Math.round(progress)}%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6 text-center animate-in zoom-in duration-500">
            <div className="flex justify-center">
              <CheckCircle2 className="w-20 h-20 text-primary animate-pulse" />
            </div>
            
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold uppercase text-primary tracking-wide" data-testid="text-success">
                Hack Successful!
              </h2>
              <p className="text-lg text-foreground font-mono">
                Congratulations, the URL you entered has been hacked
              </p>
              <div className="pt-2 pb-4">
                <div className="inline-block bg-primary/10 border border-primary/30 rounded-md px-4 py-2">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Target</p>
                  <p className="text-base font-mono text-primary break-all" data-testid="text-hacked-url">
                    {hackedUrl}
                  </p>
                </div>
              </div>
            </div>

            <Button
              data-testid="button-reset"
              onClick={handleReset}
              variant="outline"
              className="w-full h-12 font-bold uppercase tracking-wider border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Hack Another URL
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
