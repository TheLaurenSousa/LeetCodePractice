var numIslands = function(grid) {
    var count = 0;
    for(var row=0; row <grid.length; row++){
        for(var col=0; col < grid[row].length; col++){
            if(grid[row][col] == "1"){
                count ++;
                explore(row, col, grid);
            }
        }
    }
    return count;
};

var explore = function(row, col, grid){
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === "0"){
        return
    }
    grid[row][col] = "0";
    explore(row, col+1, grid);
    explore(row, col-1, grid);
    explore(row+1, col, grid);
    explore(row-1, col, grid);
}
