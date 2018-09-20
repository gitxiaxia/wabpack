let username = 'lemon';

let person = {
	username,
	say(){
		console.log(username);
	},

	eat:function(){
		console.log(`hello every one, my name is ${this.username}`);
	}
}

let {username:myName,say} = person;

console.log(myName);
// say();
person.eat();
person.say();