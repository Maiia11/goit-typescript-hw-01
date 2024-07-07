type Users = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<Users>): Users  {
    const defaultUser: Users = {
        name: "Maiia",
        surname: "Kulinich",
        email: "",
        password: ''
    };
    return { ...defaultUser, ...initialValues };
}

 createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});



