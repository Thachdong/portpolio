export type TServerActionResponse<T> =
  | {
      isSuccess: true;
      data: T;
    }
  | {
      isSuccess: false;
      data: string;
    };

export type TServerAction<TInput, TOutput> = (
  input: TInput
) => Promise<TOutput>;
