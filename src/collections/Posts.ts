import type { CollectionConfig } from 'payload';
import { slug } from '@/fields/slug';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    slug({ trackingField: 'title', localized: true }),
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      label: 'Description (Or Question)',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      required: true
    },
    {
      name: 'keywords',
      type: 'array',
      label: 'Keywords',
      fields: [
        {
          name: 'keyword',
          type: 'text',
        },
      ],
    },
    {
      name: 'isActive',
      label: 'Is Active',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
  ],
};