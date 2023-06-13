export type ServiceMessage = { message: string };

export type ServiceResponseError = {
  status: number,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: null,
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
