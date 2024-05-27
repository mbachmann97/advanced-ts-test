// branded types / custom validation & asserts

type EmailAddress = string & { _type: 'EmailAddress' };

function isEmailAddress(email: string): email is EmailAddress  {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

function assertEmailAddress(email: string): asserts email is EmailAddress {
  if (!isEmailAddress(email)) {
    throw new Error('Invalid email address');
  }
};

const exampleIfEmail = (email: string) => {
  email = email
  if (isEmailAddress(email)) {
    console.log('Email:', email);
  } else {
    console.log('Not an email:', email);
  }
}

const exampleAssertEmail = (email: string) => {
  email = email
  assertEmailAddress(email);
  console.log('Email:', email);
}

exampleIfEmail("test@web.de");
exampleAssertEmail("test@gmail.com");