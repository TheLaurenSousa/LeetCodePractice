var floodFill = function(image, sr, sc, color) {
    var row = image.length;
    var col = image[0].length;
    var original = image[sr][sc];
    if(original === color) return image;

    var dfs = function(r,c){
        if(image[r][c] === original){
            image[r][c] = color;
            if(r >= 1) dfs(r-1, c);
            if(r+1 < row) dfs(r+1, c);
            if(c >= 1) dfs(r, c-1);
            if(c+1 < col) dfs(r, c+1);
        }
    }
    dfs(sr, sc);
    return image;
};