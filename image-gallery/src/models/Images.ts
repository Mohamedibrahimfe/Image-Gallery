import { z } from "zod";

const basicImageSchema = z.object({
  page: z.number(),
  perPage: z.number(),
  total: z.number(),
  prevPage: z.string().optional(),
  nextPage: z.string().optional(),
  total_results: z.number(),
});

const photoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredDataUri: z.string().optional(),
});

export const imageSchemaWithPage = basicImageSchema.extend({
  photo: z.array(photoSchema),
});

export type ImageResults = z.infer<typeof imageSchemaWithPage>;

export type photo = z.infer<typeof photoSchema>;
