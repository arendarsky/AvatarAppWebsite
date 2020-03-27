import { Module } from "vuex"
import { IRootState } from "@/store"
import { mutations } from "./mutations"
import { IUserState, initialState } from "./state"

export * from "./state"

export const store: Module<IUserState, IRootState> = {
    state: initialState,
    mutations
}