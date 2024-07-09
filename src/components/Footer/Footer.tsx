import { Github, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="h-[8vh] bg-muted">
      <div className="flex h-full px-6 sm:px-8">
        <div className="flex w-full flex-row items-center justify-between  border-t border-t-muted-foreground px-2 mb-4">
          <div className="text-left">
            <p className="text-base">© 2024 Luna. All rights reserved.</p>
          </div>
          <div className="flex gap-3">
            <Link to="https://github.com/Chathura-Ranasinghe" target="_" className="transition-colors" >
              <Github strokeWidth={0} className="h-5 w-5 fill-foreground hover:fill-muted-foreground transition ease-in-out duration-300" />
            </Link>
            <Link to="https://www.linkedin.com/in/chathura-ranasinghe-925952222" target="_" className=" transition-colors">
              <Linkedin  strokeWidth={0} className="h-5 w-5 fill-foreground hover:fill-muted-foreground transition ease-in-out duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}