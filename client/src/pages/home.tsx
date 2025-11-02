import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import {
  Shield,
  Terminal,
  Lock,
  Database,
  Server,
  CheckCircle2,
} from "lucide-react";

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

const isValidUrl = (urlString: string): boolean => {
  if (!urlString.trim()) return false;
  try {
    new URL(urlString);
    return true;
  } catch {
    return false;
  }
};

const isValidIp = (ipString: string): boolean => {
  if (!ipString.trim()) return false;
  // IPv4 pattern
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  // IPv6 pattern (simplified)
  const ipv6Pattern = /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i;

  if (ipv4Pattern.test(ipString)) {
    const parts = ipString.split(".");
    return parts.every((part) => {
      const num = parseInt(part, 10);
      return num >= 0 && num <= 255;
    });
  }

  return ipv6Pattern.test(ipString);
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("url");
  const [url, setUrl] = useState("");
  const [ip, setIp] = useState("");
  const [isHacking, setIsHacking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hackedTarget, setHackedTarget] = useState("");
  const [targetType, setTargetType] = useState<"url" | "ip">("url");
  const [showValidationError, setShowValidationError] = useState(false);

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
          (s, i) =>
            newProgress >= s.progress &&
            (i === hackingStages.length - 1 ||
              newProgress < hackingStages[i + 1].progress),
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
    const target = activeTab === "url" ? url : ip;
    const isValid = activeTab === "url" ? isValidUrl(url) : isValidIp(ip);

    if (!isValid) {
      setShowValidationError(true);
      return;
    }

    setShowValidationError(false);
    setHackedTarget(target);
    setTargetType(activeTab as "url" | "ip");
    setIsHacking(true);
    setIsComplete(false);
    setProgress(0);
    setCurrentStage(0);
  };

  const handleReset = () => {
    setUrl("");
    setIp("");
    setIsComplete(false);
    setProgress(0);
    setCurrentStage(0);
    setHackedTarget("");
    setShowValidationError(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isHacking && !isComplete) {
      handleHack();
    }
  };

  const handleInputChange = (value: string, type: "url" | "ip") => {
    if (type === "url") {
      setUrl(value);
    } else {
      setIp(value);
    }
    setShowValidationError(false);
  };

  const currentInput = activeTab === "url" ? url : ip;
  const isInputEmpty = !currentInput.trim();

  return (
    <div className="flex-1 flex items-center justify-center bg-background p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(var(--primary)) 2px,
            hsl(var(--primary)) 4px
          )`,
          }}
        />
      </div>

      <div className="w-full max-w-[600px] flex flex-col items-center">
        <Card className="w-full p-8 md:p-12 mb-16 relative overflow-visible border-2 shadow-[0_0_30px_rgba(0,255,0,0.3)]">
        <div className="flex items-center justify-center mb-8 gap-3">
          <Terminal className="w-8 h-8 text-primary" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider uppercase text-primary">
            HackDaShit
          </h1>
        </div>

        {!isComplete ? (
          <div className="space-y-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger
                  value="url"
                  data-testid="tab-url"
                  disabled={isHacking}
                  className="font-bold data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  URL
                </TabsTrigger>
                <TabsTrigger
                  value="ip"
                  data-testid="tab-ip"
                  disabled={isHacking}
                  className="font-bold data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  IP Address
                </TabsTrigger>
              </TabsList>

              <TabsContent value="url" className="space-y-2">
                <label
                  htmlFor="url-input"
                  className="text-sm font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  Enter the URL you want to hack:
                </label>
                <Input
                  id="url-input"
                  data-testid="input-url"
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => handleInputChange(e.target.value, "url")}
                  onKeyPress={handleKeyPress}
                  disabled={isHacking}
                  className="font-mono font-bold text-base h-12 border-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all"
                />
              </TabsContent>

              <TabsContent value="ip" className="space-y-2">
                <label
                  htmlFor="ip-input"
                  className="text-sm font-semibold uppercase tracking-wide text-muted-foreground"
                >
                  Enter the IP address you want to hack:
                </label>
                <Input
                  id="ip-input"
                  data-testid="input-ip"
                  type="text"
                  placeholder="192.168.1.1"
                  value={ip}
                  onChange={(e) => handleInputChange(e.target.value, "ip")}
                  onKeyPress={handleKeyPress}
                  disabled={isHacking}
                  className="font-mono font-bold text-base h-12 border-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary transition-all"
                />
              </TabsContent>
            </Tabs>

            {showValidationError && (
              <div
                className="border-2 border-destructive p-4 rounded-md bg-destructive/10 text-sm text-destructive font-mono font-bold animate-in fade-in duration-200"
                data-testid="error-validation"
              >
                That's not a valid {activeTab === "url" ? "URL" : "IP address"}.
                Try again ;(
              </div>
            )}

            <Button
              data-testid="button-hack"
              onClick={handleHack}
              disabled={isHacking || isInputEmpty}
              className="w-full h-12 text-lg font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,0.7)] transition-all disabled:opacity-100 disabled:brightness-100 mt-6"
            >
              {isHacking ? (
                <>
                  <Lock className="w-5 h-5 mr-2 animate-pulse" />
                  Hacking the {targetType === "url" ? "URL" : "IP address"}...
                </>
              ) : (
                <>
                  <Terminal className="w-5 h-5 mr-2" />
                  Hack It
                </>
              )}
            </Button>

            {isHacking && (
              <div className="space-y-4 pt-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-sm text-primary font-mono">
                  <Server className="w-4 h-4 animate-pulse" />
                  <span data-testid="text-status" className="animate-pulse">
                    Hacking <span className="font-bold">{hackedTarget}</span>...
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
                    <span data-testid="text-progress">
                      {Math.round(progress)}%
                    </span>
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
              <h2
                className="text-2xl md:text-3xl font-bold uppercase text-primary tracking-wide"
                data-testid="text-success"
              >
                Congratulations!
              </h2>
              <p className="text-lg text-foreground font-mono">
                The {targetType === "url" ? "URL" : "IP address"}{" "}
                {targetType === "url" ? (
                  <a
                    href={hackedTarget}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary break-all font-bold hover:underline"
                    data-testid="text-hacked-url"
                  >
                    {hackedTarget}
                  </a>
                ) : (
                  <span
                    className="text-primary break-all font-bold"
                    data-testid="text-hacked-url"
                  >
                    {hackedTarget}
                  </span>
                )}{" "}
                has been hacked.
              </p>
              <p className="text-base text-muted-foreground font-mono font-bold pt-2">
                You know what to do now, don't you? ;)
              </p>
            </div>

            <Button
              data-testid="button-reset"
              onClick={handleReset}
              className="w-full h-12 font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,0,0.7)] transition-all mt-8"
            >
              <Terminal className="w-5 h-5 mr-2" />
              Hack Another {targetType === "url" ? "URL" : "IP Address"}
            </Button>
          </div>
        )}
        </Card>
        
        <p className="text-center text-sm text-muted-foreground font-mono">
          Read the <Link href="/faq" className="font-bold hover:text-primary transition-colors">FAQ</Link> for instructions
        </p>
      </div>
    </div>
  );
}
