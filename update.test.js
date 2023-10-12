'use strict';

const updatePokemonCard = require('./index.js');

describe('Update Pokemon Card Lambda Function', () => {
  it('should update an existing Pokemon card', async () => {
    const event = {
      body: {
        id: 1,
        name: 'Charizard',
        type: 'Fire',
        shiny: false,
      },
    };

    const result = await updatePokemonCard.handler(event);

    expect(result.statusCode).toBe(200);

    const body = JSON.parse(result.body);
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('name', 'Charizard');
    expect(body).toHaveProperty('type', 'Fire');
    expect(body).toHaveProperty('shiny', false);
  });
});
