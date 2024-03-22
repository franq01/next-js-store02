
import { Hero } from "@/src/components/home/Hero"
import { Description } from "@/src/components/home/Description"
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  )
}