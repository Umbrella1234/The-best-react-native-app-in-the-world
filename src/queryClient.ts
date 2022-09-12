import { QueryClient } from "@tanstack/react-query";

export enum Queries {
  Employees = "Employees",
}

export const queryClient = new QueryClient();
