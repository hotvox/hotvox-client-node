import OpenAI from 'openai';

// Use Hotvox like you'd use OpenAI
export class Hotvox extends OpenAI {
  constructor() {
    super({
      // api key is not necessary for hotvox
      // openai library requires it, so we just put a placeholder
      apiKey: 'hotvox-api-key',
      baseURL: 'http://openai.hotvox.local/v1/',
    });
  }
}

export default Hotvox;
