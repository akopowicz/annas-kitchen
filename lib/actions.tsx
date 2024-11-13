"use server";

import { createClient } from "@/utils/supabase/server";

export async function searchRecipes(searchTerm: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("v_all_recipes")
    // .select(`*,ingredients(*)`)
    // .or(
    //   `and(title.ilike.%${searchTerm}%),and(dish_type.ilike.%${searchTerm}%),and(ingredients.name.ilike.%${searchTerm}%)`
    // );
    //   .from("ingredients")
    //   .select(`*, ingredients!recipes_id(*)`)
    //   .or(
    //     `recipes.title.ilike.%${searchTerm}%,recipes.dish_type.ilike.%${searchTerm}%,ingredients.name.ilike.%${searchTerm}%`
    //   );

    .select()
    .or(`title.ilike.%${searchTerm}%,dish_type.ilike.%${searchTerm}%`)
    .range(0, 5);
  if (error) throw error;
  return data;
}

export async function allRecipesWithSearch(
  searchTerm: string,
  page: number = 0
) {
  const supabase = await createClient();
  const startsFrom = page * 10;

  const { data, error } = await supabase
    .from("v_all_recipes")

    .select()
    .or(`title.ilike.%${searchTerm}%,dish_type.ilike.%${searchTerm}%`)
    .range(startsFrom, startsFrom + 9);
  if (error) throw error;
  return data;
}

export async function allRecipes(page: number, searchTerm?: string) {
  const supabase = await createClient();
  const startsFrom = page * 10;

  let query = supabase
    .from("v_all_recipes")
    .select()
    .range(startsFrom, startsFrom + 9); // range should end at `startsFrom + 9` for 10 items per page

  // Apply search filter only if searchTerm is provided
  if (searchTerm) {
    query = query.ilike("search_phrases", `%${searchTerm}%`);
  }

  // const { data: count } = await supabase
  //   .from("v_all_recipes")
  //   .select("*", { count: "exact" });

  let countQuery = supabase
    .from("v_all_recipes")
    .select("*", { count: "exact" });

  if (searchTerm) {
    countQuery = query.ilike("search_phrases", `%${searchTerm}%`);
  }

  // console.log(count?.length);

  const { data, error } = await query;
  const { data: count } = await countQuery;

  if (error) throw error;
  return [data, count?.length];
}
