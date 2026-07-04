import logo from "@/assets/presentiq-logo.jpeg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-foreground">
              <img src={logo.url} alt="PresentIQ logo" className="h-full w-full object-cover" />
            </span>
            <span className="text-xl font-bold tracking-tight text-foreground">PresentIQ</span>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Intelligent Attendance Management Platform. Designed for schools, colleges and
            universities.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            <a href="#features" className="transition-colors hover:text-foreground">Features</a>
            <a href="#dashboards" className="transition-colors hover:text-foreground">Solutions</a>
            <a href="#vision" className="transition-colors hover:text-foreground">About</a>
            <a href="#cta" className="transition-colors hover:text-foreground">Contact</a>
            <a href="#faq" className="transition-colors hover:text-foreground">Privacy Policy</a>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          Copyright © {new Date().getFullYear()} PresentIQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}