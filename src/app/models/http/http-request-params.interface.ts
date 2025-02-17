/**
 * @name HttpRequestParamsInterface
 * @description
 * HttpClient requests parameters for get/post/put etc operations
 */
export type HttpRequestParamsInterface<> = {
  url: string;
  body?: any;
  responseType?: string;
};
