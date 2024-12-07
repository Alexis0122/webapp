import React, { FC, useState, useRef } from 'react'
import { Image, Group, ScrollArea } from '@mantine/core'
import './ImagesCarousel.css'

interface ImageCarouselProps {
  images: { url: string }[]
}

export const ImagesCarousel: FC<ImageCarouselProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].url)
  const thumbnailRef = useRef<HTMLDivElement>(null)

  const handleThumbnailClick = (imageUrl: string) => {
    setSelectedImage(imageUrl)
  }

  return (
    <div className='carousel-background'>
      <div className='carousel-overlay'>
        <div className='main-image-container'>
          <Image src={selectedImage} alt='Imagen Principal' radius='md' className='main-image' />
        </div>
        <div className='thumbnail-container'>
          <ScrollArea>
            <Group gap='xs' className='thumbnail-scroll' ref={thumbnailRef}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${image.url === selectedImage ? 'selected' : ''}`}
                  onClick={() => handleThumbnailClick(image.url)}
                >
                  <Image src={image.url} alt={`Miniatura ${index}`} height={50} radius='md' />
                </div>
              ))}
            </Group>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export default ImagesCarousel
