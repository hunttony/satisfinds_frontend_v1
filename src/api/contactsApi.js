
const apiUrl = process.env.NODE_ENV === 'production' ? 'https://satisfinds-backend-v1.onrender.com' : 'http://localhost:10000';


export const addContact = async ( contactData) => {
  try {
    // Make an API request to update user data
    const response = await fetch(`${apiUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    console.log('p1: contactData: ',contactData);
    if (!response.ok) {
      throw new Error('Failed to update user data');
    }
    const addedContactData = await response.json();
    
    return addedContactData;   

  } catch (error) {
    console.error('Error updating user data:', error.message);
    throw error;
  }
};