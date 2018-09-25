<template>
  <div class="indicator">
    
    <p class ='head' >INDICATOR EDIT </p>
    <div class='line'>
        <p class='w1'>OVERSOLD</p>
        <p class='w2'>OVERBOUGHT</p>
        <p class='w3'>TIMEFRAME</p>
        <p class='w4'>PERIOD</p>
        <p class='w5'>AMOUNT</p>
    </div>
    <div class='rsi'>
        <p class='rsi'>RSI</p>
        <input class='oversold' type="text" name="oversold" placeholder="0~100%">
        <input class='overbought' type="text" name="overbought" placeholder="0~100%">
        <select class='timeframe' id="timeframe"> <!--coinex-->
            <option value="60">1 MIN</option>
            <option value="180">3 MIN</option>
            <option value="300">5 MIN</option>
            <option value="900">15 MIN</option>
            <option value="1800">30 MIN</option>
            <option value="3600">1 HOUR</option>
            <option value="7200">2 HOUR</option>
            <option value="14400">4 HOUR</option>
            <option value="21600">6 HOUR</option>
            <option value="43200">12 HOUR</option>
            <option value="86400">1 DAY</option>
            <option value="259200">3 DAY</option>
            <option value="604800">1 WEEK</option>
      </select>
      <!-- <select class='timeframe' id="timeframe">     for binance base is second
            <option value="60">1 MIN</option>
            <option value="180">3 MIN</option>
            <option value="300">5 MIN</option>
            <option value="900">15 MIN</option>
            <option value="1800">30 MIN</option>
            <option value="3600">1 HOUR</option>
            <option value="7200">2 HOUR</option>
            <option value="14400">4 HOUR</option>
            <option value="28800">8 HOUR</option>
            <option value="21600">6 HOUR</option>
            <option value="43200">12 HOUR</option>
            <option value="86400">1 DAY</option>
            <option value="259200">3 DAY</option>
            <option value="604800">1 WEEK</option>
            <option value="2592000">1 MONTH</option>
      </select>
      <select class='timeframe' id="timeframe">   FOR JONVI base is minute
            <option value="1">1 MIN</option>
            <option value="5">5 MIN</option>
            <option value="30">30 MIN</option>
            <option value="60">1 HOUR</option>
            <option value="1440">1 DAY</option>
      </select> -->
        <input class='period' type="text" name="period" placeholder="5~30">
        <input class='amount' type="text" name="amount" placeholder="">
    </div>
    <div class='line2'>
        <p class='w6'>TIMEFRAME</p>
        <p class='w7'>PERIOD</p>
        <p class='w8'>AMOUNT</p>
    </div>
    <div class='ema'>
        <p class='ema'>EMA</p>
        <select class='timeframe2' id="timeframe"> <!--coinex-->
            <option value="60">1 MIN</option>
            <option value="180">3 MIN</option>
            <option value="300">5 MIN</option>
            <option value="900">15 MIN</option>
            <option value="1800">30 MIN</option>
            <option value="3600">1 HOUR</option>
            <option value="7200">2 HOUR</option>
            <option value="14400">4 HOUR</option>
            <option value="21600">6 HOUR</option>
            <option value="43200">12 HOUR</option>
            <option value="86400">1 DAY</option>
            <option value="259200">3 DAY</option>
            <option value="604800">1 WEEK</option>
      </select>
      <!-- <select class='timeframe2' id="timeframe">     for binance base is second
            <option value="60">1 MIN</option>
            <option value="180">3 MIN</option>
            <option value="300">5 MIN</option>
            <option value="900">15 MIN</option>
            <option value="1800">30 MIN</option>
            <option value="3600">1 HOUR</option>
            <option value="7200">2 HOUR</option>
            <option value="14400">4 HOUR</option>
            <option value="28800">8 HOUR</option>
            <option value="21600">6 HOUR</option>
            <option value="43200">12 HOUR</option>
            <option value="86400">1 DAY</option>
            <option value="259200">3 DAY</option>
            <option value="604800">1 WEEK</option>
            <option value="2592000">1 MONTH</option>
      </select>
      <select class='timeframe2' id="timeframe">   FOR JONVI base is minute
            <option value="1">1 MIN</option>
            <option value="5">5 MIN</option>
            <option value="30">30 MIN</option>
            <option value="60">1 HOUR</option>
            <option value="1440">1 DAY</option>
      </select> -->
        <input class='period2' type="text" name="period" placeholder="5~30">
        <input class='amount2' type="text" name="amount" placeholder="">
    </div>
    
    </div>
</template>

<script>
  

export default {
    name: 'indicator',
    data: function() {
      return {
        
      }
    },
    methods: {
      
      
    }
}
</script>

<style scoped>
  p.head {
      font-size: 40px;
  }

  div.line,.rsi,.line2,.ema {
      margin-left: 10px;
      display: flex
  }
  p.w1 {
      margin-left: 120px;
  }
  .w6 {
      margin-left: 160px;
  }
  .w2,.w3,.w4,.w5 {
      margin-left: 80px;
  }
  .w8,.w7 {
    margin-left: 80px;
  }
  input.oversold,.oversold2 {
      margin-top: 15px;
      margin-left: 90px;
      padding-left: 10px;
      height: fit-content;
      width: 60px;
  }
  .overbought,.overbought2 {
      margin-top: 15px;
      margin-left: 100px;
      padding-left: 10px;
      height: fit-content;
      width: 60px;
  }
  .period,.amount,.amount2,.period2 {
      margin-top: 15px;
      margin-left: 70px;
      padding-left: 10px;
      height: fit-content;
      width: 60px;
  }
  select.timeframe,.timeframe2 {
      padding-left: 10px;
      margin-top: 15px;
      margin-left: 110px;
      width: 100px;
      height: fit-content;
  }
  
  
</style>
