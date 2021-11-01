import axios, { AxiosError, AxiosResponse } from "axios";

const AXIOS_BASE_URL = process.env.AXIOS_BASE_URL;

export const client = axios.create({
  baseURL: AXIOS_BASE_URL || "http://localhost:3000",
});

/**
 * リクエスト成功
 */
type SuccessResults<T> = {
  status: "success";
  response: AxiosResponse<T>;
};
/**
 * セッション切れ
 */
type OutOfSessionResults = {
  status: "out-of-session";
  response: AxiosResponse;
};
/**
 * リクエスト失敗（バリデーションエラーなど開発が意図したもの）
 */
type WarningResults<T> = {
  status: "warning";
  response: AxiosResponse<T>;
};
/**
 * 意図しないサーバーエラー
 */
type DangerResults = {
  status: "danger";
  response: AxiosResponse<unknown>;
};

export type RequestResultsType<T, U = unknown> = Promise<
  SuccessResults<T> | OutOfSessionResults | WarningResults<U> | DangerResults
>;

export const requestResults = async <
  /**
   * リクエスト成功時のレスポンス内容
   */
  T,
  /**
   * バリデーションエラーなど、開発が意図したリクエスト失敗時のレスポンス内容
   */
  U = unknown
>(
  /**
   * axiosのリクエスト
   */
  callback: Promise<AxiosResponse<T>>
) => {
  const response = callback
    .then((response) => {
      // 成功
      return {
        status: "success",
        response: response,
      } as SuccessResults<T>;
    })
    .catch((error: AxiosError) => {
      if (error.response?.status === 401) {
        // ログインエラー
        return {
          status: "out-of-session",
          response: error.response,
        } as OutOfSessionResults;
      } else if (error.response?.data.error) {
        // 意図したエラー
        return {
          status: "warning",
          response: error.response,
        } as WarningResults<U>;
      } else {
        // 意図しないエラー
        return {
          status: "danger",
          response: error.response,
        } as DangerResults;
      }
    });
  return response;
};
