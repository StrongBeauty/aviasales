export const MESSAGES = {
  homepage: {
    homeLinks: {
      homeLink: 'Home',
      authLink: 'Authorization',
      informationLink: 'Information',
    },
    submitBtn: 'Search',
  },
  authenticationForm: {
    formTitle: 'Account Login',
    username: 'Username',
    password: 'Password',
    checkboxForm: 'Remember Me',
    buttonName: 'Log in',
    forgotLink: 'Forgot Password?',
    errorsMessage: {
      username: 'Your name must contain 2 or more characters...',
      password: 'Your password is less than 5 characters...',
    },
  },
  registrationForm: {
    formTitle: 'Register Account',
    username: 'Username',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    buttonName: 'Register',
    email: 'Email Address',
    errorsMessage: {
      username: 'Your name must contain 2 or more characters...',
      password: 'Your password is less than 5 characters...',
      email: 'Your email address must be at least 5 characters long and the @ symbol....',
      passwordConfirmationInput: 'Please confirm password!',
      passwordConfirmationError: 'Passwords should match!',
      patternEmail:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
  },
  cardFlight: {
    buttonName: 'Select',
    infDetails: 'Inflight details',
    fromTitle: 'From',
  },
  filterForm: {
    classFilter: ['all', 'economy', 'business'],
    labelFrom: 'From',
    labelTo: 'To',
    labelClass: 'Class',
    buttonName: 'Search',
  },
  header: {
    menuItems: [
      { title: 'Order history', link: '' },
      { title: 'Admin page', link: '' },
      { title: 'Profile', link: '' },
    ],
    menuItemExit: { title: 'Exit', link: './' },
  },
  tickedCard: {
    buttons: {
      buttonBuy: 'Buy',
      buttonBook: 'Book',
    },
  },
  homeForm: {
    labelFrom: 'From',
    labelTo: 'To',
    buttonName: 'Search',
  },
} as const;

/* type MessagesType = {
  homepage: HomePageType;
  authenticationForm: AuthenticationFormType;
  registrationForm: RegistrationFormType;
  cardFlight: CardFlightType;
  filterForm: FilterFormType;
  header: HeaderType;
  tickedCard: TickedCardType;
  homeForm: HomeFormType;
};

type HomePageType = {
  homeLinks: HomeLinksType;
  submitBtn: string;
};

type HomeLinksType = {
  homeLink: string;
  authLink: string;
  informationLink: string;
};

type AuthenticationFormType = {
  formTitle: string;
  username: string;
  password: string;
  checkboxForm: string;
  buttonName: string;
  forgotLink: string;
  errorsMessage: ErrorsMessageAuthenticationFormType;
};

type ErrorsMessageAuthenticationFormType = {
  username: string;
  password: string;
};

type RegistrationFormType = {
  formTitle: string;
  username: string;
  password: string;
  confirmPassword: string;
  buttonName: string;
  email: string;
  errorsMessage: ErrorsMessageRegistrationFormType;
};

type ErrorsMessageRegistrationFormType = {
  username: string;
  password: string;
  email: string;
  passwordConfirmationInput: string;
  passwordConfirmationError: string;
  patternEmail: RegExp;
};

type CardFlightType = {
  buttonName: string;
  infDetails: string;
  fromTitle: string;
};

type FilterFormType = {
  classFilter: string[];
  labelFrom: string;
  labelTo: string;
  labelClass: string;
  buttonName: string;
};

type HeaderType = {
  menuItems: MenuItemType[];
  menuItemExit: MenuItemExitType;
};

type MenuItemExitType = {
  title: string;
  link: string;
};

type MenuItemType = {
  title: string;
  link: string;
};

type TickedCardType = {
  buttons: ButtonsType;
};

type ButtonsType = {
  buttonBuy: string;
  buttonBook: string;
};

type HomeFormType = {
  labelFrom: string;
  labelTo: string;
  buttonName: string;
}; */
