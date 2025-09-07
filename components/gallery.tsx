"use client"
import { Down, Up } from "@icon-park/react"
import { useState } from "react"
import Input from "./elements/input"
import { Modal } from "./modal";

function FullImage(props: {
  image: string | null;
  closeImage: () => void;
}) {
  const { image, closeImage } = props
  return (
    <Modal isOpen={image ? true : false} close={closeImage}>
      <div className="p-2 rounded-3xl overflow-hidden">
        <img
          src={image ?? undefined}
          alt="modal-image"
          className="rounded-3xl object-cover shadow-lg"
        />
      </div>
    </Modal>
  )
}
export function GalleryList(props: { title: string, images?: string[] | null, children?: React.ReactNode, showButton?: boolean, startClosed?: boolean }) {
  const [isActive, setIsActive] = useState(!props.startClosed)
  const [fullImage, setFullImage] = useState<string | null>(null)
  const expandImage = (imageUrl: string) => {
    setFullImage(imageUrl)
  }
  const closeImage = () => {
    setFullImage(null)
  }
  const { images, title } = props
  const iconSize = 24
  // const hasImages = images.length > 1 ? true : false
  return (
    <div className="flex flex-col gap-4 py-12">
      <div className="flex justify-between items-center cursor-pointer group" onClick={() => setIsActive(p => !p)}>
        <h6 className="text-3xl text-primary font-bold font-ApfelGrotezk">{title}</h6>
        <span className="p-2 group-hover:bg-accent/30 rounded-2xl backdrop-blur-[3px]">
          {isActive ?
            <Up size={iconSize} />
            :
            <Down size={iconSize} />
          }
        </span>
      </div>
      <hr className="text-accent pb-6" />
      {props.children}
      {props.showButton &&

        <button onClick={() => setIsActive(p => !p)}
          className="bg-gradient-to-b to-primary/5 from-white/30 border from-60% border-white/60 backdrop-blur-[3px] shadow-sm w-36 inline-flex items-center p-2 rounded-lg gap-0.5 cursor-pointer hover:bg-white/60"
        >
          {isActive ?
            <><Up size={iconSize} /> Hide </>
            :
            <><Down size={iconSize} /> Show </>
          }
          Images
        </button>
      }

      {
        isActive &&
        // <div className="flex flex-wrap w-full gap-8">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6">
          {/* image gallery */}
          {images ?
            images.map((image, index) =>
              <div key={title + index} className="pb-6 break-inside-avoid-column rounded-2xl" onClick={() => expandImage(image)}>
                <img
                  alt={title + '-' + (index + 1)}
                  src={image}
                  loading="lazy"
                  className="size-full rounded-2xl object-cover shadow-md"

                />
              </div>
            )
            :
            <>Sorry no Images Found</>
          }
        </div>
      }
      <FullImage image={fullImage} closeImage={closeImage} />
    </div>
  )
}
const projectGallery = [
  {
    title: "Gallery Images",
    images: [
      "https://images2.imgbox.com/3d/ad/6ni8yGiK_o.jpg",
      "https://images2.imgbox.com/19/a0/nve8KAVy_o.jpg",
      "https://images2.imgbox.com/f7/13/0Vs5MJTo_o.jpg",
      "https://images2.imgbox.com/28/e3/zF4w33dg_o.jpg",
      "https://images2.imgbox.com/58/0e/nwVDSG7A_o.jpg",
      "https://images2.imgbox.com/b9/be/ZJPLDWhk_o.jpg",
      "https://images2.imgbox.com/f0/1c/JwDBb3wr_o.jpg",
      "https://images2.imgbox.com/c3/fa/DYYLBit3_o.jpg",
      "https://images2.imgbox.com/38/d7/gs3z3XR9_o.jpg",
      "https://images2.imgbox.com/d1/1c/FgQ9JvbB_o.jpg",
      "https://images2.imgbox.com/b4/05/YBlCa4nq_o.jpg",
      "https://images2.imgbox.com/aa/bc/702itdjR_o.jpg",
      "https://images2.imgbox.com/cd/fd/pAqGnpoG_o.jpg",
      "https://images2.imgbox.com/c4/e3/FdAbNbqN_o.jpg",
      "https://images2.imgbox.com/fd/36/KFujl2nL_o.jpg",
      "https://images2.imgbox.com/f7/be/4pySNEdD_o.jpg",
      "https://images2.imgbox.com/f4/6a/rrBB3Exg_o.jpg",
      "https://images2.imgbox.com/88/30/oCYFxV9t_o.jpg",
      "https://images2.imgbox.com/d7/3b/NABxg9IP_o.jpg",
      "https://images2.imgbox.com/dd/ed/gtA7F6O9_o.jpg",
      "https://images2.imgbox.com/a8/fe/K7lgDH7p_o.jpg",
      "https://images2.imgbox.com/41/d0/nhuxrdiz_o.jpg",
      "https://images2.imgbox.com/e1/62/k2P6lo8Q_o.jpg",
      "https://images2.imgbox.com/9d/0e/v8h0IMCI_o.jpg",
      "https://images2.imgbox.com/16/12/Nk1xX70F_o.jpg",
      "https://images2.imgbox.com/93/2a/bBdX3JYl_o.jpg",
      "https://images2.imgbox.com/52/68/we7BL3JD_o.jpg",
      "https://images2.imgbox.com/56/8b/Hi4jhlLG_o.jpg",
      "https://images2.imgbox.com/a9/2a/P3bRxNYk_o.jpg",
    ]
  },
  // {
  //   title: "project 2",
  //   images: ["https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff"]
  // }, {
  //   title: "project 3",
  //   images: ["https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff", "https://www.dummyimage.com/600x401/000/fff"]
  // },
]
export default function Gallery() {
  return (
    <>
      {/* <Input placeholder="search" className="text-black md:w-3/5 w-full mx-auto" /> */}
      <div className="py-8">
        {projectGallery.map(project => <GalleryList key={project.title} title={project.title} images={project.images} />)}
      </div>
    </>
  )
}