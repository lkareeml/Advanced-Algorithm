function checkCashRegister(price, cash, cid) {
  var change = (cash - price).toFixed(2);
  var cidsum = 0, xB = [];
  var CoinNum = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  
  for(var i =0;i<9;i++){cidsum += cid[i][1];}
  if (cidsum < change ){ return "Insufficient Funds";}
  if (cidsum == change ){ return "Closed";}

  for(var z=8;z>=0;z--){
    if(change >= CoinNum[z][1] && cid[z][1] >= CoinNum[z][1]){
      var giveChange = 0;
      while(change >= CoinNum[z][1] && cid[z][1] >= CoinNum[z][1]){
        change -= CoinNum[z][1];
        change = change.toFixed(2);
        cid[z][1] -= CoinNum[z][1];
        giveChange += CoinNum[z][1];
      }
      xB.push([CoinNum[z][0], giveChange]);
    }
}
  
if(change != 0) { return "Insufficient Funds";}
  return xB; 
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
