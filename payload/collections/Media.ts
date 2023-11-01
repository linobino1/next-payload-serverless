import type { CollectionConfig } from 'payload/types';
import type { ImageUploadFormatOptions } from 'payload/dist/uploads/types';

export const formatOptions: ImageUploadFormatOptions = {
  format: 'webp',
  options: {
    quality: 100,
    force: true,
  },
}

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    adminThumbnail: 'thumbnail',
    formatOptions,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 320,
        height: 320,
        formatOptions,
      },
    ],
  },
  fields: [
    {
      type: 'text',
      name: 'alt',
    }
  ],
};

export default Media;
