import { TServerAction, TServerActionResponse } from '../types/server-action';

export function createServerAction<TInput, TOutput>(
  action: TServerAction<TInput, TOutput>
): TServerAction<TInput, TServerActionResponse<TOutput>> {
  return async (input: TInput) => {
    try {
      const result = await action(input);

      return { isSuccess: true, data: result };
    } catch (error) {
      // Log the error
      console.error('Server Action Error:', error);

      // Return a failure response
      return {
        isSuccess: false,
        data:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred',
      };
    }
  };
}
