declare module "redux-fixed" {
  export type ThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S, extraArgument: E) => R;

  export interface Dispatch<S> {
    <R, E>(asyncAction: ThunkAction<R, S, E>): R;
  }
  export interface Dispatch<S> {
    <A>(action:A &{type:any}): A &{type:any};
  }
}
