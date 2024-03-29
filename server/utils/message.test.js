var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMesage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Tom';
        var latitude = 1;
        var longitude = 2;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message.from).toBe('Tom');
        expect(message.url).toBe('https://www.google.com/maps?q=1,2');
    });
});
