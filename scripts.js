
function Button(text) {
	this.text = text || "Hello";
};

Button.prototype = {
	create: function() {
		var self = this;	
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element); //lub this.$element.appendTo($('body'));
	}
}

var btn1 = new Button("Hello 1");
var btn2 = new Button("Hello 2");
var btn3 = new Button("Hello 3");

btn1.create();
btn2.create();
btn3.create();