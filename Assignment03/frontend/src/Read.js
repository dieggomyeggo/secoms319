//@format
import { useState } from 'react'
const Read = () => {
  const [highlightedImage, setHighlightedImage] = useState(null)
  return (
    <div className="grid grid-cols-6 gap-4 justify-center">
      <div className="col-span-6 mt-4 p-8 bg-gray-800 rounded-2xl text-center">
        <h1 className="mb-4 text-4xl align-center font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl ">
          All Products
        </h1>
      </div>
      <div
        hidden={!highlightedImage}
        className="col-start-2  col-end-7 rounded-2xl text-center"
      >
        <img className="rounded-lg " src={highlightedImage} alt="ph1" />
      </div>
      <div className="col-auto">
        <img
          className="rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt="ph2"
          onClick={() =>
            setHighlightedImage(
              'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
            )
          }
        />
      </div>
      <div className="col-auto">
        <img
          className="h-auto max-w-full rounded-lg "
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt="ph3"
          onClick={() =>
            setHighlightedImage(
              'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
            )
          }
        />
      </div>
      <div className="col-auto">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt="ph4"
          onClick={() =>
            setHighlightedImage(
              'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
            )
          }
        />
      </div>
      <div className="col-auto">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt="ph4"
          onClick={() =>
            setHighlightedImage(
              'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
            )
          }
        />
      </div>

      <div className="col-auto">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt="ph4"
          onClick={() =>
            setHighlightedImage(
              'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
            )
          }
        />
      </div>

      <div className="col-auto">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt="ph4"
          onClick={() =>
            setHighlightedImage(
              'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
            )
          }
        />
      </div>
      <div className="col-auto">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt="ph5"
          onClick={() =>
            setHighlightedImage(
              'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
            )
          }
        />
      </div>
    </div>
  )
}

export default Read
