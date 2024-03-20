import { apiHandler } from '_helpers/server/api';

module.exports = apiHandler({
    GET: progress
});

async function progress(req: Request, { params: { messageId } }: any) {
    const url = `https://api.mymidjourney.ai/api/v1/midjourney/message/${messageId}`;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU3NTEsImVtYWlsIjoiZWxpcmFuLm5hdGFuLjg3QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZWxpcmFuLm5hdGFuLjg3QGdtYWlsLmNvbSIsImlhdCI6MTcxMDg5MzQ3M30.9LyjJykg9T-8Ie5rx_0t5bzhgstMIvCbnLMPliQwgmM';
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