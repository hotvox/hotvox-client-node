import Hotvox from '../src';
import OpenAI from 'openai';

describe('index', () => {
  describe('Hotvox', () => {
    it('should be a class', () => {
      expect(Hotvox).toBeInstanceOf(Function);
    });

    it('should have a constructor', () => {
      expect(Hotvox.prototype.constructor).toBeDefined();
    });

    it('should extend OpenAI', () => {
      const instance = new Hotvox();
      expect(instance).toBeInstanceOf(OpenAI);
    });

    it('should initialize without errors', () => {
      expect(() => new Hotvox()).not.toThrow();
    });

    it('should set the correct baseURL', () => {
      const instance = new Hotvox();
      expect(instance.baseURL).toBe('http://openai.hotvox.local/v1/');
    });
  });
});
