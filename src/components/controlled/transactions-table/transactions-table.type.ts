import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface ITransactionsTableRow {
  age: ITransactionAge;
  direction?: string;
  method: ITransactionMethod;
  iconInfo: ITransactionIconInfo;
  link: string;
  receiver: ITransactionAccount;
  sender: ITransactionAccount;
  txHash: string;
  value: ITransactionValue;
}

export interface ITransactionAge {
  timeAgo: string;
  tooltip: string;
}

export interface ITransactionIconInfo {
  icon?: IconDefinition;
  tooltip: string;
}

export interface ITransactionMethod {
  name: string;
  actionDescription?: string;
}

export interface ITransactionAccount {
  address: string;
  description: string;
  isContract: boolean;
  isTokenLocked: boolean;
  link: string;
  name: string;
  shard?: string;
  shardLink?: string;
  showLink: boolean;
}

export interface ITransactionValue {
  badge?: string;
  collection?: string;
  rewaLabel: string;
  link?: string;
  linkText?: string;
  name?: string;
  showFormattedAmount?: boolean;
  svgUrl?: string;
  ticker?: string;
  titleText?: string;
  valueDecimal: string;
  valueInteger: string;
}
