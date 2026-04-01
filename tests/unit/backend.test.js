const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Unit test for dependency reading
describe('Dependency Mapper', function() {
    it('should read dependency.json correctly', function() {
        const data = fs.readFileSync(path.join(__dirname, '../../main/backend/dependency.json'), 'utf8');
        const dependencies = JSON.parse(data);
        assert(dependencies.frontend);
        assert(Array.isArray(dependencies.frontend));
    });
});