export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} HackDaShit. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            For entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
