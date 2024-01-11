import React, { useState, useEffect } from 'react';
import { api } from "@/trpc/react";
import { cn } from "@/lib/utils"
import type { Organization } from '@prisma/client';

interface DropdownProps {
  organisationID: string;
  onSelect: (organisationID: string) => void;
}

const DropdownForOrganisation = ({ organisationID, onSelect }: DropdownProps) => {
    const allOrganisations = api.organization.getAllOrganisations.useQuery();
    console.log(allOrganisations);

  const handleSelect = (selectedOrganisationId: string) => {
    onSelect(selectedOrganisationId);
  };

  return (
    <div>
      <select
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      )}
      value={organisationID} onChange={(e) => handleSelect(e.target.value)}>
        <option value="">Select an organisation</option>
        {allOrganisations.data?.map((org: Organization) => (
          <option key={org.id} value={org.id}>
            {org.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownForOrganisation;
