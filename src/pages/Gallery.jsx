import React from "react";

const Gallery = () => {
  const images = [
    { id: 1, title: "Image 1", description: "Description 1" },
    { id: 2, title: "Image 2", description: "Description 2" },
    { id: 3, title: "Image 3", description: "Description 3" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="border rounded-lg p-4">
            <img
              src="/placeholder.svg"
              alt="placeholder"
              className="mx-auto rounded-xl object-cover w-full h-[200px]"
            />
            <h2 className="text-xl font-semibold mt-2">{image.title}</h2>
            <p className="text-gray-600">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;