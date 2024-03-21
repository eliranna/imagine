import { apiHandler } from '_helpers/server/api';

const token = process.env.NEXT_PUBLIC_MY_MIDJOURNEY_KEY

module.exports = apiHandler({
    GET: progress
});

async function progress(req: Request, { params: { messageId } }: any) {
    const url = `https://api.mymidjourney.ai/api/v1/midjourney/message/${messageId}`;
    const config = {
      method: 'GET',
      url,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
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
        return (data)
      
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}