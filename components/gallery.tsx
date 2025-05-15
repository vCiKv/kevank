"use client"
import { Down, Up } from "@icon-park/react"
import { useState } from "react"
import Input from "./elements/input"

function GalleryList(props: { title: string, images: string[] }) {
  const [isActive, setIsActive] = useState(true)
  const { images, title } = props
  const iconSize = 24
  // const hasImages = images.length > 1 ? true : false
  return (
    <div className="flex flex-col gap-4 py-12">
      <div className="flex justify-between items-center cursor-pointer group" onClick={
        () => setIsActive(p => !p)
      }>
        <h6 className="text-2xl font-bold">{title}</h6>
        <span className="p-2 group-hover:bg-accent/30 rounded-2xl">
          {
            isActive ?
              <Up size={iconSize} />
              :
              <Down size={iconSize} />
          }
        </span>
      </div>
      <hr className=" text-accent pb-6" />
      {
        isActive &&
        <div className="flex flex-wrap w-full gap-8">
          {/* image gallery */}
          {images.map((image, index) =>
            <div key={title + index}>
              <img
                alt={title + '-' + (index + 1)}
                src={image}
                className="rounded-2xl object-cover"
              />
            </div>
          )}
        </div>
      }
    </div>
  )
}
const projectGallery = [
  {
    title: "project 1",
    images: ["https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff"]
  },
  {
    title: "project 2",
    images: ["https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff"]
  }, {
    title: "project 3",
    images: ["https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff"]
  },
]
export default function Gallery() {
  return (
    <>
      <h2 className="text-3xl text-primary pb-10 text-center">Project Images</h2>
      <Input placeholder="search" className="text-black md:w-3/5 w-full mx-auto" />
      <div className="py-8">
        {projectGallery.map(project => <GalleryList key={project.title} title={project.title} images={project.images} />)}
      </div>
    </>
  )
}