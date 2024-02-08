import { H1 } from "@/components/ui/H1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Privacy Policy</H1>
      <p>This is the privacy policy for Inators</p>
    </section>
  );
}
