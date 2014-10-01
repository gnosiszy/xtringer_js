describe('Xtringer', function() {
    it('should be empty', function() {
        expect(''.xParse()).toEqual('');
    });
	
    it('should be \"teste\"', function() {
        expect('{name}'.xParse({ name:'teste' })).toEqual('teste');
    });
	
    it('should be \"teste teste\"', function() {
        expect('{name} {name}'.xParse({ name:'teste' })).toEqual('teste teste');
    });
	
    it('should be \"teste testado\"', function() {
        expect('{name} {last_name}'.xParse({ name:'teste', last_name: 'testado' })).toEqual('teste testado');
    });
	
    it('should be \"testando { teste\"', function() {
        expect('testando {\\{} {name}'.xParse({ name:'teste' })).toEqual('testando { teste');
    });
	
    it('should be \"testando } teste\"', function() {
        expect('testando {\\} {name}'.xParse({ name:'teste' })).toEqual('testando } teste');
    });
	
    it('should be \"testando { } teste\"', function() {
        expect('testando {\\{} {\\} {name}'.xParse({ name:'teste' })).toEqual('testando { } teste');
    });
	
    it('should be \"testando teste testado\"', function() {
        expect('testando {name}'.xParse({ first_name:'teste', last_name:'testado', name:'{first_name} {last_name}' })).toEqual('testando teste testado');
    });
	
    it('should be \"teste\"', function() {
        expect('{name}'.xParse(function(name) { return { name:'teste' }[name] })).toEqual('teste');
    });
});