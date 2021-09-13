import { CaloriesInitialDto } from "./caloriesReducer.dto";
import { userReducerInitial } from "./userreducer.dto";

export type StoreDto = {
    userReducer: userReducerInitial;
    caloryReducer: CaloriesInitialDto
}