import { useRouter } from "next/router";
import React from "react";

export default function ProjectDetailPage() {
  const router = useRouter()
  const { id } = router.query;

  return(
    <>
    </>
  )
}