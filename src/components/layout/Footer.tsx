import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern"; // Check path based on your setup
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-background border-t pt-16 pb-8">
      
      {/* --- Magic UI Background --- */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "absolute inset-0 h-full w-full fill-neutral-200/50 [mask-image:linear-gradient(to_top_left,white,transparent,transparent)]"
        )}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                IC
              </div>
              <span>ICONF 2026</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The premier global gathering for future technologies, innovation, and digital transformation. Join the conversation shaping tomorrow.
            </p>
            <div className="flex gap-4 pt-2">
              <SocialIcon href="#" icon={<Twitter className="h-4 w-4" />} />
              <SocialIcon href="#" icon={<Linkedin className="h-4 w-4" />} />
              <SocialIcon href="#" icon={<Facebook className="h-4 w-4" />} />
              <SocialIcon href="#" icon={<Github className="h-4 w-4" />} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About ICONF</Link></li>
              <li><Link href="/committee" className="hover:text-primary transition-colors">Organizing Committee</Link></li>
              <li><Link href="/keynote-speakers" className="hover:text-primary transition-colors">Keynote Speakers</Link></li>
              <li><Link href="/guidelines" className="hover:text-primary transition-colors">Submission Guidelines</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 3: Conference Tracks */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Top Tracks</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/tracks" className="hover:text-primary transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/tracks" className="hover:text-primary transition-colors">Cybersecurity & Privacy</Link></li>
              <li><Link href="/tracks" className="hover:text-primary transition-colors">Cloud & Edge Computing</Link></li>
              <li><Link href="/tracks" className="hover:text-primary transition-colors">IoT & Smart Systems</Link></li>
              <li><Link href="/tracks" className="hover:text-primary transition-colors">Blockchain Technology</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest calls for papers and speaker announcements.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="h-10 rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button className="h-10 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
              <Mail className="h-4 w-4" />
              <span>contact@iconf2026.org</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 ICONF. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="h-8 w-8 rounded-full border bg-background flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
    >
      {icon}
    </Link>
  );
}