import { Icon, IconProps } from "@phosphor-icons/react";
import { NextPage } from "next";
import type { ComponentType } from "react";

export type Page<P ={}> = NextPage<P> & {
  Layout?: ComponentType
}

/* This type can be used whenever there is a list of items that need to be passed as props */
export interface CommonItem<OnClickType extends (...args: any[]) => void = VoidFunction> {
  label: string
  value: string
  key?: string
  onClick?: OnClickType
  icon?: Icon
  iconProps?: IconProps
}

export interface CommonItemWithoutValue<OnClickType extends (...args: any[]) => void>
  extends Omit<CommonItem<OnClickType>, 'value'> {
  key: string
}

export interface CommonItemWithSubitems extends CommonItem {
  subItems?: CommonItem[]
}