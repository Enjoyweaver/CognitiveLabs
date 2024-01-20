export default function Header() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="font-bold text-2xl">Why the Cognitive Plan?</h2>
      <p className="text-1.9xl !leading-tight mx-auto max-w-xl text-center">
        Timing consequences.{" "}
        <a
          href="https://www.apa.org/monitor/2018/06/good-timing"
          target="_blank"
          rel="noreferrer"
        >
          “You are way better off doing difficult mental chores at a time
          consistent with your chronotype,"
        </a>{" "}
        says Lynn Hasher, PhD, a professor of psychology at the University of
        Toronto who studies circadian patterns and attentional processes. Not
        utilizing your chronotype to your advantage can lead to a decrease in
        productivity and efficiency.
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
