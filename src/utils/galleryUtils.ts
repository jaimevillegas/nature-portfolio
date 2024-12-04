export interface GalleryImage {
  src: string;
  thumb: string;
  alt: string;
  title: string;
  description: string;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const images: GalleryImage[] = [];
  
  // Import all images from the gallery directory
  const imageModules = import.meta.glob('/public/images/gallery/*.{jpg,jpeg,png,gif}', {
    eager: true,
  });

  // Process each image
  for (const path in imageModules) {
    const fileName = path.split('/').pop()?.split('.')[0] || '';
    
    // Create image object
    const image: GalleryImage = {
      src: `/images/gallery/${fileName}.${path.split('.').pop()}`,
      thumb: `/images/gallery/${fileName}.${path.split('.').pop()}`,
      alt: `Nature photograph ${fileName}`,
      title: `Nature Photo ${fileName}`,
      description: 'A stunning capture of nature\'s beauty'
    };
    
    images.push(image);
  }

  // Sort images by filename
  return images.sort((a, b) => {
    const aNum = parseInt(a.src.split('/').pop()?.split('.')[0] || '0');
    const bNum = parseInt(b.src.split('/').pop()?.split('.')[0] || '0');
    return aNum - bNum;
  });
}
