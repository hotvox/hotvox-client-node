import 'openai/shims/node';
import OpenAI from 'openai';

export class Hotvox extends OpenAI {
  constructor() {
    super({
      apiKey: 'hotvox-api-key',
      baseURL: 'http://openai.hotvox.local/v1/',
    });
  }
}

export default Hotvox;
