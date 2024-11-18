"use server";

import { createClient } from "@/utils/supabase/server";

export async function searchRecipes(searchTerm: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("v_all_recipes")
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

export async function allRecipes(
  page: number,
  searchTerm?: string,
  sortBy?: string
) {
  const supabase = await createClient();
  const startsFrom = page * 9;

  let query = supabase
    .from("v_all_recipes")
    .select()
    .range(startsFrom, startsFrom + 8);

  if (searchTerm) {
    query = query.ilike("search_phrases", `%${searchTerm}%`);
  }

  switch (sortBy) {
    case "most_liked":
      query = query.order("stars", { ascending: false });
      break;
    case "quickest":
      query = query.order("preparation_time", { ascending: true });
      break;
    case "fewest_ingredients":
      query = query.order("main_ingredients", { ascending: true });
      break;
    case "latest":
      query = query.order("created_at", { ascending: false });
      break;
    default:
      break;
  }

  let countQuery = supabase
    .from("v_all_recipes")
    .select("*", { count: "exact" });

  if (searchTerm) {
    countQuery = countQuery.ilike("search_phrases", `%${searchTerm}%`);
  }

  const { data, error } = await query;
  const { data: count } = await countQuery;

  if (error) throw error;
  return [data, count?.length];
}

export async function getFavourites(
  page: number,
  ids: number[],
  sortBy?: string
) {
  const supabase = await createClient();
  const startsFrom = page * 9;

  if (!ids || ids.length === 0) return [[], 0];

  let query = supabase
    .from("v_all_recipes")
    .select("*")
    .in("id", ids)
    .range(startsFrom, startsFrom + 8);

  switch (sortBy) {
    case "most_liked":
      query = query.order("stars", { ascending: false });
      break;
    case "quickest":
      query = query.order("preparation_time", { ascending: true });
      break;
    case "fewest_ingredients":
      query = query.order("main_ingredients", { ascending: true });
      break;
    case "latest":
      query = query.order("created_at", { ascending: false });
      break;
    default:
      break;
  }

  const countQuery = supabase
    .from("v_all_recipes")
    .select("*", { count: "exact" })
    .in("id", ids);

  const { data, error } = await query;
  const { data: countData, error: countError } = await countQuery;

  if (error || countError) {
    console.error("Supabase Query Error:", error || countError);
    throw error || countError;
  }

  return [data, countData?.length || 0];
}
