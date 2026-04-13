"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import CompetitionRegisterForm from "@/components/CompetitionRegisterForm";
import { useCompetition, useCompetitions } from "@/hooks/api/useCompetitions";
import {
  mapCompetitionToCompetitionDetail,
  resolveCompetitionIdFromParam,
} from "@/lib/publicCompetitionModel";

export default function CompetitionRegisterPage() {
  const params = useParams();
  const routeParam = typeof params?.slug === "string" ? params.slug : "";

  const { data: competitions = [], isLoading: isCatalogLoading } =
    useCompetitions();

  const competitionId = useMemo(
    () => resolveCompetitionIdFromParam(routeParam, competitions),
    [routeParam, competitions],
  );

  const { data: rawCompetition, isLoading: isCompetitionLoading } =
    useCompetition(competitionId || "");

  const isResolving = Boolean(routeParam) && !competitionId && isCatalogLoading;
  const isLoading = isResolving || isCompetitionLoading;

  const competitionDetail = rawCompetition
    ? mapCompetitionToCompetitionDetail(rawCompetition)
    : null;

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          <p className="text-xs uppercase tracking-[0.24em] text-white/60">
            Initializing Terminal...
          </p>
        </div>
      </main>
    );
  }

  if (!rawCompetition || !competitionId) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-xl w-full border border-white/15 bg-white/5 rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-semibold mb-4">Registration Offline</h1>
          <p className="text-white/65 mb-8">
            This sector is currently inaccessible. Verify the transmission link and try again.
          </p>
        </div>
      </main>
    );
  }

  const teamSizeStr = rawCompetition.teamSize || competitionDetail?.teamSize || "";
  const isSoloOnly = teamSizeStr === "Solo";
  const isTeamOnly = !teamSizeStr.includes("Solo") && teamSizeStr !== "Solo / Team";
  
  // Extract team sizes - either from raw or by parsing string
  const minTeamSize = rawCompetition.minTeamSize 
    || parseInt(teamSizeStr.split("-")[0] || "1") 
    || (isTeamOnly ? 2 : 1);

  const maxTeamSize = rawCompetition.maxTeamSize 
    || parseInt(teamSizeStr.split("-")[1] || teamSizeStr.match(/\d+/g)?.[0] || "1") 
    || (isSoloOnly ? 1 : 4);

  return (
    <CompetitionRegisterForm 
      competition={{
        id: rawCompetition.id || rawCompetition._id,
        name: rawCompetition.name || competitionDetail?.title || "Competition",
        slug: routeParam,
        allowTeam: !isSoloOnly,
        maxTeamSize: maxTeamSize,
        minTeamSize: minTeamSize,
        allowSolo: !isTeamOnly
      }} 
    />
  );
}
