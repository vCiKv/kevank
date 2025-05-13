import Brands from "@/components/brands";
import Box from "@/components/elements/box";
import { Heading, P, SectionTitle } from "@/components/elements/title";


export default function About() {
  return (
    <main>
      <section className="my-36">
        <div className="container mx-auto pb-10">
          <SectionTitle title={"Why Kevank?"} />
          <Heading title={"About Us"} />
          <P>
            Kevank Nigeria Limited was incorporated in 2008 and commenced
            operation the same year as projects, construction and facilities
            management company. Kevank Nigeria LTD is here to address your
            engineering needs, to meet your requirement and surpass your
            expectation. We are major players in the facilities management field
            and have been having facilities management contracts since 2008 to
            date with First City Monument Bank (FCMB) PLC and Fidelity Bank PLC.
            We have also executed Building Renovation works for Conoil PLC,
            Petrol Station building and construction works for AA Rano Nig
            Limited, Zone 4 energy ltd and several building and construction
            works.
          </P>
        </div>
        <Brands />
        <div className="container mx-auto py-10 css-dots">
          <Heading title={"About Us"} />
          <P>
            Kevank Nigeria Limited was incorporated in 2008 and commenced
            operation the same year as projects, construction and facilities
            management company. Kevank Nigeria LTD is here to address your
            engineering needs, to meet your requirement and surpass your
            expectation. We are major players in the facilities management field
            and have been having facilities management contracts since 2008 to
            date with First City Monument Bank (FCMB) PLC and Fidelity Bank PLC.
            We have also executed Building Renovation works for Conoil PLC,
            Petrol Station building and construction works for AA Rano Nig
            Limited, Zone 4 energy ltd and several building and construction
            works.
          </P>
        </div>
        <div className="py-16 md:py-32 bg-[url('/img/about1.jpg')] bg-cover bg-center bg-fixed">
          <div className="flex flex-wrap justify-around gap-2 ">
            <Box className="bg-white/50  duration-300 ease-in w-full md:w-[40%] hover:bg-primary hover:border-primary hover:from-transparent hover:to-transparent hover:text-white">
              <div>
                <Heading title={"Our Mission"} />
                <p>
                  To become one of the leading multidisciplinary engineering
                  companies in building construction and facilities maintenance
                  through strategic technical alliances with indigenous.
                </p>
              </div>
            </Box>
            <Box className="bg-white/50  duration-300 ease-in w-full md:w-[40%] hover:bg-primary hover:border-primary hover:from-transparent hover:to-transparent hover:text-white">
              <div>
                <Heading title={"Our Vision"} />
                <p>
                  To be number ONE in our chosen field providing quality
                  multidisciplinary service delivery with international
                  standards and specifications.
                </p>
              </div>
            </Box>
          </div>
        </div>
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-2 gap-8">
            <div className="p-4">
              <Heading title={"Health & Safety"} />
              <P>The safety and well-being of our team is a core responsibility at Kevank Nigeria Ltd. We ensure a safe working environment at every stage, from planning to execution, with trained personnel and a strong focus on preventing accidents and property damage.</P>
            </div>
            <div className="p-4">
              <Heading title={"Environmental Sustainability"} />
              <P>We  recognizes environmental sustainability as a core responsibility and actively leads by example as a prominent local company. We believe our commitment to the environment is not only socially responsible but also strengthens our growing reputation. Therefore, our comprehensive environmental policy is integrated into every aspect of our operations. Our fundamental objective is to minimize any negative environmental impact and actively prevent pollution or degradation.</P>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-10">
          <Heading title={"Quality Assurance"} />
          <P>At Kevank Nigeria Ltd., client satisfaction is paramount, built on consistently meeting specified quality standards through industry-leading assurance procedures. We deliver efficient construction, ensuring value for money while strictly adhering to project timelines and budgets. Our long-standing commitment to exceptional customer service and the strong reputation {"we've"}earned underscore our dedication to quality in every project.</P>
        </div>
        <div className="container mx-auto py-10">
          <Heading title={"Kevank: Building Your Vision, Managing Your Future"} subtitle={"Your Reliable Partner in Building and Beyond"} />
          <P>
            Since our inception in 2008, Kevank Nigeria Limited has consistently delivered exceptional projects and facilities management services. Our enduring relationships with FCMB and Fidelity Bank, coupled with our successful execution of construction and renovation works for companies like Conoil and AA Rano, underscore our reliability and commitment to surpassing your requirements. Choose Kevank Nigeria Limited to experience our dedication to meeting and exceeding your expectations
          </P>
          <div className="pt-8">
            <P>dynamic and forward-thinking, consistently exceeding client expectations through innovative solutions and a proactive approach to every project.</P>

            <button>get a quote from us</button>
          </div>
        </div>

      </section>
    </main>
  );
}
