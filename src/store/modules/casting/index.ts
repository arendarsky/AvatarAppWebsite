import { Module } from "vuex"
import { IRootState } from "@/store"
import { mutations } from "./mutations"
import { ICastingState, initialState } from "./state"

export * from "./state"

export const store: Module<ICastingState, IRootState> = {
  state: initialState,
  mutations
}
