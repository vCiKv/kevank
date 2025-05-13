import { twMerge } from "tailwind-merge"

export default function Brands() {
  const brandImages = [
    {
      name: "zone 4",
      url: "/brands/zone4.png",
      isSquare: true,
    },
    {
      name: "ecobank",
      url: "/brands/ecobank.png"
    },
    {
      name: "FCMB",
      url: "/brands/FCMB.png",
      isSquare: true,
    },
    {
      name: "A A RANO",
      url: "/brands/aarano.png",
    },
    {
      name: "FIRST BANK OF NIGERIA",
      url: "/brands/firstbank.png"
    },

    {
      name: "fidelity",
      url: "/brands/fidelity.svg"
    },
  ]
  return (
    <div className="bg-white/35 backdrop-blur-lg rounded-3xl py-6">
      <h3 className="text-primary font-bold text-4xl text-center">Brands We Work with</h3>
      <div className="flex gap-16 flex-wrap px-8 md:px-12 py-24 justify-center items-center ">
        {brandImages.map(brand =>
          <div key={brand.name} className={twMerge("h-20", brand.isSquare ? "aspect-square" : "aspect-video")}>
            <img alt={brand.name} src={brand.url} loading="lazy" className="size-full" />
          </div>
        )}
      </div>
    </div>
  )
}