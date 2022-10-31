class cat {
  constructor() {
    this.state = new HappyState();
  }
  think() {
    return this.state.think();
  }

  setMood(mood) {
    const aMood = mood.toLowerCase();
    switch (aMood) {
      case "happy":
        this.state = new HappyState();
        break;
      case "sad":
        this.state = new SadState();
        break;
      default:
        this.state = {
          think() {
            return "I am hungry";
          },
        };
    }
  }
}

class HappyState {
  think() {
    return "I am happy.";
  }
}

class SadState {
  think() {
    return "I am sad.";
  }
}

const Midnight = new cat();

console.log(Midnight.think());

Midnight.setMood("Sad");

console.log(Midnight.think());

Midnight.setMood("aksdljfalksdjf");

console.log(Midnight.think());
