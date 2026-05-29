import { useMutation, useQuery } from "@tanstack/react-query";

interface Stats {
  finesSaved: bigint;
  wasteRecycled: bigint;
  incomeGenerated: bigint;
  users: bigint;
}

// Query to get statistics (returns hardcoded defaults since backend stats aren't live yet)
export function useGetStats() {
  return useQuery<Stats | null>({
    queryKey: ["stats"],
    queryFn: async () => null,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

// Mutation to submit a lead (Pre-Order form)
export function useSubmitLead() {
  return useMutation({
    mutationFn: async (_data: {
      name: string;
      email: string;
      phone: string;
      address: string;
    }) => {
      // Lead submission will be wired when backend exposes submitLead
      return { ok: true };
    },
  });
}

// Mutation to submit feedback
export function useSubmitFeedback() {
  return useMutation({
    mutationFn: async (_data: { name: string; message: string }) => {
      // Feedback submission will be wired when backend exposes submitFeedback
      return { ok: true };
    },
  });
}
