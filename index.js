document.addEventListener('DOMContentLoaded', (event) => {
    // console.log("Ready!")
    navigator.getBattery().then(function(battery) {
        console.log(battery.level*100);
        var level = battery.level*100;
        var showBatteryLevel = document.getElementById("percentage")
        showBatteryLevel.innerHTML = level;
        // ... and any subsequent updates.
        battery.onlevelchange = function() {
          console.log(this.level);
        };
      });
  })