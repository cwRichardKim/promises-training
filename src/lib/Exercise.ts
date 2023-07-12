import { CreatePromise } from "./createPromise";
import { Ref } from "./ref";
import { skipExerciseSymbol } from "./skipExercise";

export type MakeExercise = {
  (context: ExerciseContext): Exercise;
  skipExerciseSymbol?: typeof skipExerciseSymbol;
};

export type ExerciseContext = {
  createPromise: CreatePromise;
  ref: Ref;
};

export type Exercise = () => Promise<void>;
