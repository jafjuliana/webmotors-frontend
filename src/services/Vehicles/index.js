import { vehicles } from "../api";

export default class Vehicles {
  static async getMakes() {
    try {
      const resp = await vehicles.getMakes();
      return resp;
    } catch (e) {
      return e.response;
    }
  }

  static async getModels(makeId) {
    try {
      const resp = await vehicles.getModels(makeId);
      return resp;
    } catch (e) {
      return e.response;
    }
  }

  static async getVersions(modelId) {
    try {
      const resp = await vehicles.getVersions(modelId);
      return resp;
    } catch (e) {
      return e.response;
    }
  }
}
