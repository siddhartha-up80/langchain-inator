import { H1 } from "@/components/ui/H1";
import { Metadata } from "next";
import Image from "next/image";
import heinz from "@/assets/heinz.png";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "AI powered Inators",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-1">
        <div className="space-y-3">
          <H1 className="text-center sm:text-center">
            Welcome to Inator Collections{" "}
          </H1>
          <p className="text-center sm:text-start">
            Checkout all useful inators in one place, use the ai botinator to
            get information about inators.
          </p>
        </div>
        <div className="flex justify-center flex-col items-center">
          <Image
            src={heinz}
            alt="Dr. Doofenshmirtz"
            height={800}
            width={900}
            className="rounded-lg aspect-video border-2 object-cover shadow-md dark:border-foreground md:max-w-[35vw]"
          />
          <span className="text-sm font-semibold mt-1">
            &quot;Inator&quot; inspired from Dr. Heinz Doofenshmirtz
          </span>
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Ask chatbot about inators</H2>
        <p>
          Click the bot icon <Bot className="inline pb-1" /> icon in the top to
          activate the AI botinator. You can ask the botinator any question
          about inators and it will find the relevent info for you. The
          botinator can provide links to the inators you are looking for.
        </p>
      </section>
    </section>
  );
}
