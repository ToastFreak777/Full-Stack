import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({ creator: res.params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch users prompts", { status: 500 });
  }
};
