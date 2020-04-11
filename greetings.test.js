const greet = require('./greetings');

test('interpolates name', () => {
    expect(greet("luis")).toBe("Hello, luis.");
  });
  
  test('when name is null', () => {
    expect(greet(null)).toBe("Hello, my friend.");
  });
  
  test('when name is all caps', () => {
    expect(greet("LUIS")).toBe("HELLO, LUIS!");
  }); 

  test('when  2 names', () => {
    expect(greet(["luis","leia"])).toBe("Hello,luis and leia.");
  }); 

  test('when  3 or more names', () => {
    expect(greet(["luis","leia","julia"])).toBe("Hello,luis ,leia , and julia.");
  });  
  test('when mixed names', () => {
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
  });  
  


  test('when string contains a comma ', () => {
    expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
  });  

  test('when string contains a  double quotes ', () => {
    expect(greet(["Bob", "\"Charlie, Dianne\""])).toBe("Hello, Bob and Charlie, Dianne.");
  });  