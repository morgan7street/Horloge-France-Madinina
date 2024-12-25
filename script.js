const hourHandFrance = document.getElementById('hour-hand-france');
    const minuteHandFrance = document.getElementById('minute-hand-france');
    const secondHandFrance = document.getElementById('second-hand-france');
    const numbersFrance = document.querySelectorAll('.france .numbers span');

    const hourHandMartinique = document.getElementById('hour-hand-martinique');
    const minuteHandMartinique = document.getElementById('minute-hand-martinique');
    const secondHandMartinique = document.getElementById('second-hand-martinique');
    const numbersMartinique = document.querySelectorAll('.martinique .numbers span');

    function updateClock() {
      // Heure de France
      const nowFrance = new Date();
      updateClockHands(nowFrance, hourHandFrance, minuteHandFrance, secondHandFrance, numbersFrance);

      // Heure de Martinique (UTC-4)
      const nowMartinique = new Date(nowFrance.toLocaleString('en-US', { timeZone: 'America/Martinique' }));
      updateClockHands(nowMartinique, hourHandMartinique, minuteHandMartinique, secondHandMartinique, numbersMartinique);
    }

    function updateClockHands(now, hourHand, minuteHand, secondHand, numbers) {
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourDeg = (hours % 12) * 30 + (minutes * 0.5);
      const minuteDeg = minutes * 6 + (seconds * 0.1);
      const secondDeg = seconds * 6;

      hourHand.style.transform = `rotate(${hourDeg}deg)`;
      minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
      secondHand.style.transform = `rotate(${secondDeg}deg)`;

      // Animation des chiffres
      if (seconds % 5 === 0) {
        const numberIndex = ((seconds / 5) + 11) % 12;
        numbers[numberIndex].style.opacity = '0.4';
      }
      
      // Réinitialiser tous les chiffres au début de chaque tour
      if (seconds === 0) {
        numbers.forEach(number => {
          number.style.opacity = '1';
        });
      }
    }

    setInterval(updateClock, 1000);
    updateClock();
