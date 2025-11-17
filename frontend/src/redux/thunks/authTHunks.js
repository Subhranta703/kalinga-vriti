import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

// send credentials   backend
export const loginUser = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const res = await api.post("/auth/login", credentials);
    return res.data; // expect { user, token }
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

export const signupUser = createAsyncThunk("auth/signup", async (data, { rejectWithValue }) => {
  try {
    const res = await api.post("/auth/register", data);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

// Social logins: frontend sends provider token to backend -> backend verifies and returns   jwt
export const socialLogin = createAsyncThunk("auth/social", async ({ provider, token }, { rejectWithValue }) => {
  try {
    const res = await api.post(`/auth/${provider}`, { token });
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

// Firebase phone OTP will return a token or uid to exchange on backend similarly.
