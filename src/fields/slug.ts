// src/fields/slug.ts
import lodash from 'lodash';
import type { Field } from 'payload';

const { merge } = lodash;

type Slug = (
  options?: { trackingField?: string; localized?: boolean },
  overrides?: Partial<Field>,
) => Field;

export const slug: Slug = ({ trackingField = 'title', localized = true } = {}, overrides) =>
  merge<Field, Partial<Field> | undefined>(
    {
      name: 'slug',
      unique: true,
      type: 'text',
      localized,
      admin: {
        position: 'sidebar',
        components: {
          Field: {
            path: '@/components/ui/slug-input',
            exportName: 'SlugInput',
            clientProps: {
              trackingField,
            },
          },
        },
      },
    },
    overrides,
  );