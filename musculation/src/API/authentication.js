async function postInscription(data) {
    try {
        const response = await fetch('http://localhost:3001/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: data })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Une erreur est survenue lors de l\'inscription.');
        }

        return await response.json();
    } catch (error) {
        console.error('Error during inscription:', error.message);
        throw error;
    }
}

async function postConnect(data) {
    try {
      const response = await fetch('http://localhost:3001/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Email ou mot de passe incorrect.');
      }
  
      const responseData = await response.json();
      const { user, token } = responseData;
  
      return { user, token };
    } catch (error) {
      console.error('Error during connection:', error.message);
      throw error;
    }
}
  

function postDisconnect() {
    return new Promise(() => console.log(`disconnect done`));
}

export {postConnect, postInscription, postDisconnect};