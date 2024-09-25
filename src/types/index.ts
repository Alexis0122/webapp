import { NextPage } from "next";
import type { ComponentType } from "react";

export type Page<P ={}> = NextPage<P> & {
  Layout?: ComponentType
}