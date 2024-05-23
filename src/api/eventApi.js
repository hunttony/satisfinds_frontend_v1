// src/api/eventApi.js

const apiUrl = '52.41.36.82:10000';

// Function to fetch user event data from the server
export const fetchUserEventData = async (userEmail) => {
  try {
    // Make an API request to fetch user event data
    const response = await fetch(`${apiUrl}/event/${userEmail}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user event data');
    }
    const eventData = await response.json();
    
    
    return eventData;
  } catch (error) {
    console.error('Error fetching user event data:', error.message);
    throw error;
  }
};

export const fetchUserEventNameData = async (eventname) => {
  try {
    // Make an API request to fetch user event data
    const response = await fetch(`${apiUrl}/events/${eventname}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch user event data');
    }
    const eventData = await response.json();
    
    
    return eventData;
  } catch (error) {
    console.error('Error fetching user event data:', error.message);
    throw error;
  }
};

// Function to update user event data on the server
export const updateUserEvent = async (userEmail, eventData) => {
  try {
    // Make an API request to update user event data
    const response = await fetch(`${apiUrl}/events/${userEmail}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      throw new Error('Failed to update user event data');
    }

    const updatedEventData = await response.json();
    return updatedEventData;
  } catch (error) {
    console.error('Error updating user event data:', error.message);
    throw error;
  }
};

export const createUserEvent = async (userEmail, eventData) => {
  try {
    // Make an API request to update user event data
    const response = await fetch(`${apiUrl}/event/${userEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      throw new Error('Failed to post user event data');
    }

    const createdEventData = await response.json();
    return createdEventData;
  } catch (error) {
    console.error('Error creating user event data:', error.message);
    throw error;
  }
};

export const fetchEventPageData = async () => {
  try {
    // Make an API request to fetch link data
    const response = await fetch(`${apiUrl}/events`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',      },
    });        
    
    if (!response.ok) {
      throw new Error('Failed to fetch event data');
    }
    const eventData = await response.json();
    
    return eventData;
  } catch (error) {
    console.error('Error fetching link data:', error.message);
    throw error;
  }
};

