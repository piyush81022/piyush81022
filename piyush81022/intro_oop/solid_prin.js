// S represents the Single Responsibility principle

// O represents the Open Closed principle
// L represents the Liskov Substitution principle
// I represents the Interface Segregation principle
// D represents the Dependency Inversion principle



const httpRequest = (url, setState) => {
    http.get(url, (res) => setState.setValues(res))
   };
   //State set in another function
   const setState = {
   setValues: (res) => {
    this.setState({
    key1: res.value1,
    key2: res.value2,
    key3: res.value3
    })
   }
   }
   