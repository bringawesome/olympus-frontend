/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface MimirTokenSaleInterface extends ethers.utils.Interface {
  functions: {
    "END()": FunctionFragment;
    "MIMIRTOKEN()": FunctionFragment;
    "MINIMAL_PROVIDE_AMOUNT()": FunctionFragment;
    "START()": FunctionFragment;
    "TOTAL_DISTRIBUTE_AMOUNT()": FunctionFragment;
    "claim()": FunctionFragment;
    "owner()": FunctionFragment;
    "provided(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setTokenForSale(address)": FunctionFragment;
    "startSale()": FunctionFragment;
    "totalProvided()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawProvidedETH()": FunctionFragment;
    "withdrawUnclaimedMimir()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "END", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MIMIRTOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINIMAL_PROVIDE_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "START", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TOTAL_DISTRIBUTE_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "provided", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenForSale",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "startSale", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalProvided",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawProvidedETH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUnclaimedMimir",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "END", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MIMIRTOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MINIMAL_PROVIDE_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "START", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TOTAL_DISTRIBUTE_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "provided", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalProvided",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawProvidedETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUnclaimedMimir",
    data: BytesLike
  ): Result;

  events: {
    "Claimed(address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Received(address,uint256)": EventFragment;
    "SaleStarted(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleStarted"): EventFragment;
}

export type ClaimedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    account: string;
    userShare: BigNumber;
    mimirAmount: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ReceivedEvent = TypedEvent<
  [string, BigNumber] & { account: string; amount: BigNumber }
>;

export type SaleStartedEvent = TypedEvent<
  [BigNumber, BigNumber] & { saleStatTime: BigNumber; saleEndTime: BigNumber }
>;

export class MimirTokenSale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MimirTokenSaleInterface;

  functions: {
    END(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIMIRTOKEN(overrides?: CallOverrides): Promise<[string]>;

    MINIMAL_PROVIDE_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    START(overrides?: CallOverrides): Promise<[BigNumber]>;

    TOTAL_DISTRIBUTE_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    provided(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTokenForSale(
      mimirToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalProvided(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawProvidedETH(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawUnclaimedMimir(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  END(overrides?: CallOverrides): Promise<BigNumber>;

  MIMIRTOKEN(overrides?: CallOverrides): Promise<string>;

  MINIMAL_PROVIDE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  START(overrides?: CallOverrides): Promise<BigNumber>;

  TOTAL_DISTRIBUTE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  provided(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTokenForSale(
    mimirToken_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startSale(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalProvided(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawProvidedETH(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawUnclaimedMimir(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    END(overrides?: CallOverrides): Promise<BigNumber>;

    MIMIRTOKEN(overrides?: CallOverrides): Promise<string>;

    MINIMAL_PROVIDE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    START(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_DISTRIBUTE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    claim(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    provided(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setTokenForSale(
      mimirToken_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    startSale(overrides?: CallOverrides): Promise<void>;

    totalProvided(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawProvidedETH(overrides?: CallOverrides): Promise<void>;

    withdrawUnclaimedMimir(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Claimed(address,uint256,uint256)"(
      account?: string | null,
      userShare?: null,
      mimirAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { account: string; userShare: BigNumber; mimirAmount: BigNumber }
    >;

    Claimed(
      account?: string | null,
      userShare?: null,
      mimirAmount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { account: string; userShare: BigNumber; mimirAmount: BigNumber }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Received(address,uint256)"(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    Received(
      account?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { account: string; amount: BigNumber }
    >;

    "SaleStarted(uint256,uint256)"(
      saleStatTime?: null,
      saleEndTime?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { saleStatTime: BigNumber; saleEndTime: BigNumber }
    >;

    SaleStarted(
      saleStatTime?: null,
      saleEndTime?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { saleStatTime: BigNumber; saleEndTime: BigNumber }
    >;
  };

  estimateGas: {
    END(overrides?: CallOverrides): Promise<BigNumber>;

    MIMIRTOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    MINIMAL_PROVIDE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    START(overrides?: CallOverrides): Promise<BigNumber>;

    TOTAL_DISTRIBUTE_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    provided(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTokenForSale(
      mimirToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalProvided(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawProvidedETH(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawUnclaimedMimir(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    END(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIMIRTOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MINIMAL_PROVIDE_AMOUNT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    START(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TOTAL_DISTRIBUTE_AMOUNT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    provided(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTokenForSale(
      mimirToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startSale(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalProvided(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawProvidedETH(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawUnclaimedMimir(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
