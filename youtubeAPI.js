import axios from "axios";

const API_KEY = "AIzaSyAAnw3gSxOMbO0gEGsRifovYgPPzlUavbM"; // Replace with your actual YouTube Data API key

export const getChannelIdFromCustomUrl = async (customUrl) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${customUrl}&key=${API_KEY}`
    );

    if (response.data.items.length > 0) {
      return response.data.items[0].id;
    } else {
      return "Channel not found";
    }
  } catch (error) {
    console.error("Error fetching channel ID:", error.message);
    if (error.response && error.response.data) {
      console.error("Error response data:", error.response.data);
    }
    return "Error fetching channel ID";
  }
};

export const getChannelViews = async (channelId) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`
    );

    if (response.data.items.length > 0) {
      return response.data.items[0].statistics.viewCount;
    } else {
      return "Channel not found";
    }
  } catch (error) {
    console.error("Error fetching channel views:", error.message);
    if (error.response && error.response.data) {
      console.error("Error response data:", error.response.data);
    }
    return "Error fetching channel views";
  }
};
