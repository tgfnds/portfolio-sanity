export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "websiteUrl",
      title: "Website Url",
      type: "string",
    },
    {
      name: "sourcecodeUrl",
      title: "Sourcecode Url",
      type: "string",
    },
    {
      name: "stack",
      title: "Stack",
      type: "array",
      of: [{ type: "reference", to: { type: "tech" } }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
