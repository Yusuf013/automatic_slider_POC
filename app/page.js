import { InfiniteLogoScroll } from '../app/components/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-4xl font-bold">We worked with</h1>
      <InfiniteLogoScroll />
    </main>
  )
}

