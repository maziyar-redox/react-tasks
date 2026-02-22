import type { Dispatch, SetStateAction } from "react";

export type ProductDataType = {
    Id: number;
    Title: string;
    Description: string;
    Price: number;
};

export type ProductStateType = {
    setStore: Dispatch<SetStateAction<number>>;
};