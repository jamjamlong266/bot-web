<template>
  <div class="addsubscribe">
    <p>ADD SUBSCRIBE</p>
    <div4>
      <span>Please select the indicator  :</span>
      <form action="">
        <input type="radio"  name="Indicator" value="MACD" id="MACD">
        <label5 for="MACD">MACD</label5>
        <input type="radio" name="Indicator" value="RSI" id="RSI">
        <label6 for="RSI">RSI</label6>
        <input type="radio" name="Indicator" value="SMA" id="SMA">
        <label3 for="SMA">SMA</label3>
        <input type="radio" name="Indicator" value="EMA" id="EMA">
        <label4 for="EMA">EMA</label4>
      </form>
    </div4>
    <div2>
      <label1>Please select your exchange market :</label1>
      <select id="exchange">
        <option value="COINEX">COINEX</option>
        <option value="BINANCE">BINANCE</option>
        <option value="JONVI">JONVI</option>
      </select>
    </div2>
    <div3>
      <label2>Please select your trading pair :</label2>
      <select id="pair">
        <option value="BTCUSDT">BTC/USDT</option>
        <option value="BCHUSDT">BCH/USDT</option>
        <option value="JEUSDT">JE/USDT</option>
        <option value="ETHUSDT">ETH/USDT</option>
        <option value="LTCUSDT">LTC/USDT</option>
        <option value="ETHBTC">ETH/BTC</option>
        <option value="LTCBTC">LTC/BTC</option>
        <option value="BCHBTC">BCH/BTC</option>
        <option value="JEBTC">JE/BTC</option>
        <option value="JEeMYR">JE/eMYR</option>
        <option value="BTCeMYR">BTC/eMYR</option>
        <option value="BCHeMYR">BCH/eMYR</option>
        <option value="ETHeMYR">ETH/eMYR</option>
        <option value="USDTeMYR">USDT/eMYR</option>
      </select><br>
      <span3>User ID for the exchange market   :</span3>
        <input type="text" name="User ID" placeholder="Email/Username" id="user_id" ><br>
      <span4>Password for the exchange market :</span4> 
        <input type="text" name="Password" placeholder="Password" id="user_password" ><br>
    </div3>

    <button v-on:click="add" >ADD</button><br>
    <p id="demo"></p>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>

import firebase,{ functions } from 'firebase';

export default {
  name: 'addsubscribe',
  data :function() {
    return {
      
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    add: function() {
      var indicator
      var exchange
      var pair
      var user_id
      var user_password
      
      if(document.getElementById('MACD').checked){
        indicator = document.getElementById("MACD").value;
      }else if(document.getElementById('RSI').checked){
        indicator = document.getElementById("RSI").value;
      }else if(document.getElementById('SMA').checked){
        indicator = document.getElementById("SMA").value;
      }else if(document.getElementById('EMA').checked){
        indicator = document.getElementById("EMA").value;
      }else 
        indicator = "IS EMPTY";

      exchange = document.getElementById('exchange').value;
      pair = document.getElementById('pair').value;
      user_id = document.getElementById('user_id').value;
      user_password = document.getElementById('user_password').value;

      document.getElementById("demo").innerHTML = user_password;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
label1 {
  margin-right: 30px;
}
label2 {
  margin-right: 73px;
}
select {
  margin-left: 10px;
  margin-bottom: 20px;
}
div2 {
  margin-left: 10px;
  text-align: left;
  display: block;
}
div3 {
  margin-left: 10px;
  text-align: left;
  display: block;
  margin-bottom: 40px;
}
label5,label6,label3,label4 {
  padding-left: 20px;
  padding-right: 20px;
  border-style: groove;
  margin-right: 80px;
}

div4 {
  margin-left: 10px;
  margin-bottom: 10px;
  text-align: left;
  display: flex;
  }
  
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 6px 2px;
  border-radius: 50%;
}
p {
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
}
span {
  margin-right: 110px;
  }
span3 {
  padding-right: 65px;
}
span4 {
  padding-right: 48px;
  line-height: 2.5;
}
</style>
