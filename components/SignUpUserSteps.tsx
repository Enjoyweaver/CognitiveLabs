import Link from "next/link";
import Step from "./Step";
import Code from "@/components/Code";

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Step One">
        <p>
          Sign up and join the waitlist on the Login page with your email
          address and create a new password. Finish setting up your account by
          confirming your email address through the link sent to your inbox.
        </p>
      </Step>

      <Step title="Step Two">
        <p>
          Log in to your account above and hang out in the lounge to learn more
          about the Cognitive Plan app while we continue to build the beta
          version.
        </p>
      </Step>
      <Step title="Step Three">
        <p>
          Using the knowledge you have acquired in the lounge, you can start
          thinking about your schedule and considering the different tasks you
          have on your plate. The more precise you can be, the more beneficial
          the Cognitive Plan will be for you.
        </p>
      </Step>
    </ol>
  );
}
