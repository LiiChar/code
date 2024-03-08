String.prototype.camelCase = camelCase;
console.log(str.toLowerCase()); str = 'Some UpPerCAsE LeTTeRs!!!';
const toLowerCase = function(){
   let str = '';
   for(let i = 0; i < this.length; i++){
      const ascii = this[i].charCodeAt();
      if(ascii >= 65 && ascii <= 90){
         str += String.fromCharCode(ascii + 32);
      }else{
         str += this[i];
      };
   };
   return str;
};

'asda'.camelCase()