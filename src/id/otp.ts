export class Otp {
  static numeric(length: number): number {
    const smallest = Math.pow(10, length - 1);
    const largest = Math.pow(10, length) - 1;

    const otp = Math.floor(Math.random() * (largest - smallest + 1) + smallest);
    return otp;
  }

  static alphabetic(length: number): string {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let otp = "";
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * alphabet.length);
      otp += alphabet[index];
    }
    return otp;
  }

  static alphaNumeric(length: number): string {
    const minLengthAlpha = Math.ceil(length * 0.5);
    const minLengthNum = length - minLengthAlpha;

    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";

    const getRandomChar = (characters: string): string => {
      const index = Math.floor(Math.random() * characters.length);
      return characters[index];
    };

    let otp = "";

    let countAlpha = 0;
    let countNum = 0;

    for (let i = 0; i < length; i++) {
      if (
        (countAlpha < minLengthAlpha || countNum >= minLengthNum) &&
        countAlpha < length * 0.8
      ) {
        otp += getRandomChar(alphabets);
        countAlpha++;
      } else {
        otp += getRandomChar(numbers);
        countNum++;
      }
    }

    const shuffledOTP = otp
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    return shuffledOTP;
  }
}
