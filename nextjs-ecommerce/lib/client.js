// For Sanity client
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-02-15",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

// Allow usage of sanity images
const builder = imageUrlBuilder(client);

// Get access to sanity image urls
export const urlFor = (source) => builder.image(source);
