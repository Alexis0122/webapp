import { Icon, IconProps } from '@phosphor-icons/react'
import { NextPage } from 'next'
import type { ComponentType } from 'react'

export type Page<P = {}> = NextPage<P> & {
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

export type BaseResponse = {
  isSuccess: boolean
  statusCode: number
  message: string | null
  pagination: Pagination | null
  errors: string[] | null
}

export type Pagination = {
  currentPage: number
  pageSize: number
  totalPages: number
  totalItems: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface PaginatedItems<Type> {
  items: Type[]
}

export interface PaginatedResponse<Type> extends BaseResponse {
  data: PaginatedItems<Type>
  pagination: Pagination
}
