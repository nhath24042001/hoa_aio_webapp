/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @name HttpRequestParamsInterface
 * @description
 * HttpClient requests parameters for get/post/put etc operations
 */

// !TODO: Modify type any
export interface HttpRequestParamsInterface<> {
  url: string
  body?: any
  responseType?: string
}
