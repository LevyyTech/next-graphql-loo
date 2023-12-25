import "server-only";
import { gql } from "graphql-request";

import { graphQLClient } from "@/lib";

import { Loo, LooBase, Pagination } from "../types";

export const getLoos = async (
  page: number = 1,
): Promise<{ loos: LooBase[]; pagination: Pagination } | null> => {
  const query = gql`
    query GetLoss($page: Int = 1) {
      loos(
        sort: NEWEST_FIRST
        filters: { active: true }
        pagination: { limit: 20, page: $page }
      ) {
        loos {
          active
          name
          id
          area {
            name
          }
        }
        page
        pages
      }
    }
  `;

  if (page <= 0) return null;

  const variables = { page };

  try {
    const data = await graphQLClient.request<{
      loos: { loos: LooBase[]; page: number; pages: number };
    }>(query, variables);

    return {
      loos: data.loos.loos,
      pagination: { page: data.loos.page, pages: data.loos.pages },
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getLooById = async (id: string): Promise<Loo | null> => {
  const query = gql`
    query GetLoo($id: ID!) {
      loo(id: $id) {
        id
        name
        accessible
        allGender
        men
        women
        area {
          name
        }
        automatic
        babyChange
        children
        noPayment
        openingTimes
        urinalOnly
      }
    }
  `;

  if (!id) return null;

  const variables = { id };

  try {
    const data = await graphQLClient.request<{ loo: Loo }>(query, variables);

    return data.loo;
  } catch (error) {
    console.error(error);
    return null;
  }
};
