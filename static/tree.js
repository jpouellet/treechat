
window.addEventListener('load', function() {
	var tree_area = document.getElementById('tree');
	var stack_area = document.getElementById('stack');

//	var data = [[[[[],[]]],[],[[[],[]]]]];
var data = [];
function gen(parent, depth) {
	if (!--depth)
		return;

	var child = [];
	parent.push(child)
	if (Math.random() > 0.95)
		return;
	if (Math.random() < 0.1)
		gen(parent, depth);
	gen(child, depth);
}
gen(data, 50);

function getLorem() {
	return lorems[Math.floor(Math.random() * lorems.length)];
}

// generate stack
var n = Math.ceil(Math.random() * 7) + 3;
for (var i = 0; i < n; i++) {
	var p = document.createElement('p');
	p.textContent = getLorem();
	stack_area.appendChild(p);
}

var from = false;
	function buildTree(array, elem) {
from = !from;
		var node = document.createElement('div');
		node.className = 'node';
		elem.appendChild(node);

		var msg = document.createElement('div');
		msg.className = 'msg ' + (from ? 'you' : 'them');
		node.appendChild(msg);

		var who = document.createElement('div');
		who.textContent = from ? 'You' : 'Them';
		who.className = 'who';
		msg.appendChild(who);

		var content = document.createElement('div');
		content.className = 'content';
		msg.appendChild(content);

		var line = document.createElement('p');
		line.textContent = getLorem();
		content.appendChild(line);

		if (array.length > 0) {
			var row = document.createElement('div');
			row.className = 'row';
			elem.appendChild(row);

			array.forEach(function(child) {
				var col = document.createElement('div');
				col.className = 'col';
				row.appendChild(col);

				buildTree(child, col);
			});
		}
	}
	var col = document.createElement('div');
	col.className = 'col';
	tree_area.appendChild(col);
	buildTree(data, col);
});
