import axios from "axios";
import * as serviceHelper from "./serviceHelper";

const apiUrl = "/api/users";

const add = payload => {
  const config = {
    method: "POST",
    url: apiUrl,
    crossdomain: false,
    data: payload,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(response => {
      return { data: response.data, payload };
    })
    .catch(serviceHelper.onGlobalError);
};

const getById = id => {
  const config = {
    method: "GET",
    url: apiUrl + "/" + id,
    crossdomain: false,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const updateProfile = payload => {
  const config = {
    method: "PUT",
    url: apiUrl + "/profile/" + payload.id,
    crossdomain: true,
    data: payload,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return (
    axios(config)
      .then(() => payload)
      //.then(serviceHelper.onGlobalSuccess)
      .catch(serviceHelper.onGlobalError)
  );
};

const deleteUser = id => {
  const config = {
    method: "DELETE",
    url: apiUrl + "/" + id,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  };
  return (
    axios(config)
      //.then(() => payload)
      .then(serviceHelper.onGlobalSuccess)
      .catch(serviceHelper.onGlobalError)
  );
};

export { add, getById, updateProfile, deleteUser };
