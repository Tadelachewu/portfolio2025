import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export function updatePlaceholderImage(images: ImagePlaceholder[], id: string, newUrl: string): ImagePlaceholder[] {
    return images.map(image => 
        image.id === id ? { ...image, imageUrl: newUrl } : image
    );
}
