// Shadcn
import { Separator } from "@/components/ui/separator"

// Custom components
import AnimatedBlocks from './presentation.jsx'
import Experience from './experience.jsx'
import Technologie from "./technologie.jsx"
import ProjectsShowcase from "./showcaseProjetcs.jsx"

function HomePage() {
  return (
    <div>
      <AnimatedBlocks />
      <Experience />
      <Technologie />
      <ProjectsShowcase />
    </div>
  )
}

export default HomePage
