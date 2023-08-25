import Image from "next/image";
import { Inter } from "next/font/google";
import { Heading, SectionSubtitle, SectionTitle } from "./components/title";
import { Box } from "./components/common";
import { twJoin } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="container mx-auto my-16">
        <SectionTitle title={"hello world"} center subtitle={"im testing"} />
      </section>
      <section className="container mx-auto my-16">
        <div className="flex flex-wrap justify-around gap-2">
          {[1, 2, 3].map((num) => (
            <Box className="w-[31%]">
              <div>
                <Heading title={"box" + num} />
                <p>
                  Magna at et vero dolores justo vero vero. Et sit erat tempor
                  erat eirmod sed, gubergren vero ipsum ea aliquyam.
                </p>
              </div>
            </Box>
          ))}
        </div>
      </section>
      <section className="container mx-auto my-16">
        <div className="flex flex-wrap justify-center gap-2">
          {[4, 5, 6].map((num) => (
            <Box className="p-0">
              <div
                className={twJoin(
                  "flex flex-nowrap",
                  num % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                <div className="w-1/2 p-2">
                  <Heading title={"box" + num} />
                  <p className="mb-4">
                    Magna at et vero dolores justo vero vero. Et ea aliquyam.
                    Voluptua sadipscing duo invidunt takimata labore lorem et gubergren et. Lorem takimata sadipscing rebum gubergren, sed tempor no eos takimata.
                  </p>
                </div>
                <div className="block w-1/2 h-auto bg-yellow-300"></div>
              </div>
            </Box>
          ))}
        </div>
      </section>
      <section className="container mx-auto my-16">
        <Box>
          <SectionTitle title={"random facts"} center />
          <div className="flex justify-around gap-8 my-10">
            {[96, 91, 92].map((num) => (
              <div className="flex flex-col">
                <p className="text-5xl font-semibold text-accent">
                  {Math.floor(num * Math.random())}
                </p>
                <p>Ea accusam.</p>
              </div>
            ))}
          </div>
        </Box>
      </section>
      <section className="container mx-auto my-16">
        <SectionTitle title={"projects"} center />
        <div className="flex justify-around gap-8 my-10">
          {[14, 35, 46,4].map((num) => (
            <Box className="flex flex-col">
              <div className="bg-blue-200 block h-20 w-full rounded-sm"></div>
              <div className="my-4 tracking-tight">
                <p className="text-sm font-light -my-1">location</p>
                <h3 className="text-2xl font-medium mb-2">Title</h3>
              </div>
              <p className="leading-relaxed">
                Ea accusam. Rebum ipsum et stet diam sed nonumy diam, et
                gubergren diam gubergren at. Lorem stet elitr dolore consetetur.
                Sanctus et sit et voluptua dolor amet et ut sed,.
              </p>
            </Box>
          ))}
        </div>
      </section>
    </main>
  );
}
