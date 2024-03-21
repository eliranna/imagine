import { apiHandler } from '_helpers/server/api';

const url = 'https://api.mymidjourney.ai/api/v1/midjourney/button';
const token = process.env.NEXT_PUBLIC_MY_MIDJOURNEY_KEY

module.exports = apiHandler({
    POST: mutate
});

async function mutate(req: Request) {

    const body = await req.json();
    console.log(body)

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ 
        messageId: body.messageId,
        button: body.button
       })
    };

    return await fetch(url, config)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        return data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        return;
      });
      
}