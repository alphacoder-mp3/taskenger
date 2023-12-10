"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useOrganizationList } from "@clerk/nextjs"

export const OrgControl = () => {
    const paramas = useParams();
    const { setActive } = useOrganizationList();

    useEffect(() => {
        if(!setActive) return;

        setActive({
            organization: paramas.organizationId as string,
        })
    },[setActive, paramas.organizationId])

    return null;
}