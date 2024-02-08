import { H1 } from "@/components/ui/H1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Connect",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <p>Find all the relevent links below for my social media accounts</p>
    </section>
  );
}
