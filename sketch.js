/*
Build a state machine
Use a wrapper class and hold a reference one of a collection of state classes.
*/

function StateMachine() {
  // initialize the currentState property with the initial state
  this.currentState = new InitialState();
  this.set_state = function(newState) {
    this.currentState = newState;
  };

  this.update = function() {
    /* Client calls to the wrapper function,
     i.e stateMachineInstance.update(),
     get delegated to the current state object.
     We need a reference back to the wrapper
     so we can change its properties, e.g. currentState
    */
    this.currentState.update(this); // pass the wrapper class "this"
  };
}

function InitialState() {
  this.update = function(wrapper) {
    // do someething
    
    // use a conditionals to decide:
    // - when to move to another state
    // - which state
    if (true) {
      wrapper.set_state(new SecondState());
    }

    if (false) {
      wrapper.set_state(new ThirdState());
    }
  };
}

function SecondState() {
  this.update = function(wrapper) {
    // do someething
    
    // use a conditionals to decide:
    // - when to move to another state
    // - which state
    if (true) {
      wrapper.set_state(new InitalState());
    }

    if (false) {
      wrapper.set_state(new ThirdState());
    }
  };
}

function ThirdState() {
  this.update = function(wrapper) {
    // do someething
    
    // use a conditionals to decide:
    // - when to move to another state
    // - which state
    if (true) {
      wrapper.set_state(new SecondState());
    }

    if (false) {
      wrapper.set_state(new InitialState());
    }
  };
}

let startMillis;
let period;
let stateMachine;

function setup(){
  createCanvas(500, 500);
  stateMachine = new StateMachine();
  noLoop();
}

function draw(){
  background(51);
  // do something regularly
  currentMillis = millis();

  if (currentMillis - startMillis >= period) {
  // call update() on the StateMachine instance
    startMillis = currentMillis;
  }
  
}