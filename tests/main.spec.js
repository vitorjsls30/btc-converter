const expect = require('chai').expect; //commonjs

const exec = require('child_process').exec;
const btcConverter = 'node ./src/main.js';
const pkg = require('../package.json');

describe('Main CLI', () => {

    it('should return version of btc-converter', (done) => { 
        exec(`${btcConverter} --version`, (err, stdout, stderr) => {
            if (err) {
                throw err;
            }
            console.log(pkg.version);
            expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
            done();
        });
    });
});
