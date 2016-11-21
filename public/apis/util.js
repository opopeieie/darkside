/**
 * Randomly generated 7 digit ID
 * @method randomID
 * @param {number} n how many digits
 * @returns {String} n digits
 */
export default class Util{
    static randomId(n){
        var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z'];
        var res = "";
        for(var i = 0; i < n ; i ++) {
            var id = Math.ceil(Math.random()*24);
            res += chars[id];
        }
        return res;
    }




    
    static getStyle(componentType){

    }


}