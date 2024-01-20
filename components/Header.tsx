export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl !leading-tight mx-auto max-w-xl text-center">
        Welcome to Cognitive Labs
      </p>
      <p className="text-2xl !leading-tight mx-auto max-w-xl text-center">
        home of the Cognitive Planner
      </p>
      <p className="text-2xl !leading-tight mx-auto max-w-xl text-center">
        a scheduling app built with{" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase
        </a>{" "}
        and{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Next.js
        </a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
