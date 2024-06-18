function getChineseZodiac(year) {
    const zodiacSigns = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    const startYear = 1900; // Start year of the Chinese zodiac cycle
    return zodiacSigns[(year - startYear) % 12];
  }

module.exports = { getChineseZodiac };