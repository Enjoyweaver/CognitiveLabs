import Link from "next/link";
import Step from "./Step";
import Code from "@/components/Code";

export default function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Step One">
        <p>
          Sign up and join the waitlist on the Login page with your email
          address and create a new password. You can finish setting up your
          account by confirming your email address.
        </p>
      </Step>

      <Step title="Step Two">
        <p>
          Log back in through the Login button and access the wait-room where
          you can learn more about Cognitive Plan while we continue to build the
          beta version.
        </p>
      </Step>
      <Step title="Step Three">
        <p>
          Start thinking about your schedule and how you can identify the
          different tasks that you have. The more precise in the tasks that you
          can be, the more beneficial the Cognitive Plan will be for you.
        </p>
      </Step>
    </ol>
  );
}
