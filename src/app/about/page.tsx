import { H1 } from "@/components/ui/H1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Inators",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Inators</H1>
      <p>I create inators as my hobby and I love them.</p>
    </section>
  );
}
