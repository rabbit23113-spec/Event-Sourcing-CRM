import CustomButton from "@/app/components/button";
import Hero from "@/app/layout/hero";
import Opportunity from "@/app/components/opportunity";
import Advantages from "@/app/components/advantages";
import CTAButtons from "@/app/components/ctaButtons";
import CTA from "@/app/components/cta";

export default function Home() {
    return (
        <div className={"min-h-screen justify-center items-center flex flex-col gap-30 pt-24 pb-24"}>
            <Hero/>
            <Advantages/>
            <CTA />
        </div>
    );
}
