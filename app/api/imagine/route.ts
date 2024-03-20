import joi from 'joi';
import { apiHandler } from '_helpers/server/api';

module.exports = apiHandler({
    POST: imagine
});

async function imagine(req: Request) {
    //const body = await req.json();
    const url = 'https://api.mymidjourney.ai/api/v1/midjourney/imagine';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU3NTEsImVtYWlsIjoiZWxpcmFuLm5hdGFuLjg3QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZWxpcmFuLm5hdGFuLjg3QGdtYWlsLmNvbSIsImlhdCI6MTcxMDg5MzQ3M30.9LyjJykg9T-8Ie5rx_0t5bzhgstMIvCbnLMPliQwgmM';
    const prompt = 'A little cat running on the grass';
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ prompt })
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



/*
imagine.schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
});
*/