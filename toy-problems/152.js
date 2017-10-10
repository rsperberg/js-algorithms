var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let message = '';
  if (firstName in customerData) {
    if (customerData[firstName].visits > 1) {
      message = `Welcome back, ${firstName}! So glad to see you again!`;
    } else {
      message = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    }
  } else {
    message = 'Welcome! Is this your first time?'
  }
  return message;
}

// Amanda Loftus
function greetCustomer(firstName) {
  if (!customerData[firstName]) {
    return 'Welcome! Is this your first time?';
  } else {
    var visits = customerData[firstName].visits;
  }
  if (visits === 1) {
    return 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
  } else if ( visits > 1) {
    return 'Welcome back, ' + firstName + '! So glad to see you again!';
  }
}

// Jacqueline Leung
function greetCustomer(firstName) {
  for(var key in customerData) {
    if(customerData[firstName] === undefined) {
      return 'Welcome! Is this your first time?';
    } else if(customerData[firstName].visits > 1) {
      return 'Welcome back, ' + firstName + '! So glad to see you again!';
    }
    return 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
  }
}

// Hakjin Kim
function greetCustomer(firstName) {
  if(customerData.hasOwnProperty(firstName)){
    if(customerData[firstName].visits>1){
      return 'Welcome back, '+firstName+'! So glad to see you again!';
    } else{
      return 'Welcome back, '+firstName+'! We\'re glad you liked us the first time!';
    }
  } else{
    return 'Welcome! Is this your first time?';
  }
}

// Michael Diodoro
function greetCustomer(firstName) {
  for (var key in customerData){
    if (firstName === key) {
      if (customerData[key]['visits'] === 1) {
        return 'Welcome back,' + ' ' + key + '!' + ' ' + "We're glad you liked us the first time!";
      } else if (customerData[key]['visits'] > 1) {
        return 'Welcome back,' + ' ' + key + '!' + ' ' + "So glad to see you again!";
      }
    }
  }
  return 'Welcome! Is this your first time?';
}

// Sukhpaul Nijjar
function greetCustomer(firstName) {
  if (!customerData[firstName]) {
    return 'Welcome! Is this your first time?'
  } else if (customerData[firstName].visits === 1) {
    return 'Welcome back, ' + firstName + '! We\'re glad you liked us the first time!';
  } else if (customerData[firstName].visits >= 2) {
    return 'Welcome back, ' + firstName + '! So glad to see you again!';
  }
}
