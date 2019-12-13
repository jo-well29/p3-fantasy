import api from "./apiConfig";

export const getCoderByUserId = async (id) => {
  try {
    const resp = await api.get(`/coders/${id}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getRosterFromUser = async () => {
  try {
    const resp = await api.get("/items");
    return resp.data.items;
  } catch (error) {
    throw error;
  }
};

export const getCoders = async () => {
  try {
    const resp = await api.get("/coders");
    return resp.data.coders;
  } catch (error) {
    throw error;
  }
};

export const updateCoder = async (coderId, userId) => {
  console.log("user id is", userId)
  try {
    const resp = await api.put(`/users/${userId.id}/coders/${coderId}`);
    return resp.data.coders;
  } catch (error) {
    throw error;
  }
};

export const removeCoder = async (coderId) => {
  try {
    const resp = await api.put(`/users/NULL/coders/${coderId}`);
    return resp.data.coders;
  } catch (error) {
    throw error;
  }
}

export const trainCoder = async(coderId, raise) => {
  try{
    const resp = api.put(`/raise/coders/${coderId}`, raise);
    return resp.data;
  }catch (error) {
    throw error;
  }
}