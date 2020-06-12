import { api } from "./instance";

async function getMakes() {
  try {
    return await api.get(`/Make`, {
      headers: {
        Accept: "application/json",
      },
    });
  } catch (e) {
    return e.response;
  }
}

async function getModels(makeId) {
  if (!makeId) {
    throw new Error("The make id is required");
  }

  try {
    return await api.get(
      `/Model`,
      {
        params: {
          MakeID: makeId,
        },
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
  } catch (e) {
    return e.response;
  }
}

async function getVersions(modelId) {
  if (!modelId) {
    throw new Error("The model id is required");
  }

  try {
    return await api.get(
      `/Version`,
      {
        params: {
          ModelID: modelId,
        },
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
  } catch (e) {
    return e.response;
  }
}

export default {
  getMakes,
  getModels,
  getVersions,
};
