import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
const {expect} = require('chai')
import db from './server/db'

const adapter = new Adapter()
enzyme.configure({ adapter })

before(() => {
  return db.sync({force: true})
})

afterEach(() => {
  return db.sync({force: true})
})
