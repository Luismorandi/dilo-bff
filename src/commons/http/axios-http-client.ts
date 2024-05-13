import axios from "axios";
import { IHttpClient } from "./http-interface";

export class AxiosHTTPClient implements IHttpClient {
  async get(url: string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async post(_url: string, data: any) {
    return data 
  }

  async put(_url: string, data: any) {
    return data 
  }
}