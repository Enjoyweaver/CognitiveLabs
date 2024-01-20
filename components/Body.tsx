export default function Header() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="font-bold text-2xl">How will this work?</h2>
      <p className="text-1.9xl !leading-tight mx-auto max-w-xl text-center">
        Soon enough, you'll be able to input your tasks and the timeframe in
        which you need them done and our Cognitive Calculator will create a
        schedule to maximize your efficiency and productivity. Follow the steps
        below to learn more, though everyone who signs up before our release
        will get the free app.
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
