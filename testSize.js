var grid = [
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 ],
    [ 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0 ]
];

var Pathfinding = require('.');

var finder = new Pathfinding(grid, 2);
var path = finder
    .setFrom(1, 1)
    .setTo(13, 2)
    .find();

console.log(path);

path = finder
    .setTo(1, 1)
    .find();

console.log(path);
