// Integration test for API endpoints
const request = require('supertest');
const app = require('../../src/main/backend/app');

describe('API Integration Tests', function() {
    it('should return dependencies', function(done) {
        request(app)
            .get('/dependencies')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                // Add assertions here
                done();
            });
    });

    it('should return health status', function(done) {
        request(app)
            .get('/health')
            .expect(200)
            .expect({ status: 'UP' }, done);
    });
});