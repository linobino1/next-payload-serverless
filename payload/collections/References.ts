import type { CollectionConfig } from 'payload/types';

/**
 * Backend users
 */
const References: CollectionConfig = {
  slug: 'references',
  fields: [
    {
      type: 'text',
      name: 'title',
      required: true,
    },
    {
      type: 'upload',
      name: 'screenshot',
      relationTo: 'media',
      label: 'Screenshot',
      required: true,
    },
    {
      type: 'text',
      name: 'url',
    },
    {
      type: 'textarea',
      name: 'description',
      required: true,
    },
  ],
};

export default References;
