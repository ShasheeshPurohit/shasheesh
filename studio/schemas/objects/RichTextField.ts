export default {
  title: 'Rich text',
  name: 'richTextField',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                //keep it as string as this can be link to another HTML element in the same page
                type: 'string',
                title: 'URL',
              },
              {
                title: 'ID (optional)',
                name: 'linkId',
                description: 'This is used for the id attribute of cta, useful for analytics',
                type: 'string',
              },
            ],
          },
        ],
      },
    },
  ],
}
