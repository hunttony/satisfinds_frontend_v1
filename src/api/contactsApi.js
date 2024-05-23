
const apiUrl = '52.41.36.82:10000' || '54.191.253.12:10000' || '44.226.122.3:10000';


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