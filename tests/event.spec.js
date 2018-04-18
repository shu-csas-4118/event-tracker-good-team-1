'use strict'

const Event = require('../models/event')
const expect= require('chai').expect

describe('Event module',()=>{
    describe('"getEventName"', ()=>{
        it('should have a getEventName method', () => {
            expect(event.getEventName(1)).to.be.a('string');
        })
    })

    
})//to test in command prompt 'npm test'