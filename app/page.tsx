import InfiniteLogoScroll from "./components/InfiniteLogoScroll"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-4xl font-bold">Infinite Logo Animation</h1>
      <InfiniteLogoScroll />
    </main>
  );
}
