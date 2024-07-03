import { Facebook, Github, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="h-24 bg-muted">
      <div className="flex h-full px-6 sm:px-8">
        <div className="flex w-full flex-row items-center justify-between  border-t border-t-muted-foreground px-2">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-base">© 2024 Luna. All rights reserved.</p>
          </div>
          <div className="flex gap-3">
            <Link to="#" className="hover:text-muted-foreground transition-colors" >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link to="#" className="hover:text-muted-foreground transition-colors" >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link to="#" className="hover:text-muted-foreground transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}