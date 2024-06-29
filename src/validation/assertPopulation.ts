import { Types } from "mongoose";

export function assertPopulation<T>(
  populatedProperty:
    | T
    | Types.ObjectId
    | T[]
    | Types.ObjectId[]
    | (T | Types.ObjectId)[],
): asserts populatedProperty is T extends any[] ? T[number][] : T {
  if (populatedProperty instanceof Types.ObjectId) {
    throw new Error("Field is not populated.");
  }
}
