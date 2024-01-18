export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <p className="text-2xl !leading-tight mx-auto max-w-xl text-center">
        How does this work? It's really simple after all; you input your tasks
        and the timeframe in which you need them done, we analyze them in our
        Cognitive Calculator, and then propose a schedule that will maximize
        efficiency and productivity for your timeframe. Follow the steps below
        to learn more.
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
