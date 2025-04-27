navigator.getBattery().then(battery => {
    const powerText = document.getElementById("power-text");
    const batteryBar = document.querySelector(".battery-bar");
    const indicator = document.querySelector(".power-indicator");
  
    function updateBatteryStatus() {
      const level = Math.round(battery.level * 100);
      const charging = battery.charging;
  
      powerText.innerText = `Power: ${level}% ${charging ? '(Charging)' : ''}`;
      batteryBar.style.width = `${level}%`;  
  

      indicator.classList.remove('low', 'medium', 'high', 'full');
  
    
      if (level <= 20) {
        indicator.classList.add('low');
        batteryBar.style.backgroundColor = '#ff4d4d'; 
      } else if (level <= 50) {
        indicator.classList.add('medium');
        batteryBar.style.backgroundColor = '#ffa500';  
      } else if (level <= 80) {
        indicator.classList.add('high');
        batteryBar.style.backgroundColor = '#ffeb3b'; 
      } else {
        indicator.classList.add('full');
        batteryBar.style.backgroundColor = '#4caf50';  
      }
    }
  
    updateBatteryStatus();
  
    battery.addEventListener('levelchange', updateBatteryStatus);
    battery.addEventListener('chargingchange', updateBatteryStatus);
  });
  