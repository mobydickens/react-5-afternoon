let initialState = {
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home',
  city: '',
  propToBeUsedOn: '',
  found: "false",
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  firstName: '',
  lastName: '',
  email: ''
}

// ACTION TYPES
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const REAL_ESTATE_AGENT = 'REAL_ESTATE_AGENT';
const PROPERTY_COST = 'PROPERTY_COST';
const DOWN_PAYMENT = 'REAL_ESTATE_AGENT';
const CREDIT = 'CREDIT';
const HISTORY = 'HISTORY';
const ADDRESS_ONE = 'ADDRESS_ONE';
const ADDRESS_TWO = 'ADDRESS_TWO';
const ADDRESS_THREE = 'ADDRESS_THREE';
const FIRST_NAME = 'FIRST_NAME';
const LAST_NAME = 'LAST_NAME';
const EMAIL = 'EMAIL';


function reducer(state = initialState, action){
  switch(action.type) {
    case UPDATE_LOAN_TYPE:
      return { ...state, loanType: action.payload }
    case UPDATE_PROPERTY_TYPE:
      return { ...state, propertyType: action.payload }
    case UPDATE_CITY:
      return { ...state, city: action.payload }
    case UPDATE_PROP:
      return { ...state, propToBeUsedOn: action.payload }
    case UPDATE_FOUND:
      return { ...state, found: action.payload }
    case REAL_ESTATE_AGENT:
      return { ...state, realEstateAgent: action.payload }
    case PROPERTY_COST:
      return { ...state, cost: action.payload }
    case DOWN_PAYMENT:
      return { ...state, downPayment: action.payload }
    case CREDIT:
      return { ...state, credit: action.payload }
    case HISTORY:
      return { ...state, history: action.payload }
    case ADDRESS_ONE:
      return { ...state, addressOne: action.payload }
    case ADDRESS_TWO:
      return { ...state, addressTwo: action.payload }
    case ADDRESS_THREE:
      return { ...state, addressThree: action.payload }
    case FIRST_NAME:
      return { ...state, firstName: action.payload }
    case LAST_NAME:
      return { ...state, lastName: action.payload }
    case EMAIL:
      return { ...state, email: action.payload }
    default:
      return state;
  }
}


// ACTION CREATORS

export function email(email) {
  return {
    type: EMAIL,
    payload: email
  }
}

export function lastName(name) {
  return {
    type: LAST_NAME,
    payload: name
  }
}

export function firstName(name) {
  return {
    type: FIRST_NAME,
    payload: name
  }
}

export function addressThree(address) {
  return {
    type: ADDRESS_THREE,
    payload: address
  }
}

export function addressTwo(address) {
  return {
    type: ADDRESS_TWO,
    payload: address
  }
}

export function addressOne(address) {
  return {
    type: ADDRESS_ONE,
    payload: address
  }
}

export function history(history) {
  return {
    type: HISTORY,
    payload: history
  }
}

export function credit(credit) {
  return {
    type: CREDIT,
    payload: credit
  }
}

export function downPayment(payment) {
  return {
    type: DOWN_PAYMENT,
    payload: payment
  }
}

export function propertyCost(cost) {
  return {
    type: PROPERTY_COST,
    payload: cost
  }
}

export function realEstateAgent(agent) {
  return {
    type: REAL_ESTATE_AGENT,
    payload: agent
  }
}
export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  }
}

export function updatePropertyType(property) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  }
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}

export function updateProp(prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  }
}

export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  }
}

export default reducer;